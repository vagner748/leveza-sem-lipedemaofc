import { useState } from "react";
import { Calendar, MapPin, Clock, Phone, Mail, Instagram, Video, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    preferredDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const consultationTypes = [
    { value: "endocrinologia", label: "Consulta Endocrinologia", icon: Building },
    { value: "nutrologia", label: "Consulta Nutrológica", icon: Building },
    { value: "teleconsulta", label: "Teleconsulta", icon: Video },
    { value: "bioimpedancia", label: "Bioimpedância", icon: Building }
  ];

  const scheduleInfo = [
    {
      day: "Segunda a Sexta",
      hours: "08:00 - 18:00",
      type: "Consultas Presenciais"
    },
    {
      day: "Sábados",
      hours: "08:00 - 14:00",
      type: "Consultas Presenciais"
    },
    {
      day: "Segunda a Sexta",
      hours: "19:00 - 21:00",
      type: "Teleconsultas"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 21 97668-1351",
      action: "tel:+5521976681351"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@drawannaborges.com.br",
      action: "mailto:contato@drawannaborges.com.br"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@wannaborgesoficial",
      action: "https://www.instagram.com/wannaborgesoficial/"
    }
  ];

  return (
    <section id="consultas" className="py-20 section-gradient scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">AGENDAR CONSULTA</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dê o Primeiro Passo
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agende sua consulta e comece sua jornada rumo a uma vida 
              mais saudável e sem limitações.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Consultation Options & Info */}
            <div className="space-y-8">
              {/* Consultation Types */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Opções de Consulta
                </h3>
                
                <div className="grid gap-4">
                  {consultationTypes.map((type, index) => {
                    const IconComponent = type.icon;
                    return (
                      <div key={index} className="card-medical flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{type.label}</h4>
                          <p className="text-sm text-muted-foreground">
                            {type.value === "teleconsulta" ? "Atendimento online" : "Atendimento presencial"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Horários de Atendimento
                </h3>
                
                <div className="space-y-4">
                  {scheduleInfo.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{schedule.day}</p>
                          <p className="text-sm text-muted-foreground">{schedule.type}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Localização do Consultório
                </h3>
                
                <div className="card-medical">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Consultório Médico Dra. Wanna Borges
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        R. Dois de Dezembro, 78 - sl 317 - Flamengo, Rio de Janeiro - RJ, 22220-040, Brasil<br />
                        Rua do Catete 311, Rio de Janeiro
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-foreground">🚇 Metrô:</p>
                          <p className="text-muted-foreground">Estação Flamengo</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">🚗 Estacionamento:</p>
                          <p className="text-muted-foreground">Conveniado no prédio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://www.google.com/maps/place/DRA.+WANNA+BORGES/@-22.9296904,-43.1794838,17z/data=!4m16!1m9!3m8!1s0x997f1fcb703c53:0x2ffe3ea6fceede7f!2sDRA.+WANNA+BORGES!8m2!3d-22.9296904!4d-43.1769089!9m1!1b1!16s%2Fg%2F11j2z3sf50!3m5!1s0x997f1fcb703c53:0x2ffe3ea6fceede7f!8m2!3d-22.9296904!4d-43.1769089!16s%2Fg%2F11j2z3sf50?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Ver no Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Methods */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Outras Formas de Contato
                </h3>
                
                <div className="grid gap-4">
                  {contactMethods.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.action}
                        target={contact.action.startsWith('http') ? '_blank' : undefined}
                        rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="card-medical flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{contact.label}</h4>
                          <p className="text-sm text-muted-foreground">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <div className="card-medical text-center p-8">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Agende sua consulta agora mesmo
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
                  Tratamentos personalizados para mulheres que desejam eliminar varizes e lipedema, melhorando a saúde e a autoestima.
                </p>
                <Button asChild className="btn-medical w-full md:w-auto text-lg py-4 mb-4">
                  <a href="https://wa.me/5521976681351" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <img src="/icones/whatsapp.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                    Agende sua consulta
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Atendimento personalizado e exclusivo realizado apenas de forma particular. Clique no botão para agendar sua consulta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;