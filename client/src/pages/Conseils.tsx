import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { Star, Heart, BookOpen, Calendar, Users, Award, Dumbbell, Target, Zap } from 'lucide-react';

export default function Conseils() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-8 md:py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/conseil.png"
              alt="Conseils Fitness FitCorner"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-bold leading-tight">
                Conseils Fitness
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Votre guide complet pour atteindre vos objectifs fitness à la maison.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Des conseils d'experts, programmes d'entraînement et astuces nutrition pour transformer votre corps.
              </p>
            </div>

            <div className="text-center px-4">
              <Link href="/collection">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Découvrir nos équipements
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Conseils Fitness
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Des conseils d'experts pour maximiser vos résultats à la maison
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center p-4 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Dumbbell className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Entraînement Efficace</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Découvrez les meilleures techniques d'entraînement avec nos équipements pour des résultats optimaux.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Objectifs Personnalisés</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Définissez vos objectifs et suivez des programmes adaptés à votre niveau et à vos envies.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Motivation Quotidienne</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Des astuces pour rester motivé et intégrer le fitness dans votre routine quotidienne.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Santé & Bien-être</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Prenez soin de votre corps et de votre esprit avec nos conseils nutrition et récupération.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Communauté Active</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Rejoignez notre communauté de sportifs passionnés et partagez vos progrès.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Résultats Durables</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Des habitudes saines qui se prolongent pour une vie plus active et équilibrée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu des Conseils */}
        <section className="py-12 md:py-16 lg:py-20 bg-secondary/5">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Conseils Pratiques
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Des guides complets pour réussir votre transformation physique
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">Évaluation Initiale</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Déterminez votre niveau actuel et définissez des objectifs réalistes et motivants.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">Programme Personnalisé</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Choisissez un programme adapté à vos équipements et à votre disponibilité.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">Techniques d'Entraînement</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Apprenez les bonnes postures et techniques pour éviter les blessures.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">Suivi des Progrès</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Mesurez vos améliorations et ajustez votre programme selon vos résultats.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">5</div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">Nutrition & Récupération</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Conseils alimentation et récupération pour optimiser vos performances.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border border-border">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">Nos Guides Pratiques</h3>
                <div className="space-y-3 sm:space-y-4 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border">
                    <span className="font-medium mb-1 sm:mb-0">Débutant</span>
                    <span className="text-right sm:text-left">Programme 8 semaines</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border">
                    <span className="font-medium mb-1 sm:mb-0">Intermédiaire</span>
                    <span className="text-right sm:text-left">Entraînements avancés</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border">
                    <span className="font-medium mb-1 sm:mb-0">Perte de poids</span>
                    <span className="text-right sm:text-left">HIIT & cardio</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border">
                    <span className="font-medium mb-1 sm:mb-0">Musculation</span>
                    <span className="text-right sm:text-left">Force & hypertrophie</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border">
                    <span className="font-medium mb-1 sm:mb-0">Yoga & Pilates</span>
                    <span className="text-right sm:text-left">Flexibilité & posture</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2">
                    <span className="font-medium mb-1 sm:mb-0">Équipement</span>
                    <span className="text-primary font-bold text-right sm:text-left">Guide d'achat inclus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Prêt à commencer votre transformation ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Rejoignez notre communauté de sportifs motivés et atteignez vos objectifs fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
              <Link href="/collection">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-background text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors text-sm sm:text-base">
                  Découvrir nos équipements
                </button>
              </Link>
              <Link href="/apropos">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors text-sm sm:text-base">
                  En savoir plus sur FitCorner
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}