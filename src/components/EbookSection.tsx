import { Button } from "@/components/ui/button";
import { CheckCircle, Download, BookOpen, Heart } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.webp";
import useFadeInOnScroll from "@/hooks/use-fade-in-on-scroll";

const MovedContent = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaRef = useFadeInOnScroll();
  const trustRef = useFadeInOnScroll();

  return (
    <div className="text-center mb-16">
      {/* CTA Buttons */}
      <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
        <Button
          onClick={() => scrollToSection('ebook')}
          className="btn-medical text-base px-6 py-3 animate-pulse-soft w-full sm:w-auto"
        >
          Transforme sua dor em alívio
        </Button>
        
        <Button
          onClick={() => scrollToSection('consultas')}
          variant="outline"
          className="text-base px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
        >
          Agende sua Consulta
        </Button>
      </div>

      {/* Trust Indicators */}
      <div ref={trustRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>CRM: 52687448-RJ</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <span>20+ anos de experiência</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span>500+ pacientes atendidas</span>
        </div>
      </div>
    </div>
  );
}

const EbookSection = () => {
  const benefits = [
    "Entenda completamente o que é o lipedema e como identificá-lo",
    "Descubra estratégias alimentares específicas para reduzir a inflamação",
    "Aprenda exercícios seguros e eficazes para seu tipo corporal",
    "Conheça as opções de tratamento mais modernas e eficazes"
  ];

  const buyers = [
    { name: 'Ana',   src: '/perfil-vendas/compradora1.webp' },
    { name: 'Carla', src: '/perfil-vendas/compradora2.webp' },
    { name: 'Sofia', src: '/perfil-vendas/compradora3.webp' },
    { name: 'Joana', src: '/perfil-vendas/compradora4.webp' },
  ];

  const headerRef = useFadeInOnScroll();
  const contentRef = useFadeInOnScroll();
  const socialProofRef = useFadeInOnScroll();
  const ctaRef = useFadeInOnScroll();

  return (
    <section id="ebook" className="py-5 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-xl text-muted-foreground text-center mb-8">
            Seu e-book, <em className="font-display text-primary">
            "Adeus Lipedema - Volte a se sentir leve e confiante"</em> revela o 
            segredo para ser saudável e feliz.
          </p>
          <MovedContent />
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">EBOOK EXCLUSIVO</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Adeus Lipedema
            </h2>
            <p className="font-display text-2xl md:text-3xl text-muted-foreground mb-4">
              Volte a se sentir leve e confiante
            </p>
            
            <div className="flex items-center justify-center gap-2 text-xl text-primary font-semibold">
              <Heart className="w-6 h-6 fill-current" />
              <span>Descubra o segredo por trás de uma vida sem dor</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Ebook Mockup */}
            <div className="relative">
              <div className="relative group">
                <img
                  src={ebookMockup}
                  alt="Ebook Adeus Lipedema"
                  className="w-full max-w-md mx-auto animate-float shadow-medical rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-medical opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm animate-pulse-soft sm:-top-4 sm:-right-4">
                R$:47,00
              </div>
              
              <div className="absolute bottom-0 left-0 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium sm:-bottom-4 sm:-left-4">
                PDF + EPUB
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="space-y-8">
              <p className="text-base md:text-xl text-muted-foreground">
                Seu e-book, <em className="font-display text-primary">
                "Adeus Lipedema - Volte a se sentir leve e confiante"</em> revela o 
                segredo para ser saudável e feliz.
              </p>
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold text-foreground">
                  O que você vai descobrir:
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Proof */}
              <div ref={socialProofRef} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2 overflow-hidden">
                    {buyers.map((buyer) => (
                      <img
                        key={buyer.name}
                        src={buyer.src}
                        alt={`Foto de ${buyer.name}, compradora do ebook`}
                        className="inline-block h-10 w-10 rounded-full border-2 border-background"
                        title={buyer.name}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">+1.200 downloads</p>
                    <p className="text-sm text-muted-foreground">nas últimas 4 semanas</p>
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground">
                  "Finalmente encontrei informações confiáveis sobre lipedema. 
                  Este ebook mudou minha vida!" - Maria S.
                </p>
              </div>

              {/* CTA */}
              <div ref={ctaRef} className="space-y-4">
                <Button asChild className="btn-medical w-full text-lg py-4">
                  <a
                    href="https://pay.hotmart.com/R99789259P?checkoutMode=10&bid=1755551894672"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Comece sua jornada sem dor!
                  </a>
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  📧 Enviado instantaneamente para seu email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
