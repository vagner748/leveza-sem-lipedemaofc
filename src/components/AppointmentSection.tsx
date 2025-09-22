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
      day: "Segunda a Quinta",
      hours: "14:00 - 18:00",
      type: "Consultas Presenciais"
    },
    {
      day: "Sexta-Feira",
      hours: "14:00 - 18:00",
      type: "Teleconsultas"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 21 97671-5982",
      action: "tel:+5521976715982"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "wanilongmais@gmail.com",
      action: "mailto:wanilongmais@gmail.com"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@wannaborgesoficial",
      action: "https://www.instagram.com/wannaborgesoficial/"
    }
  ];

  return (
    <section id="consultas" className="py-20 scroll-mt-20 bg-custom-green text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">AGENDAR CONSULTA</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Dê o Primeiro Passo
            </h2>
            
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Agende sua consulta e comece sua jornada rumo a uma vida 
              mais saudável e sem limitações.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Consultation Options & Info */}
            <div className="space-y-8">
              {/* Consultation Types */}
              <div>
                <h3 className="font-display text-2xl font-bold mb-6">
                  Opções de Consulta
                </h3>
                
                <div className="grid gap-4">
                  {consultationTypes.map((type, index) => {
                    const IconComponent = type.icon;
                    return (
                      <div key={index} className="bg-white/10 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{type.label}</h4>
                          <p className="text-sm text-white/90">
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
                <h3 className="font-display text-2xl font-bold mb-6">
                  Horários de Atendimento
                </h3>
                
                <div className="space-y-4">
                  {scheduleInfo.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-white" />
                        <div>
                          <p className="font-semibold text-white">{schedule.day}</p>
                          <p className="text-sm text-white/90">{schedule.type}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-white">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-display text-2xl font-bold mb-6">
                  Localização do Consultório
                </h3>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Consultório Médico Dra. Wanna Borges
                      </h4>
                      <p className="text-white/90 mb-4">
                        R. Dois de Dezembro, 78 - sl 317 - Flamengo, Rio de Janeiro - RJ, 22220-040, Brasil<br />
                        Rua do Catete 311, Rio de Janeiro
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-white">🚇 Metrô:</p>
                          <p className="text-white/90">Estação Flamengo</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">🚗 Estacionamento:</p>
                          <p className="text-white/90">Conveniado no prédio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 hover:text-white" asChild>
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
                <h3 className="font-display text-2xl font-bold mb-6">
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
                        className="bg-white/10 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{contact.label}</h4>
                          <p className="text-sm text-white/90">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/10 text-center p-8 rounded-lg">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Agende sua consulta agora mesmo
                </h3>
                <p className="text-lg text-white/90 mb-6 max-w-md mx-auto">
                  Tratamentos personalizados para mulheres que desejam eliminar varizes e lipedema, melhorando a saúde e a autoestima.
                </p>
                <Button asChild className="bg-white text-custom-green font-semibold hover:bg-gray-200 w-full md:w-auto text-lg py-4 mb-4">
                  <a href="https://wa.me/5521976715982" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <img src="/icones/whatsapp-512.webp" alt="WhatsApp" className="w-5 h-5 mr-2" />
                    Agende sua consulta
                  </a>
                </Button>
                <p className="text-sm text-white/90">
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
