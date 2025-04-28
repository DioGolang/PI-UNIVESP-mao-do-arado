import Image from "next/image";
import ButtonOrange from "@/components/utils/ButtonOrange";

export default function CardEvents(props: {
    image: string,
    date: string,
    time: string,
    title: string,
    description: string,
    link: string
}) {
    return (
        <>
            <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="absolute top-4 left-4 bg-blue-500 text-white rounded-lg z-20">
                    <div className="px-3 py-1 text-center">
                        <div className="text-sm font-semibold">{props.date}</div>
                        <div className="text-xs">{props.time}</div>
                    </div>
                </div>
                <div className="relative w-full h-48">
                    <Image
                        src={props.image}
                        alt={`Imagem do evento: ${props.title}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Conteúdo do card */}
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{props.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{props.description}</p>
                    <div className="flex flex-row mt-4 space-x-2">
                        <ButtonOrange href={props.link} textContent="Saiba mais" isFilled={true}/>
                    </div>
                </div>
            </div>
        </>
    );
}