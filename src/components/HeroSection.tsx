import mobileHeroImage from "@/assets/hero-mobile-doctor.jpg";
import heroImage from "@/assets/b8966edf-4623-419e-b234-03643577cd0f.png";
import useParallaxScroll from "@/hooks/use-parallax-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { imageOpacity, textTransform } = useParallaxScroll();

  const headlineContent = (
    <h1 className="font-display font-bold text-foreground leading-tight flex flex-col items-start">
      <span className="text-5xl md:text-7xl">CADA ESCOLHA</span>
      <span className="text-4xl md:text-6xl">é um passo para</span>
      <span className="text-3xl md:text-5xl">
        menos <span className="bg-gradient-medical bg-clip-text text-transparent">dor</span> e mais
      </span>
      <span className="text-2xl md:text-4xl bg-gradient-accent bg-clip-text text-transparent">
        leveza
      </span>
    </h1>
  );

  const subheadlineContent = (
    <div className="max-w-3xl mx-auto md:mx-0 space-y-2">
      <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Endocrinologista há mais de 20 anos</strong>, 
        Dra. Wanna Borges é especialista em lipedemas, e já melhorou a qualidade 
        de vida de mais de <strong className="text-primary">500 pacientes</strong>.
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
      <section className="relative min-h-screen flex flex-col justify-between items-start text-left px-4 pt-8 pb-8">
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
        <div className="relative z-10 w-full max-w-md mt-4">
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