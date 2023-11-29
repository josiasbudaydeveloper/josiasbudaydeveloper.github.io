import { technologies } from "../constants"

export default function TechnologiesContainer() {
  return (
    <section className="items-area">
      { technologies.map((technology) => (
        <section id={technology.id}>
        <header><h1 className="items-area-item-header">{technology.header}</h1></header>
          
        <div className="logos-area">
          {technology.skills.map((skill) => (
            <img 
              id={skill.id}
              src={skill.link}
              title={skill.title}
              alt={skill.alt}
            />
          ))}
        </div>
      </section>
      )) }
    </section>
  )
}