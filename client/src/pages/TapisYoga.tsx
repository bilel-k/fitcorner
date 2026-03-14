import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetails from '@/components/ProductDetails';

export default function TapisYoga() {
  const product = {
    id: 2,
    name: "Tapis de Yoga Premium",
    subtitle: "Anti-dérapant",
    description: "Tapis de yoga de haute qualité, épais et confortable pour toutes vos séances de yoga et pilates.",
    longDescription: `Le Tapis de Yoga Premium est conçu pour offrir un confort optimal et une adhérence parfaite
pendant vos séances de yoga, pilates ou méditation.

Caractéristiques principales :
• Épaisseur de 6mm pour un amorti idéal des articulations
• Surface anti-dérapante pour une stabilité maximale
• Matériau écologique et durable
• Facile à nettoyer et à rouler
• Design sobre et élégant

Que vous pratiquiez le yoga Hatha, Vinyasa, Ashtanga ou simplement des étirements quotidiens,
ce tapis vous accompagnera dans votre pratique pour des séances plus agréables et efficaces.`,
    image: "/images/tapisyogapng",
    price: 19.99,
    features: [
      "Épaisseur 6mm pour le confort",
      "Surface anti-dérapante",
      "Matériau écologique TPE",
      "Poids léger et facile à transporter",
      "Résistant et durable",
      "Lavable à l'eau savonneuse"
    ],
    testimonials: [
      {
        name: "Sophie M.",
        text: "Excellent tapis, très confortable et anti-dérapant. Idéal pour mes séances de yoga à la maison.",
        rating: 5
      },
      {
        name: "Lucas P.",
        text: "Qualité premium, je le recommande à tous les pratiquants de yoga. Très stable même en sueur.",
        rating: 5
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="order-1">
                <img
                  src="/images/tapisyogapng"
                  alt="Tapis de Yoga Premium"
                  className="w-full h-auto rounded-lg shadow-lg sticky top-24"
                />
              </div>

              {/* Content */}
              <div className="order-2">
                <ProductDetails product={product} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}