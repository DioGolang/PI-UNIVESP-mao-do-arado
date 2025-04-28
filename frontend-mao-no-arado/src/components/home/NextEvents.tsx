import CardEvents from "@/components/utils/CardEvents";


const events = [
    {
        image: "/img/caminhada_events.jpg",
        date: "MAR 13",
        time: "14:30",
        title: "Caminhada Solidária",
        description: "Junte-sea nós nesta caminhada para arrecadar fundos e conscientizar sobre nossa causa",
        link: "/events"
    },
    {
        image: "/img/events_reciclagem.jpg",
        date: "JUN 23",
        time: "09:00",
        title: "Workshop de Reciclagem",
        description: "Aprenda técnicas de reciclagem e como reduzir o impacto ambiental com a reciclagem de materiais.",
        link: "/events"
    },
]


export default function NextEvents(){
    return (
        <>
            <section className={`w-full flex flex-col bg-gray-200`}>
                <div className={`text-center p-5 m-5 font-semibold text-gray-900`}>
                    <h2 className={`text-4xl`}>Próximos eventos da ONG</h2>
                    <p className={``}></p>
                </div>
                <div className={`flex flex-wrap justify-center gap-4 px-4 rounded-xl`}>
                    {events.map((event, idx) => (
                        <CardEvents
                            key={idx}
                            image={event.image}
                            date={event.date}
                            time={event.time}
                            title={event.title}
                            description={event.description}
                            link={event.link}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}