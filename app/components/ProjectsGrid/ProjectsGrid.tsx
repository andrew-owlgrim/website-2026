import ProjectCard from "../ProjectCard/ProjectCard";
import s from "./ProjectsGrid.module.scss";

import PlannerImg from "@/assets/img/projects-previews/planner.jpg";
import CircuitsImg from "@/assets/img/projects-previews/circuits.jpg";
import GameTheoryImg from "@/assets/img/projects-previews/game-theory.jpg";
import SillyKnightImg from "@/assets/img/projects-previews/silly-knight.jpg";
import BrickBreakerImg from "@/assets/img/projects-previews/brick-breaker.jpg";
import MinesweeperImg from "@/assets/img/projects-previews/minesweeper.jpg";
import Ghost from "../Ghost/Ghost";

const ProjectsGrid = () => {
  return (
    <main className="page-block page-main">
      <div className={s.Grid}>
        <ProjectCard
          title="Planner"
          description={
            "Make decisions, set goals, plan your schedule,\nkeep motivation and monitor progress"
          }
          size="lg"
          imgUrl={PlannerImg}
          className={s.GridItem_lg}
          href="https://owlgrim-planner.web.app/"
          target="_blank"
          rel="noopener norefferer"
        />
        <ProjectCard
          title="Silly Knight"
          description="A platformer game demo project made with Godot engine"
          imgUrl={SillyKnightImg}
          size="sm"
          className={s.GridItem_sm}
          href="/silly-knight"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          title="Circuits"
          description="Make your own devices in this game about computer logic"
          imgUrl={CircuitsImg}
          className={s.GridItem_md}
          href="/circuits"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          title="Game Theory"
          description="Simple simulation of society with cooperation and cheating"
          imgUrl={GameTheoryImg}
          className={s.GridItem_md}
          href="/game-theory"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          title="Brick Breaker"
          description="The result of experiments with custom game engine"
          imgUrl={BrickBreakerImg}
          size="sm"
          className={s.GridItem_sm}
          href="/brick-breaker"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProjectCard
          title="Minesweeper"
          description="A classic game but the board is infinite. My first javascript project"
          imgUrl={MinesweeperImg}
          size="sm"
          className={s.GridItem_sm}
          href="/minesweeper"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Ghost className={s.GridItem_sm} />
      </div>
    </main>
  );
};

export default ProjectsGrid;
