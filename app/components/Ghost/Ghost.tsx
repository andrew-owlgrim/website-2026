import clsx from "clsx";
import s from "./Ghost.module.scss";

export default function Ghost({ className }: { className: string }) {
  return <div className={clsx(s.Ghost, className)}>👻</div>;
}
