import Image from "next/image";


export default function Card (props: { href: string, thumbnailHref: string, photo: string, authorPage: string, alt: string, title: string, tags: string, description: string, author: string, date: string }) {
    return (
        <>
            <div className={`w-full md:w-[45%] lg:w-[35%] xl:w-[30%] max-w-sm bg-white rounded-lg shadow-md mt-5 transform transition duration-300 hover:scale-105 hover:shadow-xl`}>
                <Image className={`object-cover w-full h-64 rounded-xl`} src={props.thumbnailHref} alt={props.alt} width={500} height={500}/>
                <div className={`p-6`}>
                    <div className={``}>
                        <span className={`text-xs text-blue-600 uppercase`}>{props.tags}</span>
                        <a className={`block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600 hover:underline`} href={props.thumbnailHref}>{props.title}</a>
                        <p className={`mt-2 text-sm text-gray-600`}>{props.description}</p>
                    </div>
                    <div className={`mt-4`}>
                        <div className={`flex absolute bottom-0 left-0 justify-between items-center space-x-2 text-sm text-gray-500`}>
                            <div className={`flex items-center`}>
                                <Image src={props.photo} alt={props.author} width={100} height={100} className={`object-cover h-10 rounded-full`}/>
                                <a className={`ml-2 text-sm font-medium text-gray-900 transition-colors duration-300 transform hover:text-gray-600`} href={props.authorPage}>{props.author}</a>
                            </div>
                            <span className={`mx-1 text-xs text-gray-600`}>{props.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}