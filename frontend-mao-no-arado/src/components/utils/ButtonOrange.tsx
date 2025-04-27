import Link from "next/link";


export default function ButtonOrange(props: {href: string, textContent: string, isFilled?: boolean } ) {
    return (
        <Link href={props.href}
              className={`${props.isFilled ? "bg-orange-400 hover:bg-gray-900 text-white" : "border-2 border-orange-400 hover:bg-orange-400 text-orange-500 hover:text-amber-50"} shadow-xl text-x1 p-4 rounded-md`}>
            {props.textContent}
        </Link>
    );
}