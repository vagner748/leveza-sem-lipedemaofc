
import { Button } from "@/components/ui/button";
import useFadeInOnScroll from "@/hooks/use-fade-in-on-scroll";

const AuthoritySection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const subheadlineRef = useFadeInOnScroll();
  const ctaRef = useFadeInOnScroll();
  const trustRef = useFadeInOnScroll();

  return (
    <div className="text-center mb-16">
      {/* Subheadline */}
      <div ref={subheadlineRef} className="max-w-3xl mx-auto space-y-4">
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
          <span>15+ anos de experiência</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span>500+ pacientes atendidas</span>
        </div>
      </div>
    </div>
  );
};

export default AuthoritySection;
