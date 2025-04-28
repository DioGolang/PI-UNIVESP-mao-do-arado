import Image from "next/image";
import ButtonOrange from "@/components/utils/ButtonOrange";
import ShareIcons from "@/components/utils/ShareIcons";
import { FaHandHoldingHeart, FaHandsHelping, FaShareAlt } from "react-icons/fa";


export default function HowHelp() {
    return (
        <section className="w-full flex flex-col bg-gray-200 items-center text-gray-600 px-5 py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Como Ajudar</h2>
            <p className="mb-8 text-center max-w-2xl">Existem várias formas de contribuir com a nossa causa. Escolha a que mais combina com você!</p>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-6xl">
                {/* Card 1 */}
                <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 w-full md:w-1/3">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 text-white text-4xl mb-4">
                        <FaHandHoldingHeart />
                    </div>
                    <h3 className="text-gray-900 text-2xl mt-4">Doe</h3>
                    <p className="text-gray-700 mt-4 text-center">Sua doação ajuda a manter nossos projetos e impactar mais vidas.</p>
                    <div className="mt-4">
                        <ButtonOrange href="/doe" textContent="Doe agora" isFilled={true} />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 w-full md:w-1/3">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 text-white text-4xl mb-4">
                        <FaHandsHelping />
                    </div>
                    <h3 className="text-gray-900 text-2xl mt-4">Voluntarie-se</h3>
                    <p className="text-gray-700 mt-4 text-center">Doe seu tempo e habilidades para fazer a diferença.</p>
                    <div className="mt-4">
                        <ButtonOrange href="/doe" textContent="Seja Voluntário" isFilled={true} />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 w-full md:w-1/3">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 text-white text-4xl mb-4">
                        <FaShareAlt />
                    </div>
                    <h3 className="text-gray-900 text-2xl mt-4">Compartilhe</h3>
                    <p className="text-gray-700 mt-4 text-center">Ajude a divulgar nossa causa nas redes sociais.</p>
                    <ShareIcons />
                </div>
            </div>
        </section>
    );
}
