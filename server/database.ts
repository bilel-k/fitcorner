import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbPath = path.join(__dirname, '..', 'database.sqlite')
const db = new Database(dbPath)

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL')

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    customer_address TEXT,
    items TEXT NOT NULL, -- JSON string
    total REAL NOT NULL,
    status TEXT DEFAULT 'pending',
    payment_intent_id TEXT,
    paypal_order_id TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    image TEXT,
    category TEXT,
    in_stock BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

// Prepare statements
export const statements = {
  // Orders
  createOrder: db.prepare(`
    INSERT INTO orders (order_id, customer_name, customer_email, customer_phone, customer_address, items, total, payment_intent_id, paypal_order_id, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),

  getOrderById: db.prepare('SELECT * FROM orders WHERE order_id = ?'),

  getOrdersByEmail: db.prepare('SELECT * FROM orders WHERE customer_email = ? ORDER BY created_at DESC'),

  updateOrderStatus: db.prepare('UPDATE orders SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE order_id = ?'),

  // Products
  getAllProducts: db.prepare('SELECT * FROM products WHERE in_stock = 1 ORDER BY created_at DESC'),

  getProductById: db.prepare('SELECT * FROM products WHERE id = ?'),

  createProduct: db.prepare(`
    INSERT INTO products (name, description, price, image, category, in_stock)
    VALUES (?, ?, ?, ?, ?, ?)
  `),
}

export default db