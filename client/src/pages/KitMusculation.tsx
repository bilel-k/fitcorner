import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetails from '@/components/ProductDetails';

export default function KitMusculation() {
  const product = {
    id: 1,
    name: "Kit Musculation Maison",
    subtitle: "Complet",
    description: "Tout ce dont vous avez besoin pour vous entraîner à la maison : bandes élastiques, haltères, guide d'exercices.",
    longDescription: `Le Kit Musculation Maison est votre partenaire idéal pour des entraînements efficaces à domicile.
Ce kit complet comprend tout le nécessaire pour développer votre force musculaire sans avoir besoin
d'aller en salle de sport.

Inclus dans le kit :
- Bandes de résistance élastiques de différentes intensités
- Haltères légers pour les exercices de base
- Guide d'exercices illustré avec plus de 50 mouvements
- Sac de transport pratique

Que vous soyez débutant ou sportif confirmé, ce kit vous permettra de suivre un programme
d'entraînement personnalisé pour atteindre vos objectifs de remise en forme.`,
    image: "/images/kitmusculationmaison.webp",
    price: 29.99,
    features: [
      "Bandes élastiques multi-niveaux",
      "Haltères ajustables inclus",
      "Guide d'exercices détaillé",
      "Sac de transport",
      "Matériau durable et sécurisé",
      "Parfait pour débutants et avancés"
    ],
    testimonials: [
      {
        name: "Marie L.",
        text: "Excellent kit pour s'entraîner à la maison. Les bandes sont de très bonne qualité et le guide est super complet.",
        rating: 5
      },
      {
        name: "Pierre D.",
        text: "J'ai enfin trouvé une alternative sérieuse à la salle de sport. Résultats visibles au bout de quelques semaines.",
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
                  src="/images/kitmusculationmaison.webp"
                  alt="Kit Musculation Maison"
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