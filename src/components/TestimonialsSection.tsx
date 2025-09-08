import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      age: 42,
      location: "São Paulo, SP",
      condition: "Lipedema Grau 2",
      timeWithDr: "2 anos em tratamento",
      rating: 5,
      text: "Depois de anos sofrendo com dores nas pernas e se sentindo incompreendida, finalmente encontrei na Dra. Wanna alguém que realmente entende o lipedema. Seu tratamento mudou completamente minha qualidade de vida. Hoje consigo caminhar sem dor e voltei a me sentir confiante.",
      results: [
        "70% redução nas dores",
        "Melhora na autoestima",
        "Retorno às atividades físicas"
      ],
      beforeAfter: {
        before: "Dores intensas diárias, dificuldade para caminhar",
        after: "Vida ativa, sem limitações, confiante"
      }
    },
    {
      name: "Ana Santos",
      age: 38,
      location: "Rio de Janeiro, RJ",
      condition: "Lipedema + Obesidade",
      timeWithDr: "1 ano em tratamento",
      rating: 5,
      text: "A Dra. Wanna não trata apenas o lipedema, ela cuida da pessoa toda. Seu método integrou nutrição, exercícios e cuidado emocional. Perdi 25kg de forma saudável e hoje entendo meu corpo como nunca antes. Ela salvou minha vida, literalmente.",
      results: [
        "25kg de perda de peso",
        "Melhora nos exames laboratoriais",
        "Redução significativa do inchaço"
      ],
      beforeAfter: {
        before: "Sobrepeso, depressão, sedentarismo",
        after: "Peso saudável, feliz, ativa"
      }
    },
    {
      name: "Carla Oliveira",
      age: 35,
      location: "Belo Horizonte, MG",
      condition: "Lipedema Grau 1",
      timeWithDr: "6 meses em tratamento",
      rating: 5,
      text: "O que mais me impressiona na Dra. Wanna é sua dedicação e conhecimento. Ela realmente escuta suas pacientes e adapta o tratamento para cada necessidade. Com apenas 6 meses, já vejo resultados impressionantes. Recomendo para todas as mulheres!",
      results: [
        "Redução do inchaço",
        "Melhora na circulação",
        "Maior mobilidade"
      ],
      beforeAfter: {
        before: "Inchaço constante, desconforto",
        after: "Pernas mais leves, disposição"
      }
    },
    {
      name: "Juliana Costa",
      age: 45,
      location: "Porto Alegre, RS",
      condition: "Lipedema + Diabetes",
      timeWithDr: "3 anos em tratamento",
      rating: 5,
      text: "Além de tratar meu lipedema, a Dra. Wanna me ajudou a controlar completamente meu diabetes. Sua abordagem integral fez toda a diferença. Hoje sou uma pessoa totalmente diferente - saudável, confiante e feliz. Gratidão eterna!",
      results: [
        "Diabetes controlado",
        "HbA1c normalizada",
        "Qualidade de vida excelente"
      ],
      beforeAfter: {
        before: "Diabetes descontrolado, lipedema avançado",
        after: "Saúde estável, lipedema controlado"
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Quote className="w-5 h-5 text-accent" />
              <span className="text-primary font-semibold">DEPOIMENTOS</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Histórias de Transformação
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça algumas das mulheres que já transformaram suas vidas 
              com o tratamento especializado da Dra. Wanna.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="relative">
            <div className="bg-gradient-wellness rounded-[var(--radius-xl)] p-8 md:p-12 shadow-gentle">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Patient Info & Quote */}
                <div className="space-y-6">
                  {/* Patient Details */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-bold text-xl">
                        {current.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {current.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {current.age} anos • {current.location}
                      </p>
                      <p className="text-sm text-primary font-semibold">
                        {current.condition}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex text-accent">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {current.timeWithDr}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                    <Quote className="w-8 h-8 text-accent mb-4" />
                    "{current.text}"
                  </blockquote>
                </div>

                {/* Results & Before/After */}
                <div className="space-y-8">
                  {/* Results */}
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-4">
                      Resultados Alcançados:
                    </h4>
                    <div className="space-y-3">
                      {current.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Before/After */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h5 className="font-semibold text-foreground mb-2">Antes:</h5>
                      <p className="text-sm text-muted-foreground">
                        {current.beforeAfter.before}
                      </p>
                    </div>
                    <div className="bg-gradient-medical text-primary-foreground rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Depois:</h5>
                      <p className="text-sm opacity-90">
                        {current.beforeAfter.after}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      onClick={() => document.getElementById('consultas')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-wellness w-full"
                    >
                      Quero Ter Resultados Como {current.name.split(' ')[0]}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-accent scale-125' 
                        : 'bg-muted-foreground hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Satisfação das pacientes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Vidas transformadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <p className="text-muted-foreground">Anos especializados em lipedema</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;