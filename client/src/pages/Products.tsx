import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Products from '@/components/Products';
import { useSEO } from '@/hooks/useSEO';

export default function ProductsPage() {
  useSEO({
    title: 'Nos Produits - FitCorner | Équipements de Fitness & Musculation',
    description: 'Découvrez notre collection d\'équipements de fitness pour la maison. Kits de musculation, tapis de yoga, haltères et plus encore.',
    keywords: ['fitness', 'musculation', 'équipements sport', 'tapis yoga', 'haltères', 'entraînement maison'],
    type: 'website'
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <Products />
      </main>
      <Footer />
    </div>
  );
}