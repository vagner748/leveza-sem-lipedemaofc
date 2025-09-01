import heroImage from "@/assets/b8966edf-4623-419e-b234-03643577cd0f.png";
import useFadeInOnScroll from "@/hooks/use-fade-in-on-scroll";
import useParallaxScroll from "@/hooks/use-parallax-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const h1Ref = useFadeInOnScroll();
  const subheadlineRef = useFadeInOnScroll();
  const isMobile = useIsMobile();
  const { imageOpacity, textTransform } = useParallaxScroll();

  const textContent = (
    <div className="space-y-6 animate-fade-in">
      {/* Main Headline */}
      <h1 ref={h1Ref} className="font-display text-4xl md:text-7xl font-bold text-foreground leading-tight">
        CADA ESCOLHA É UM PASSO PARA{" "}
        <span className="bg-gradient-medical bg-clip-text text-transparent">
          MENOS DOR
        </span>
        , E{" "}
        <span className="bg-gradient-accent bg-clip-text text-transparent">
          MAIS LEVEZA
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
    </div>
  );

  if (isMobile) {
    return (
      <section className="relative min-h-screen flex flex-col justify-end items-center text-center p-4 pb-16">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '80% center',
            backgroundRepeat: 'no-repeat',
            opacity: imageOpacity,
          }}
        ></div>

        <div className="relative z-10 w-full max-w-md" style={{ transform: textTransform }}>
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
