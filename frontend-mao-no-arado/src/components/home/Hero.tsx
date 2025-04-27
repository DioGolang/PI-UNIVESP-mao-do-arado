

export default function Hero() {
    return (
        <>
            <header className={`w-full h-100 bg-cover bg-center bg-gray-950`}>
                <div className={`flex flex-col p-5 m-5`}>
                    <div className={``}><h1 className={`text-4xl`}>Juntos Podemos transformar a<br/> vida de muitas pessoas</h1></div>
                    <div className={`mt-2`}>Faça parte desta mundaça e ajude-nos a construir um futuro melhor</div>
                    <div className={`flex flex-row space-x-4 mt-10`}>
                        <button className={`bg-orange-400 hover:bg-gray-900 shadow-xl text-x1 p-4 rounded-md`}>Saiba mais</button>
                        <button className={`border-2 border-orange-400 hover:bg-orange-400 shadow-xl text-x1 p-4 rounded-md`}>Doar agora</button>
                    </div>
                </div>
            </header>
        </>
    )
}