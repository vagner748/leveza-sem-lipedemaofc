import mobileHeroImage from "@/assets/hero-mobile-doctor.jpg";
import heroImage from "@/assets/b8966edf-4623-419e-b234-03643577cd0f.png";
import useParallaxScroll from "@/hooks/use-parallax-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { imageOpacity, textTransform } = useParallaxScroll();

  const headlineContent = (
    <h1 className="font-display text-4xl md:text-7xl font-bold text-foreground leading-tight">
      CADA ESCOLHA É UM <br />
      PASSO PARA MENOS <br />
      <span className="bg-gradient-medical bg-clip-text text-transparent">DOR</span>, E{" "}
      <span className="bg-gradient-accent bg-clip-text text-transparent">
        MAIS LEVEZA
      </span>
    </h1>
  );

  const subheadlineContent = (
    <div className="max-w-3xl mx-auto md:mx-0 space-y-4">
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
  );

  const textContent = (
    <div className="space-y-6 animate-fade-in">
      {headlineContent}
      {subheadlineContent}
    </div>
  );

  if (isMobile) {
    return (
      <section className="relative min-h-screen flex flex-col justify-between items-center text-center px-4 pt-28 pb-8">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${mobileHeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="relative z-10 w-full max-w-md">
          {headlineContent}
        </div>
        <div className="relative z-10 w-full max-w-md text-left">
          <img src="/ebook/ebook-cover.png" alt="Ebook cover" className="w-32" />
        </div>
        <div className="relative z-10 w-full max-w-md">
          {subheadlineContent}
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
        className="relative container mx-auto max-w-7xl px-8 flex justify-between items-center"
      >
        <div className="max-w-xl text-left" style={{ transform: textTransform }}>
          {textContent}
        </div>
        <div className="mr-60">
          <img src="/ebook/ebook-cover.png" alt="Ebook cover" className="w-48" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;