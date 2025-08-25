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
      value: "(11) 9 9999-9999",
      action: "tel:+5511999999999"
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
      value: "@dra.wannaborges",
      action: "https://instagram.com/dra.wannaborges"
    }
  ];

  return (
    <section id="consultas" className="py-20 section-gradient">
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
                        Av. Paulista, 1234 - Conjunto 567<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-foreground">🚇 Metrô:</p>
                          <p className="text-muted-foreground">Estação Trianon-MASP</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">🚗 Estacionamento:</p>
                          <p className="text-muted-foreground">Conveniado no prédio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Google Maps
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

            {/* Appointment Form */}
            <div>
              <div className="card-medical">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Agendar Consulta
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(11) 9 9999-9999"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipo de Consulta *
                      </label>
                      <Select value={formData.consultationType} onValueChange={(value) => handleInputChange('consultationType', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {consultationTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Data Preferencial
                    </label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem (Opcional)
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Conte um pouco sobre seu caso ou dúvidas..."
                      className="w-full h-24"
                    />
                  </div>

                  <Button type="submit" className="btn-medical w-full text-lg py-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    Enviar Solicitação de Agendamento
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios. Entraremos em contato em até 24h para confirmar sua consulta.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;