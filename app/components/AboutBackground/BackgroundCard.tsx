import s from "./AboutBackground.module.scss";
import { Slot } from "@radix-ui/react-slot";

type BackgroundCardProps = {
  icon: React.ReactNode;
  occupation: string;
  title: string;
  description: React.ReactNode;
  date: string;
};

export default function BackgroundCard({
  icon,
  occupation,
  title,
  description,
  date,
}: BackgroundCardProps) {
  return (
    <div className={s.BackgroundCard}>
      <Slot className={s.CardIcon}>{icon}</Slot>
      <div className={s.CardTextBlock}>
        <h6 className={s.CardOccupation}>{occupation}</h6>
        <h4 className={s.CardTitle}>{title}</h4>
      </div>
      <p className={s.CardDescription}>{description}</p>
      <p className={s.CardDate}>{date}</p>
    </div>
  );
}
