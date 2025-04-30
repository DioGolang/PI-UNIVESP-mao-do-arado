import Image from "next/image";
import ButtonOrange from "@/components/utils/ButtonOrange";

const sectionTitle = "Apoio a Crianças Autistas";
const mainText = "Nosso programa especializado oferece suporte e desenvolvimento para crianças com Transtorno do Espectro Autista (TEA). Através de abordagens personalizadas, criamos um ambiente acolhedor onde cada criança pode desenvolver suas habilidades e potencialidades.";

const programCards = [
  {
    id: 1,
    title: "Terapia Sensorial",
    description: "Atividades que ajudam a regular as respostas sensoriais, melhorando a integração dos sentidos e reduzindo a hipersensibilidade.",
    icon: "🧠",
  },
  {
    id: 2,
    title: "Comunicação Alternativa",
    description: "Métodos e ferramentas que auxiliam na comunicação, incluindo sistemas visuais e tecnologia assistiva.",
    icon: "💬",
  },
  {
    id: 3,
    title: "Desenvolvimento Social",
    description: "Atividades em grupo que promovem a interação social e o desenvolvimento de habilidades interpessoais.",
    icon: "👥",
  },
  {
    id: 4,
    title: "Apoio Familiar",
    description: "Orientação e suporte para famílias, incluindo grupos de apoio e recursos educacionais.",
    icon: "👨‍👩‍👧‍👦",
  }
];

export default function AutisticChildren() {
  return (
    <section className="w-full py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{sectionTitle}</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white max-w-3xl mx-auto">{mainText}</p>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          {/* Image side */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
              <Image
                src="/img/autismo.png"
                alt="Crianças autistas participando de atividades terapêuticas"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">Ambiente Seguro e Acolhedor</h3>
                  <p className="text-white/90">Espaços adaptados para as necessidades sensoriais de cada criança</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-4">Nossa Abordagem</h3>
            <p className="text-white mb-6">
              Trabalhamos com uma equipe multidisciplinar que inclui terapeutas ocupacionais, fonoaudiólogos, psicólogos e educadores especializados. Cada criança recebe um plano de desenvolvimento individualizado que respeita seu ritmo e suas necessidades específicas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programCards.map((card) => (
                <div
                  key={card.id}
                  className={`p-5 rounded-lg border transition-all duration-300 cursor-pointer bg-orange-400 hover:bg-orange-500 hover:text-gray-900 border-gray-200 hover:border-blue-200 hover:bg-blue-50'
                  }`}
                >
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h4 className="text-xl font-semibold text-black mb-2 ">{card.title}</h4>
                  <p className="text-black text-sm ">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Conheça nosso programa e descubra como podemos ajudar no desenvolvimento e bem-estar das crianças com autismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonOrange href="" textContent="Agendar Visita" isFilled={true} />
            <ButtonOrange href="" textContent="Saiba Mais" isFilled={false} />
          </div>
        </div>
      </div>
    </section>
  );
}