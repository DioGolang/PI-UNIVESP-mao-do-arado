import Image from "next/image";
import ButtonOrange from "@/components/utils/ButtonOrange";

export default function HowHelp() {
    return (
        <>
            <section className={`w-full flex flex-col bg-gray-200 justify-center items-center text-gray-600 p-5`}>
                <h2 className={`text-3xl p-4`}>Como ajudar</h2>
                <p className={`p-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <div className={`flex flex-col md:flex-row w-full  text-gray-600 p-5`}>
                    <div className={`flex flex-col m-5 bg-white rounded-2xl p-4 shadow-2xl`}>
                        <Image className={``} src={`/img/doe`} alt={`doe`} width={200} height={200} />
                        <h3 className={`text-gray-900 text-2xl mt-2`}>Doe</h3>
                        <p className={`text-gray-900 text-md mt-4`}>Sua doação ajuda a manter nossos projetos e impactar mais vidas.</p>
                        <ButtonOrange href="/doe" textContent="Doe agora" isFilled={true}/>
                    </div>
                    <div className={`flex flex-col m-5 bg-white rounded-2xl p-4 shadow-2xl`}>
                        <Image className={``} src={`/img/doe`} alt={`doe`} width={200} height={200} />
                        <h3 className={`text-gray-900 text-2xl mt-2`}>Voluntarie-se</h3>
                        <p className={`text-gray-900 text-md mt-4`}>Doe seu tempo e habilidades para fazer a diferença.</p>
                        <ButtonOrange href="/doe" textContent="Seja Voluntário" isFilled={true}/>
                    </div>
                    <div className={`flex flex-col m-5 bg-white rounded-2xl p-4 shadow-2xl`}>
                        <Image className={``} src={`/img/doe`} alt={`doe`} width={200} height={200} />
                        <h3 className={`text-gray-900 text-2xl mt-2`}>Compatilhe</h3>
                        <p className={`text-gray-900 text-md mt-2`}>Ajude a divulgar nossa causa nas resdes socias.</p>
                        <div className={`flex flex-row space-x-4`}>
                            links
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}