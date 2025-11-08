import Badge from "../globals/Badge";
import cards from "./Project.module.css"

const ProjectCard = ({project}) => {
const {skills, title, description, image} = project.data
  return (
    <a className={cards.links} href={`/projects/${project.id}`}>
    <div className={`liquid-glass ${cards.wrapper}`}>
      <img className={cards.image} src={image.src} alt={image.alt}/>
      <div className={cards.content}>
        <h2>{title}</h2>
        <p className="subtitle-2">{description}</p>
        <div className={cards.skills}>
            {skills.map( skill => <Badge skill={skill}/>)}
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard
