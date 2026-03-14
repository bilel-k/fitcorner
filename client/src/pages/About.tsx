import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16 md:mb-20 space-y-4">
              <h1 className="text-4xl md:text-5xl text-foreground">
                À propos
              </h1>
              <div className="mb-8">
                <img
                  src="/images/fitcornerlogo.png"
                  alt="FitCorner Logo"
                  className="mx-auto max-w-xs h-auto"
                />
              </div>
              <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                <p>
                  FitCorner est née d'une passion pour le fitness accessible et efficace pour tous.
                </p>
                <p>
                  Dans un monde où le temps est précieux, nous proposons des équipements de qualité qui permettent de s'entraîner à la maison sans compromis.
                </p>
                <p>
                  Des produits pensés pour s'intégrer naturellement à votre quotidien, que vous soyez débutant ou athlète confirmé.
                </p>
                <p>
                  Chaque équipement repose sur trois piliers essentiels : la qualité, l'accessibilité et l'efficacité.
                </p>
                <p>
                  Des kits de musculation, tapis de yoga, haltères et bien d'autres... conçus pour votre corps, votre santé et votre bien-être.
                </p>
                <p className="font-semibold text-primary">
                  FitCorner — atteindre vos objectifs fitness avec qualité et simplicité.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}