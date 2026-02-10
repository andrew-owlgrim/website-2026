import clsx from "clsx";
import type { FC } from "react";
import s from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={clsx("loaderWrapper", s.loaderWrapper)}>
      <div className={clsx("loader", s.loader)} />
    </div>
  );
};

export default Loader;
