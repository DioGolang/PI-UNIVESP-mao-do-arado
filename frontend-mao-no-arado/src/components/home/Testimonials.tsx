'use client'
import { useState } from "react";
import Image from "next/image";

const testimonials = [
    {
        name: "Ema Watson",
        position: "Marketing Manager",
        image: "/img/pessoa1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda.",
    },
    // Adicione mais testemunhos aqui
    {
        name: "Diogo Vasconcelos",
        position: "Aquiteto de Soluções",
        image: "/img/pessoa2.jpg",
        text: "This is another testimonial. The project was great, and the team was awesome!",
    },
    {
        name: "Ana Carolina",
        position: "Cabeleireira",
        image: "/img/pessoa3.jpg",
        text: "This is another testimonial. The project was great, and the team was awesome!",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const { name, position, image, text } = testimonials[currentIndex];

    return (
        <>
        <section className="bg-white dark:bg-gray-900 py-10">
            <div className="max-w-6xl px-6 mx-auto">
                <p className="text-xl font-medium text-blue-500">Depoimentos</p>
                <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    O que as Pessoas ajudados pelo os programs estão dizendo
                </h1>

                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                    <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <Image
                            className="rounded-2xl object-cover shadow-md"
                            src={image}
                            alt="client photo"
                            layout="intrinsic"
                            width={300}
                            height={400}
                        />
                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">{name}</p>
                                <p className="text-blue-200">{position}</p>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                "{text}"
                            </p>

                            <div className="flex items-center justify-between mt-6 md:justify-start">
                                <button
                                    onClick={handlePrev}
                                    title="left arrow"
                                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleNext}
                                    title="right arrow"
                                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
        </>
    );
}
