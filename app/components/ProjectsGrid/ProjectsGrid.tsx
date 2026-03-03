import ProjectCard from "../ProjectCard/ProjectCard";
import s from "./ProjectsGrid.module.scss";

import PlannerImg from "@/assets/img/projects-previews/planner.jpg";
import CircuitsImg from "@/assets/img/projects-previews/circuits.jpg";
import GameTheoryImg from "@/assets/img/projects-previews/game-theory.jpg";
import SillyKnightImg from "@/assets/img/projects-previews/silly-knight.jpg";
import BrickBreakerImg from "@/assets/img/projects-previews/brick-breaker.jpg";
import MinesweeperImg from "@/assets/img/projects-previews/minesweeper.jpg";
import Ghost from "../Ghost/Ghost";
import { useI18n } from "@/i18n";
import clsx from "clsx";

//

const ProjectsGrid = () => {
  const { t } = useI18n();

  return (
    <main className="page-block page-main">
      <div className={s.Grid}>
        <ProjectCard
          title={t.plannerTitle}
          description={t.plannerDescription}
          size="lg"
          imgUrl={PlannerImg}
          className={s.GridItem_lg}
          href="https://owlgrim-planner.web.app/"
          target="_blank"
          rel="noopener norefferer"
        />
        <ProjectCard
          title={t.sillyKnightTitle}
          description={t.sillyKnightDescription}
          imgUrl={SillyKnightImg}
          size="sm"
          className={s.GridItem_sm}
          href="/silly-knight"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          title={t.circuitsTitle}
          description={t.circuitsDescription}
          imgUrl={CircuitsImg}
          className={s.GridItem_md}
          href="/circuits"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          title={t.gameTheoryTitle}
          description={t.gameTheoryDescription}
          imgUrl={GameTheoryImg}
          className={s.GridItem_md}
          href="/game-theory"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          title={t.brickBreakerTitle}
          description={t.brickBreakerDescription}
          imgUrl={BrickBreakerImg}
          size="sm"
          className={s.GridItem_sm}
          href="/brick-breaker"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          title={t.minesweeperTitle}
          description={t.minesweeperDescription}
          imgUrl={MinesweeperImg}
          size="sm"
          className={s.GridItem_sm}
          href="/minesweeper"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Ghost className={clsx(s.GridItem_sm, s.Ghost)} />
      </div>
    </main>
  );
};

export default ProjectsGrid;
