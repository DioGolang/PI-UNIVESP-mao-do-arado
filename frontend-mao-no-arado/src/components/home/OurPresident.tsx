import Image from "next/image";

export default function OurPresident() {
    return (
        <>
            <section className="w-full bg-gray-200 py-12">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-semibold text-gray-900">Nosso Presidente</h2>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
                        <div className="md:w-1/3">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/img/profilePresident.svg"
                                    alt="Roseli Machado Ribeiro"
                                    width={400}
                                    height={500}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800">Roseli Machado Ribeiro</h3>
                            <div className="prose prose-lg text-gray-600">
                                <p className="leading-relaxed">
                                    Presidente da Mão no Arado há mais de 24 anos.
                                    Dedicada em ajudar pessoas, Roseli criou a Associação Mão no Arado.
                                </p>
                                <p className="leading-relaxed">
                                    Compreendemos plenamente essa missão quando lançamos o Natal Solidário.
                                    A primeira edição nos permitiu enxergar a importância de levar esperança,
                                    incentivo e apoio para enfrentar situações de extrema vulnerabilidade.
                                </p>
                                <p className="leading-relaxed">
                                    Foi ali que iniciamos uma longa jornada de transformar vidas familiares
                                    e alcançar resultados significativos, amadurecendo através do desenvolvimento
                                    profissional ao longo do tempo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}