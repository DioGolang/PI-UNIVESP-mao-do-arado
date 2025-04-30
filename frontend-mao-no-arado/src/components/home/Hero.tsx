import ButtonOrange from "@/components/utils/ButtonOrange";


export default function Hero() {
    return (
        <>
            <header className={`w-full h-100 bg-cover bg-center bg-gray-950`}>
                <div className={`flex flex-col p-5 m-5`}>
                    <div className={``}><h1 className={`text-4xl`}>Juntos Podemos transformar a<br/> vida de muitas pessoas</h1></div>
                    <div className={`mt-2`}>Faça parte desta mundaça e ajude-nos a construir um futuro melhor</div>
                    <div className={`flex flex-row space-x-4 mt-10`}>
                        <ButtonOrange href={`/saibamais`} textContent={`Saiba Mais`} isFilled={true} />
                        <ButtonOrange href={`/saibamais`} textContent={`Saiba Mais`} isFilled={false} />
                    </div>
                </div>
            </header>
        </>
    )
}