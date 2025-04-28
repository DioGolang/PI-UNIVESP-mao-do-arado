'use client'
import { useState } from "react";

const faq = [
    {question: "Como posso ajudar a ONG?", answer: "Existem várias maneiras de ajudar nossa ONG! Você pode se voluntariar, fazer uma doação, ou até mesmo compartilhar nossas iniciativas nas redes sociais para aumentar a conscientização. Se você tem habilidades específicas, como design gráfico, marketing, ou mesmo habilidades administrativas, ficaremos felizes em contar com sua ajuda."},
    {question: "Como posso fazer uma doação para a ONG?", answer: "Você pode fazer uma doação diretamente pelo nosso site, onde temos opções de pagamento seguro. Também aceitamos doações em espécie ou em produtos, como alimentos ou roupas, dependendo das necessidades atuais da nossa comunidade. Para mais informações sobre como doar, por favor, entre em contato conosco através do nosso formulário de contato."},
    {question: "A ONG oferece recibos para doações?", answer: "Sim! Todos os nossos doadores recebem um recibo formal de doação para fins de dedução fiscal, caso necessário. Para garantir o envio do recibo, por favor, envie suas informações completas (nome, endereço e CPF) no momento da doação."},
    {question: "Quais são os projetos atuais da ONG?", answer: "Atualmente, estamos focados em vários projetos que visam melhorar a qualidade de vida das comunidades em situação de vulnerabilidade. Alguns dos nossos principais projetos incluem programas de distribuição de alimentos, capacitação profissional e educação infantil. Você pode acompanhar o progresso desses projetos no nosso site ou nas nossas redes sociais."},
    {question: "A ONG aceita voluntários de todas as idades?", answer: "Sim! Acreditamos que todos têm algo valioso a oferecer. No entanto, para algumas atividades, pedimos que os voluntários tenham uma idade mínima de 16 anos. Dependendo do projeto, também podemos exigir que os voluntários possuam determinadas habilidades ou conhecimentos. Se você está interessado em ser voluntário, entre em contato conosco para discutir as oportunidades disponíveis."},
    {question: "Como posso saber mais sobre o trabalho da ONG?", answer: "você pode acompanhar o nosso trabalho de diversas formas. Siga-nos nas redes sociais, assine nossa newsletter ou participe dos eventos que organizamos regularmente. Também realizamos reuniões abertas onde discutimos nossas ações e como você pode se envolver."},
    {question: "A ONG realiza eventos de arrecadação de fundos?", answer: "Sim! Organizamos eventos regularmente para arrecadar fundos para nossos projetos. Isso inclui jantares beneficentes, bazares, leilões e até eventos virtuais. Fique de olho em nossas redes sociais e em nosso site para mais informações sobre os próximos eventos."},
    {question: "Posso receber informações sobre como minha doação foi utilizada?", answer: "Absolutamente! Transparência é uma das nossas maiores prioridades. Enviamos relatórios regulares sobre a utilização das doações em nossos projetos. Além disso, você pode entrar em contato conosco a qualquer momento para solicitar um relatório detalhado sobre a aplicação dos recursos. Acreditamos que nossa comunidade de doadores merece saber como suas contribuições estão fazendo a diferença."},
    {question: "A ONG é registrada e tem CNPJ?", answer: "Sim! Somos uma organização não governamental registrada com CNPJ, o que nos permite operar de forma transparente e em conformidade com a legislação brasileira. O nosso CNPJ está disponível para consulta em nosso site, e você pode verificar nossa situação sempre que desejar."},
    {question: "Quais são as formas de voluntariado oferecidas pela ONG?", answer: "A ONG oferece diversas formas de voluntariado, tanto presenciais quanto remotas. Entre as opções, temos: apoio em eventos, distribuição de alimentos, mentorias educacionais, atividades de lazer para crianças e apoio administrativo. Se você tem uma habilidade específica ou está disposto a ajudar, estamos abertos a novas ideias. Fale conosco e nos conte como você gostaria de contribuir!"},
]

export default function FrequentlyAskedQuestions() {
    // Estado para armazenar as perguntas abertas
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Função para alternar a visibilidade das respostas
    const toggleAnswer = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Fecha a pergunta se já estiver aberta
        } else {
            setActiveIndex(index); // Abre a pergunta
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
                    Perguntas frequentes
                </h2>

                <div className="mt-8 space-y-8 lg:mt-12">
                    {faq.map((faq, index) => (
                        <div
                            key={index}
                            className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
                        >
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="flex items-center justify-between w-full"
                            >
                                <h1 className="font-semibold text-gray-700 dark:text-white">
                                    {faq.question}
                                </h1>

                                <span
                                    className={`${
                                        activeIndex === index ? "text-white bg-blue-500" : "text-gray-400 bg-gray-200"
                                    } rounded-full`}
                                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={activeIndex === index ? "M18 12H6" : "M12 6v6m0 0v6m0-6h6m-6 0H6"}
                    />
                  </svg>
                </span>
                            </button>

                            {activeIndex === index && (
                                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};