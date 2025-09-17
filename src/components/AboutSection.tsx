import { Award, Users, Clock, GraduationCap } from "lucide-react";
import draWannaImage from "@/assets/8e09938f-b913-4958-8bdb-53e25edb703e.png";
import useFadeInOnScroll from "@/hooks/use-fade-in-on-scroll";

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Graduação em Medicina Faculdade de Medicina Teresopólis"
    },
    {
      icon: Award,
      title: "Especializações",
      description: "Especialista em Lipedema\nEndocrinologia e Metabologia\nNutrologia Clínica"
    },
    {
      icon: Clock,
      title: "Experiência",
      description: "20 anos de prática clínica\n4 anos focada em lipedema\nMais de 3.000 consultas"
    },
    {
      icon: Users,
      title: "Resultados",
      description: "500+ pacientes com lipedema\n95% de satisfação\nMétodo próprio de tratamento"
    }
  ];

  const testimonials = [
    {
      text: "Dra. Wanna mudou minha vida. Finalmente encontrei alguém que entende o lipedema e me deu esperança.",
      author: "Maria Silva",
      role: "Paciente há 2 anos"
    },
    {
      text: "Profissional excepcional! Seu método de tratamento é revolucionário. Hoje vivo sem dor.",
      author: "Ana Santos",
      role: "Paciente há 1 ano"
    }
  ];

  const headerRef = useFadeInOnScroll();
  const mainContentRef = useFadeInOnScroll();
  const credentialsRef = useFadeInOnScroll();
  const testimonialsRef = useFadeInOnScroll();

  return (
    <section id="sobre" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">ESPECIALISTA</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dra. Wanna Borges
            </h2>
            <p className="font-display text-2xl text-accent mb-4">
              Especialista em Lipedema
            </p>
            <p className="text-lg text-gray-700">
              CRM: 52687448-RJ
            </p>
          </div>

          <div ref={mainContentRef} className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Photo and Main Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-medical rounded-[var(--radius-xl)] blur-3xl opacity-20"></div>
                <img
                  src={draWannaImage}
                  alt="Dra. Wanna Borges"
                  className="relative w-full rounded-[var(--radius-xl)] shadow-medical"
                />
                
                {/* Trust Badge */}
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold text-lg shadow-gentle">
                  CRM Ativo
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="text-center p-4 bg-gradient-wellness rounded-lg">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div className="text-center p-4 bg-gradient-wellness rounded-lg">
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Pacientes tratadas</div>
                </div>
              </div>
            </div>

            {/* Professional Story */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold text-foreground">
                  Uma trajetória dedicada ao seu bem-estar
                </h3>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Com mais de 20 anos de experiência em Endocrinologia, 
                    <strong className="text-foreground"> Dra. Wanna Borges</strong> é 
                    reconhecida como uma das principais especialistas em lipedema do país.
                  </p>
                  
                  <p>
                    Sua paixão pelo tratamento do lipedema surgiu após perceber a 
                    <strong className="text-primary"> falta de informação e tratamentos adequados </strong> 
                    para suas pacientes. Desde então, desenvolveu um método próprio que 
                    combina medicina baseada em evidências com cuidado humanizado.
                  </p>
                  
                  <p>
                    Autora do ebook <em className="font-display text-primary">
                    "Adeus Lipedema"</em>, já ajudou centenas de mulheres a 
                    <strong className="text-secondary"> recuperarem sua autoestima e qualidade de vida</strong>.
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-accent p-6 rounded-[var(--radius-lg)]">
                <blockquote className="text-lg italic text-accent-foreground leading-relaxed">
                  "Minha missão é que toda mulher com lipedema tenha acesso 
                  a informação de qualidade e tratamento adequado. Acredito que 
                  cada paciente merece ser ouvida, compreendida e tratada com dignidade."
                </blockquote>
                <cite className="block mt-4 font-semibold text-accent-foreground">
                  - Dra. Wanna Borges
                </cite>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div ref={credentialsRef} className="mb-20">
            <h3 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Credenciais e Experiência
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((credential, index) => {
                const IconComponent = credential.icon;
                return (
                  <div key={index} className="card-medical text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-medical flex items-center justify-center group-hover:shadow-medical transition-shadow duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h4 className="font-display text-lg font-bold text-foreground mb-3">
                      {credential.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {credential.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div ref={testimonialsRef}>
            <h3 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              O que dizem as pacientes
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-medical">
                  <div className="mb-6">
                    <div className="flex text-brown mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic text-muted-foreground leading-relaxed mb-4">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <cite className="font-semibold text-foreground not-italic">
                        {testimonial.author}
                      </cite>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;