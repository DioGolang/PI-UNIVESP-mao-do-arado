import Image from "next/image";


export default function Card (props: { href: string, thumbnailHref: string, photo: string, authorPage: string, alt: string, title: string, tags: string, description: string, author: string, date: string }) {
    return (
        <>
            <div className={`max-w-2xl overflow-hidden bg-white rounded-lg shadow-md mt-5`}>
                <Image className={`object-cover w-full h-64`} src={props.thumbnailHref} alt={props.alt} width={250} height={250}/>
                <div className={`p-6`}>
                    <div className={``}>
                        <span className={`text-xs text-blue-600 uppercase`}>{props.tags}</span>
                        <a className={`block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600 hover:underline`} href={props.thumbnailHref}>{props.title}</a>
                        <p className={`mt-2 text-sm text-gray-600`}>{props.description}</p>
                    </div>
                    <div className={`mt-4`}>
                        <div className={`flex items-center`}>
                            <div className={`flex items-center`}>
                                <Image src={props.photo} alt={props.author} width={100} height={100} className={`object-cover h-10 rounded-full`}/>
                                <a className={`ml-2 text-sm font-medium text-gray-900 transition-colors duration-300 transform hover:text-gray-600`} href={props.author}>{props.authorPage}</a>
                            </div>
                            <span className={`mx-1 text-xs text-gray-600`}>{props.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}