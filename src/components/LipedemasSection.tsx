import { AlertTriangle, Users, Activity, Heart } from "lucide-react";
import useFadeInOnScroll from "@/hooks/use-fade-in-on-scroll";

const LipedemasSection = () => {
  const symptoms = [
    {
      icon: AlertTriangle,
      title: "Dor e Desconforto",
      description: "Dor nas pernas, sensação de peso e cansaço constante",
      color: "text-red-500"
    },
    {
      icon: Activity,
      title: "Inchaço Desproporcional",
      description: "Aumento desproporcional do volume das pernas e braços",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Impacto Emocional",
      description: "Baixa autoestima e limitações nas atividades diárias",
      color: "text-accent"
    }
  ];

  const facts = [
    {
      stat: "11%",
      description: "das mulheres podem ter lipedema",
      highlight: true
    },
    {
      stat: "90%",
      description: "dos casos são diagnosticados tardiamente"
    },
    {
      stat: "80%",
      description: "apresentam histórico familiar"
    }
  ];

  const headerRef = useFadeInOnScroll();
  const statsRef = useFadeInOnScroll();
  const whatIsRef = useFadeInOnScroll();
  const symptomsRef = useFadeInOnScroll();
  const ctaRef = useFadeInOnScroll();

  return (
    <section id="lipedema" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">CONSCIENTIZAÇÃO</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">11%</span> das mulheres sofrem de lipedema
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O lipedema é uma condição médica séria que afeta milhões de mulheres, 
              mas que ainda é subdiagnosticada e incompreendida.
            </p>
          </div>

          {/* Statistics */}
          <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mb-16">
            {facts.map((fact, index) => (
              <div 
                key={index} 
                className={`card-medical text-center ${fact.highlight ? 'border-primary border-2' : ''}`}
              >
                <div className={`text-5xl font-bold mb-4 ${fact.highlight ? 'text-primary' : 'text-secondary'}`}>
                  {fact.stat}
                </div>
                <p className="text-muted-foreground text-lg">
                  {fact.description}
                </p>
                {fact.highlight && (
                  <div className="w-full h-1 bg-gradient-medical rounded-full mt-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* What is Lipedema */}
          <div ref={whatIsRef} className="bg-gradient-wellness rounded-[var(--radius-xl)] p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                O que é o Lipedema?
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                O lipedema é uma doença crônica caracterizada pelo acúmulo anormal e simétrico 
                de tecido gorduroso, principalmente nas pernas e braços. Diferentemente da 
                obesidade comum, o lipedema tem características específicas e requer 
                tratamento especializado.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Doença Genética
                </span>
                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  Afeta Principalmente Mulheres
                </span>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Tem Tratamento
                </span>
              </div>
            </div>
          </div>

          {/* Symptoms */}
          <div ref={symptomsRef}>
            <h3 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Principais Sintomas
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {symptoms.map((symptom, index) => {
                const IconComponent = symptom.icon;
                return (
                  <div key={index} className="card-medical text-center group hover:scale-105 transition-transform duration-300">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-background flex items-center justify-center shadow-gentle group-hover:shadow-medical transition-shadow duration-300`}>
                      <IconComponent className={`w-8 h-8 ${symptom.color}`} />
                    </div>
                    
                    <h4 className="font-display text-xl font-bold text-foreground mb-4">
                      {symptom.title}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {symptom.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div ref={ctaRef} className="text-center mt-16">
            <div className="bg-gradient-medical text-primary-foreground rounded-[var(--radius-xl)] p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Você não está sozinha nessa jornada
              </h3>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Com o diagnóstico correto e tratamento adequado, é possível 
                ter uma vida plena e sem limitações.
              </p>
              <button 
                onClick={() => document.getElementById('consultas')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-background text-foreground px-8 py-3 rounded-[var(--radius-lg)] font-semibold hover:scale-105 transition-transform duration-300"
              >
                Agende sua Avaliação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LipedemasSection;