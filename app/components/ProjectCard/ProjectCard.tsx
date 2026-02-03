type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  alt?: string;
};

const ProjectCard = ({ title, description, imgUrl, alt }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img src={imgUrl ?? ""} alt={alt ?? ""} />
      <div className="text-block">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
