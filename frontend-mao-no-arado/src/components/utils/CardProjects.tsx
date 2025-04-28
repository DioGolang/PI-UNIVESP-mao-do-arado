import Image from "next/image";
import ButtonOrange from "@/components/utils/ButtonOrange";


export default function CardProjects(props: {
    href: string,
    thumbnailHref: string,
    photo: string,
    authorPage: string,
    alt: string,
    title: string,
    tags: string,
    description: string,
    author: string,
    date: string
}) {
    return (
        <>
            <div className="w-full md:w-[45%] lg:w-[35%] xl:w-[30%] max-w-sm bg-white rounded-lg shadow-md mt-5 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <Image className={`object-cover w-full h-64 rounded-xl`} src={props.thumbnailHref} alt={props.alt} width={500}
                       height={500}/>
                <div className={`p-6`}>
                    <div className={``}>
                        <span className={`text-xs text-blue-600 uppercase`}>{props.tags}</span>
                        <a className={`block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600 hover:underline`}
                           href={props.thumbnailHref}>{props.title}</a>
                        <p className={`mt-2 text-sm text-gray-600`}>{props.description}</p>
                    </div>
                    <div className={`mt-4`}>
                        <div className={`flex items-center`}>
                            <ButtonOrange href="" textContent="Saiba mais" isFilled={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}