import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetails from '@/components/ProductDetails';

export default function Halteres() {
  const product = {
    id: 3,
    name: "Haltères Ajustables",
    subtitle: "5-25kg",
    description: "Haltères ajustables de 5 à 25kg, parfaits pour la musculation à domicile.",
    longDescription: `Les Haltères Ajustables 5-25kg sont l'équipement essentiel pour votre salle de sport à domicile.
Grâce à leur système d'ajustement rapide, vous pouvez modifier le poids en quelques secondes
pour adapter vos exercices à votre niveau et à vos objectifs.

Caractéristiques :
• Poids ajustable de 5kg à 25kg par haltère
• Système de verrouillage sécurisé
• Poignées ergonomiques anti-dérapantes
• Disques de poids empilables
• Base stable pour les exercices au sol
• Idéal pour tous les niveaux

Que vous souhaitiez gagner en masse musculaire, tonifier votre corps ou simplement
maintenir votre forme, ces haltères vous offrent une multitude d'exercices possibles.`,
    image: "/images/halteres.png",
    price: 39.99,
    features: [
      "Poids ajustable 5-25kg",
      "Système de verrouillage rapide",
      "Poignées ergonomiques",
      "Disques interchangeables",
      "Base stable incluse",
      "Convient à tous les niveaux"
    ],
    testimonials: [
      {
        name: "Thomas R.",
        text: "Haltères de qualité professionnelle. L'ajustement est rapide et sécurisé. Parfait pour la maison.",
        rating: 5
      },
      {
        name: "Emma C.",
        text: "Enfin des haltères qui ne prennent pas toute la place. L'ajustement est un jeu d'enfant.",
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
                  src="/images/halteres.png"
                  alt="Haltères Ajustables"
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