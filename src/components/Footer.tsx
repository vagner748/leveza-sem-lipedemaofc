import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Shield, Award } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Sobre a Dra. Wanna", href: "#sobre" },
    { label: "Ebook Lipedema", href: "#ebook" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Agendar Consulta", href: "#consultas" }
  ];

  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Código de Ética Médica", href: "#" }
  ];

  const socialMedia = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/wannaborgesoficial/" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/dra.wannaborges" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@dra.wannaborges" }
  ];

  const certifications = [
    "CRM: 52687448-RJ",
    "Especialista em Lipedema",
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contato" className="bg-[#87725d] text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">DW</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl">Dra. Wanna Borges</h3>
                  <p className="text-background/80">Endocrinologista Especialista em Lipedema</p>
                </div>
              </div>
              
              <p className="text-background/90 leading-relaxed max-w-md">
                Dedicada a transformar a vida de mulheres com lipedema através de 
                tratamento especializado, humanizado e baseado em evidências científicas.
              </p>

              {/* Certifications */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Certificações e Registros:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-background/80">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-background/80 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="font-display font-bold text-lg mb-4">Informações Legais</h4>
                <ul className="space-y-2 text-sm">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-background/70 hover:text-primary transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Contato</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-background/80">
                    <p>R. Dois de Dezembro, 78 - sl 317 - Flamengo</p>
                    <p>Rio de Janeiro - RJ, 22220-040, Brasil</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a 
                    href="tel:+5521976715982"
                    className="text-sm text-background/80 hover:text-primary transition-colors"
                  >
                    +55 21 97671-5982
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:wanilongmais@gmail.com"
                    className="text-sm text-background/80 hover:text-primary transition-colors"
                  >
                    wanilongmais@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="font-semibold mb-4">Siga nas Redes Sociais</h5>
                <div className="flex gap-3">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      >
                        <IconComponent className="w-5 h-5 text-background/80 group-hover:text-primary-foreground" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/70">
              © 2025 Dra. Wanna Borges. Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-6 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Certificada pelo CFM</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/icones/ambiente seguro.webp" alt="Ambiente Seguro" className="h-10" />
                <img src="/icones/lgpd.webp" alt="LGPD" className="h-10" />
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-6 pt-6 border-t border-background/10">
            <p className="text-xs text-background/60 text-center leading-relaxed">
              <strong>Aviso Médico:</strong> As informações contidas neste site têm caráter informativo e educacional. 
              Não substituem a consulta médica presencial. Sempre procure orientação médica para diagnóstico e tratamento adequados. 
              Os resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;