import Card from "@/components/utils/Card";

const lastestNews = [
    {
        href: "/news",
        thumbnailHref: "/img/news-criancas.jpg",
        photo: "/img/maria.jpg",
        authorPage: "/maria",
        alt: "news",
        title: "Novo Projeto de Educação é lançado",
        tags: "",
        description: "Iniciativa vai beneficiar mais de 200 crianças em sintuação de vulnerabilidade, com o objetivo de ajudar a construir uma sociedade mais justa e equitativa. ",
        author: "Maria",
        date: "12-04-2025"
    },
    {
        href: "/news",
        thumbnailHref: "/img/news2.jpg",
        photo: "/img/jose.jpg",
        authorPage: "/jose",
        alt: "news",
        title: "Resultado da Campanha de Apoio",
        tags: "",
        description: "Mais de 1000 familias foram apoiadas pela ONG. ",
        author: "José",
        date: "27-04-2025"
    },
    {
        href: "/news",
        thumbnailHref: "/img/news3.jpg",
        photo: "/img/maria.jpg",
        authorPage: "/maria",
        alt: "news",
        title: "Voluntários em ação",
        tags: "",
        description: "Conheça as histórias inspiradoras dos nossos voluntários.",
        author: "Maria",
        date: "7-05-2025"
    },
];

export default function LastestNews() {
    return (
        <>
            <section className={`flex flex-col w-full bg-gray-200 text-gray-600 p-5 items-center gap-4 `}>
                <h2 className={`text-3xl font-bold text-gray-800 mb-2`}>Últimas Notícias</h2>
                <div className={`flex flex-wrap justify-center gap-4 px-4 rounded-xl`}>
                    {
                        lastestNews.map((news, idx) => (
                            <Card key={idx} href={news.href} thumbnailHref={news.thumbnailHref} photo={news.photo}
                                  authorPage={news.authorPage} alt={news.alt} title={news.title} tags={news.tags}
                                  description={news.description}
                                  author={news.author} date={news.date}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}