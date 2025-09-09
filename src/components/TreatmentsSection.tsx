import { useState } from "react";
import { ChevronLeft, ChevronRight, Stethoscope, Apple, Video, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const TreatmentsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const treatments = [
    {
      icon: Stethoscope,
      title: "Consulta Endocrinologia e Metabologia",
      description: "Avaliação clínica completa com foco em desequilíbrios hormonais e metabólicos",
      details: [
        "Anamnese detalhada e exame físico",
        "Solicitação de exames complementares específicos",
        "Análise hormonal completa",
        "Plano de tratamento personalizado"
      ],
      duration: "60 minutos",
      price: "Consulte valores"
    },
    {
      icon: Apple,
      title: "Consulta Nutrológica",
      description: "Avaliação nutricional especializada para otimizar seu metabolismo",
      details: [
        "Avaliação da composição corporal",
        "Análise de deficiências nutricionais",
        "Prescrição de suplementação personalizada",
        "Orientações alimentares específicas"
      ],
      duration: "50 minutos",
      price: "Consulte valores"
    },
    {
      icon: Video,
      title: "Teleconsulta",
      description: "Atendimento online com a mesma qualidade da consulta presencial",
      details: [
        "Consulta por videoconferência segura",
        "Avaliação clínica e orientações",
        "Prescrições digitais válidas",
        "Acompanhamento contínuo"
      ],
      duration: "45 minutos",
      price: "Consulte valores"
    },
    {
      icon: Activity,
      title: "Bioimpedância",
      description: "Análise detalhada da composição corporal com tecnologia avançada",
      details: [
        "Percentual de gordura corporal",
        "Massa muscular e óssea",
        "Idade metabólica",
        "Relatório completo com gráficos"
      ],
      duration: "30 minutos",
      price: "Consulte valores"
    }
  ];

  const specialties = [
    {
      title: "Diabetologia",
      description: "Tratamento especializado para diabetes tipo 1, 2 e gestacional",
    },
    {
      title: "Obesidade",
      description: "Abordagem integral para perda de peso saudável e sustentável",
    },
    {
      title: "Patologias da Tireoide",
      description: "Diagnóstico e tratamento de hipo e hipertireoidismo, nódulos",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % treatments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  return (
    <section className="py-20 scroll-mt-20 bg-custom-green text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Stethoscope className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">TRATAMENTOS</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Cuidado Integral para sua Saúde
            </h2>
            
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Oferecemos uma abordagem multidisciplinar com foco em resultados 
              duradouros e qualidade de vida.
            </p>
          </div>

          {/* Specialties */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
                <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white/20 text-white`}>
                  {specialty.title}
                </div>
                <p className="text-white/90">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>

          {/* Treatments Carousel */}
          <div>
            <h3 className="font-display text-3xl font-bold text-center mb-12">
              Consultas e Procedimentos
            </h3>
            
            <div className="relative">
              {/* Treatment Card */}
              <div className="bg-white/10 rounded-2xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Icon and Title */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const IconComponent = treatments[currentSlide].icon;
                        return (
                          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        );
                      })()}
                      
                      <div>
                        <h4 className="font-display text-2xl md:text-3xl font-bold">
                          {treatments[currentSlide].title}
                        </h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-white/90">
                          <span>⏱️ {treatments[currentSlide].duration}</span>
                          <span>💰 {treatments[currentSlide].price}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-white/90">
                      {treatments[currentSlide].description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <h5 className="font-display text-xl font-bold">
                      O que está incluso:
                    </h5>
                    
                    <div className="space-y-3">
                      {treatments[currentSlide].details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">{detail}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={() => document.getElementById('consultas')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full mt-6 bg-white text-custom-green font-semibold hover:bg-gray-200"
                    >
                      Agendar {treatments[currentSlide].title.split(' ')[0]}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="group w-12 h-12 rounded-full border-white text-white hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="w-6 h-6 text-custom-green group-hover:text-white" />
                </Button>

                {/* Dots */}
                <div className="flex gap-2">
                  {treatments.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="group w-12 h-12 rounded-full border-white text-white hover:bg-white/10 hover:text-white"
                >
                  <ChevronRight className="w-6 h-6 text-custom-green group-hover:text-white" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/10 text-white rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Pronta para dar o primeiro passo?
              </h3>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Agende sua consulta e descubra como podemos ajudar você a 
                conquistar mais saúde e qualidade de vida.
              </p>
              <Button 
                onClick={() => document.getElementById('consultas')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-custom-green px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Quero Agendar Minha Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
