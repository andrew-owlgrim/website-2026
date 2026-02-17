import clsx from "clsx";
import s from "./ProjectCard.module.scss";

type Size = "lg" | "md" | "sm";

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  alt?: string;
  size?: Size;
} & React.ComponentPropsWithoutRef<"a">;

const ProjectCard = ({
  title,
  description,
  imgUrl,
  alt,
  className,
  size = "md",
  ...rest
}: ProjectCardProps) => {
  return (
    <a className={clsx(s.ProjectCard, className, s[size])} {...rest}>
      <div className={s.ImgWrapper}>
        <img className={s.Img} src={imgUrl ?? ""} alt={alt ?? ""} />
      </div>
      <div className={s.TextBlock}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
