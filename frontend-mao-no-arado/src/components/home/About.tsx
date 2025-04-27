import ButtonOrange from "@/components/utils/ButtonOrange";
import Image from "next/image";


const text: string = "Nossa missão é transformar vidas atráves de ações sociais sustentáveis e educação. Há mais de 30 anos, trabalhamos incansavelmente para que a sociedade possa se beneficiar de uma sociedade mais justa e equitativa."
const image: string = "/img/nossa_equipe.jpg"

export default function About() {
    return (
        <>
            <section className={`flex flex-col md:flex-row w-full bg-gray-200 text-gray-600 p-5`}>
                <div className={``}>
                    <Image src={image} alt={`nossa equipe`} width={1000} height={670} />
                </div>
                <div className={`flex flex-col m-5`}>
                    <h2 className={`text-3xl p-4`}>Sobre ONG</h2>
                    <p className={`p-4`}>{text}</p>
                    <div className={`flex flex-row p-4 space-x-4`}>
                        <ButtonOrange href="" textContent="Conheça nossa história" isFilled={true}/>
                        <ButtonOrange href="" textContent="Nosso Impacto" isFilled={false}/>
                    </div>
                </div>
            </section>
        </>
    );
}