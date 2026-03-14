import { Target, Dumbbell, Heart } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: Dumbbell,
      title: 'Équipements de qualité professionnelle',
      description: '',
    },
    {
      icon: Target,
      title: 'Entraînements accessibles à tous',
      description: '',
    },
    {
      icon: Heart,
      title: 'Santé et bien-être au quotidien',
      description: '',
    },
  ];

  return (
    <section className="py-6 md:py-12 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl text-foreground">
            Fitness accessible
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des équipements pensés pour rendre le fitness accessible et efficace pour tous.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:bg-card/50 dark:hover:bg-card/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-lg transition-transform duration-300 hover:scale-110">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl text-foreground">
                    {value.title}
                  </h3>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
