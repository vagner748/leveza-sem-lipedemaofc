import { Button } from "@/components/ui/button";
import heroImage from "@/assets/b8966edf-4623-419e-b234-03643577cd0f.png";
import useFadeInOnScroll from "@/hooks/use-fade-in-on-scroll";
import useParallaxScroll from "@/hooks/use-parallax-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const { imageOpacity, textTransform } = useParallaxScroll();

  const textContent = (
    <div className="space-y-6 animate-fade-in">
      {/* Main Headline */}
      <h1 ref={h1Ref} className="font-display text-4xl md:text-7xl font-bold text-foreground leading-tight">
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
      <div ref={subheadlineRef} className="max-w-3xl mx-auto md:mx-0 space-y-4">
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Endocrinologista há mais de 20 anos</strong>, 
          Dra. Wanna Borges é especialista em lipedemas, e já melhorou a qualidade 
          de vida de mais de <strong className="text-primary">500 pacientes</strong>.
        </p>
        
        <p className="text-base md:text-xl text-muted-foreground">
          Seu e-book, <em className="font-display text-primary">
          "Adeus Lipedema - Volte a se sentir leve e confiante"</em> revela o 
          segredo para ser saudável e feliz.
        </p>
      </div>

      {/* CTA Buttons */}
      <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-6">
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
      <div ref={trustRef} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>CRM: 52687448-RJ</span>
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
  );

  if (isMobile) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center p-4 pt-24 text-center">
        <div className="w-full flex justify-center">
            <img 
                src={heroImage} 
                alt="Dra. Wanna Borges" 
                className="h-[45vh] w-auto object-cover object-right rounded-lg shadow-lg"
            />
        </div>

        <div className="h-8"></div> 

        <div className="w-full max-w-md">
          {textContent}
        </div>
      </section>
    )
  }

  return (
    <section 
      className="relative min-h-screen flex items-center"
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: imageOpacity,
        }}
      ></div>
      <div 
        className="relative container mx-auto max-w-7xl px-8"
        style={{ transform: textTransform }}
      >
        <div className="max-w-xl text-left">
          {textContent}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;