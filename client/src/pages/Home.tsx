import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { usePerformance } from '@/hooks/usePerformance';

/**
 * FitCorner - Page d'accueil
 * Design: Minimalisme Fitness Moderne
 * 
 * Palette: Blanc pur, Bleu dynamique, Vert énergie, Gris moderne
 * Typographie: Montserrat (titres) + Inter (corps) + Poppins (labels)
 * Principes: Dynamisme, motivation, santé et bien-être
 */
export default function Home() {
  useSEO({
    title: 'FitCorner - Équipements Fitness & Musculation | Entraînement à Domicile',
    description: 'Découvrez notre collection d\'équipements de fitness pour la maison. Kits de musculation, tapis de yoga, haltères. Atteignez vos objectifs de forme physique.',
    keywords: ['fitness', 'musculation', 'équipements sport', 'entraînement maison', 'tapis yoga', 'haltères', 'santé', 'bien-être'],
    type: 'website'
  });
  // Mesurer les performances Core Web Vitals
  usePerformance();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Values />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
