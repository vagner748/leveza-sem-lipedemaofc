import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import useFadeInOnScroll from "@/hooks/use-fade-in-on-scroll";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const h1Ref = useFadeInOnScroll();
  const subheadlineRef = useFadeInOnScroll();
  const ctaRef = useFadeInOnScroll();
  const trustRef = useFadeInOnScroll();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 px-4"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(200 95% 45% / 0.1), hsl(320 60% 75% / 0.1)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          {/* Main Headline */}
          <h1 ref={h1Ref} className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Cada escolha é um passo para{" "}
            <span className="bg-gradient-medical bg-clip-text text-transparent">
              menos dor
            </span>
            , e{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              mais leveza
            </span>
          </h1>

          {/* Subheadline */}
          <div ref={subheadlineRef} className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Endocrinologista há 15 anos</strong>, 
              Dra. Wanna Borges é especialista em lipedemas, e já melhorou a qualidade 
              de vida de mais de <strong className="text-primary">500 pacientes</strong>.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Seu e-book, <em className="font-display text-primary">
              "Adeus Lipedema - Volte a se sentir leve e confiante"</em> revela o 
              segredo para ser saudável e feliz.
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={() => scrollToSection('ebook')}
              className="btn-medical text-lg px-8 py-4 animate-pulse-soft"
            >
              Baixar Ebook
            </Button>
            
            <Button
              onClick={() => scrollToSection('consultas')}
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Trust Indicators */}
          <div ref={trustRef} className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>CRM: 12345-SP</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>15+ anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>500+ pacientes atendidas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;