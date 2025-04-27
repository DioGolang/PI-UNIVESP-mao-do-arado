import Card from "@/components/utils/Card";

const projects = [
    {href: "/project1", thumbnailHref: "/img/criancas.jpg", photo: "/img/photo_teste.png", authorPage: "diogo", alt: "diogo", title: "Ajudando crianças em sintuação de vulnerabilidade", tags: "vulnerabilidade", description: "Programa dedicado ao desenvolvimento de crianças em risco", author: "Diogo", date: "26-04-2025"  },
    {href: "/project1", thumbnailHref: "/img/criancas.jpg", photo: "/img/photo_teste.png", authorPage: "diogo", alt: "diogo", title: "Ajudando crianças em sintuação de vulnerabilidade", tags: "vulnerabilidade", description: "Programa dedicado ao desenvolvimento de crianças em risco", author: "Diogo", date: "26-04-2025"  },
    {href: "/project1", thumbnailHref: "/img/criancas.jpg", photo: "/img/photo_teste.png", authorPage: "diogo", alt: "diogo", title: "Ajudando crianças em sintuação de vulnerabilidade", tags: "vulnerabilidade", description: "Programa dedicado ao desenvolvimento de crianças em risco", author: "Diogo", date: "26-04-2025"  }
];

export default function OurProjects() {
    return(
      <>
          <section className={`w-full flex flex-col bg-gray-200`}>
              <div className={`text-center p-5 m-5 font-semibold text-gray-900`}>
                  <h2 className={`text-4xl`}>Nossos Projetos</h2>
              </div>
              <div className={`flex flex-col md:flex-row md:flex-wrap justify-around justify-items-center`}>
                  {projects.map((project, idx) => (
                      <Card key={idx}  href={project.href} thumbnailHref={project.thumbnailHref} photo={project.photo} authorPage={project.author} alt={project.alt} title={project.title} tags={project.tags} description={project.description} author={project.authorPage} date={project.date} />
                  ))}
              </div>
          </section>
      </>
    );
}