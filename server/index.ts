import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Stripe from 'stripe'
import { Resend } from 'resend'
import db, { statements } from './database.js'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'dist', 'public')))

// Initialize services
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY!)

// API Routes

// Stripe payment intent creation
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'chf', metadata } = req.body

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error: any) {
    console.error('Stripe error:', error)
    res.status(500).json({ error: error.message })
  }
})

// PayPal order creation
app.post('/api/paypal/create-order', async (req, res) => {
  try {
    const { amount, currency = 'CHF' } = req.body

    // For now, return a mock response since PayPal SDK integration needs more work
    const mockOrderId = `PAYPAL-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    res.json({
      orderId: mockOrderId,
      order: {
        id: mockOrderId,
        status: 'CREATED',
        purchase_units: [{
          amount: {
            currency_code: currency,
            value: amount.toFixed(2),
          },
        }],
      },
    })
  } catch (error: any) {
    console.error('PayPal create order error:', error)
    res.status(500).json({ error: error.message })
  }
})

// PayPal order capture
app.post('/api/paypal/capture-order', async (req, res) => {
  try {
    const { orderId } = req.body

    // For now, return a mock response
    res.json({
      capture: {
        id: `CAPTURE-${Date.now()}`,
        status: 'COMPLETED',
      },
      orderId: orderId,
    })
  } catch (error: any) {
    console.error('PayPal capture error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Create order
app.post('/api/orders', async (req, res) => {
  try {
    const { customer, items, total, paymentIntentId } = req.body

    // Generate unique order ID
    const orderId = `FC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Save order to database
    statements.createOrder.run(
      orderId,
      customer.name,
      customer.email,
      customer.phone || null,
      JSON.stringify(customer.address || {}),
      JSON.stringify(items),
      total,
      paymentIntentId || null,
      null, // paypal_order_id
      'confirmed'
    )

    // Send confirmation email
    try {
      await resend.emails.send({
        from: 'FitCorner <noreply@fitcorner.com>',
        to: customer.email,
        subject: `Confirmation de commande - ${orderId}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2563eb;">Merci pour votre commande !</h1>
            <p>Bonjour ${customer.name},</p>
            <p>Votre commande <strong>${orderId}</strong> a été confirmée avec succès.</p>

            <h2>Détails de la commande :</h2>
            <ul>
              ${items.map((item: any) => `
                <li>${item.name} x${item.quantity} - CHF ${item.price * item.quantity}</li>
              `).join('')}
            </ul>

            <p><strong>Total : CHF ${total}</strong></p>

            <p>Nous vous contacterons bientôt pour organiser la livraison.</p>

            <p>Cordialement,<br>L'équipe FitCorner</p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the order if email fails
    }

    res.json({ orderId, success: true })
  } catch (error: any) {
    console.error('Order creation error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Get orders by email
app.get('/api/orders', async (req, res) => {
  try {
    const { email } = req.query

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    const orders = statements.getOrdersByEmail.all(email as string)

    // Parse JSON fields
    const formattedOrders = orders.map(order => ({
      ...order,
      items: JSON.parse(order.items),
      customerAddress: JSON.parse(order.customer_address || '{}'),
      createdAt: order.created_at,
    }))

    res.json(formattedOrders)
  } catch (error: any) {
    console.error('Get orders error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Get single order
app.get('/api/orders/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params
    const order = statements.getOrderById.get(orderId)

    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }

    const formattedOrder = {
      ...order,
      items: JSON.parse(order.items),
      customerAddress: JSON.parse(order.customer_address || '{}'),
      createdAt: order.created_at,
    }

    res.json(formattedOrder)
  } catch (error: any) {
    console.error('Get order error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Products API (for future use)
app.get('/api/products', async (req, res) => {
  try {
    const products = statements.getAllProducts.all()
    res.json(products)
  } catch (error: any) {
    console.error('Get products error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'public', 'index.html'))
})

// Error handling middleware
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', error)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📊 Database: ${db.name}`)
  console.log(`💳 Stripe: ${process.env.STRIPE_SECRET_KEY ? 'Configured' : 'Missing'}`)
  console.log(`💰 PayPal: ${process.env.PAYPAL_CLIENT_ID ? 'Configured' : 'Missing'}`)
  console.log(`📧 Email: ${process.env.RESEND_API_KEY ? 'Configured' : 'Missing'}`)
})