import ProjectCard from "../ProjectCard/ProjectCard";
import s from "./ProjectsGrid.module.scss";

import PlannerImg from "@/assets/img/projects-previews/planner.jpg";
import CircuitsImg from "@/assets/img/projects-previews/circuits.jpg";
import GameTheoryImg from "@/assets/img/projects-previews/game-theory.jpg";
import SillyKnightImg from "@/assets/img/projects-previews/silly-knight.jpg";
import BrickBreakerImg from "@/assets/img/projects-previews/brick-breaker.jpg";
import MinesweeperImg from "@/assets/img/projects-previews/minesweeper.jpg";

const ProjectsGrid = () => {
  return (
    <main className="page-block page-main">
      <div className={s.Grid}>
        <ProjectCard
          title="Planner"
          description={
            "Make decisions, set goals, plan your schedule\nand monitor progress within one app"
          }
          size="lg"
          imgUrl={PlannerImg}
          className={s.GridItem_lg}
        />
        <ProjectCard
          title="Silly Knight"
          description="Demo game made during my experiments with Godot engine"
          imgUrl={SillyKnightImg}
          size="sm"
          className={s.GridItem_sm}
        />
        <ProjectCard
          title="Circuits"
          description="Make your custom devices in this game about computer logic"
          imgUrl={CircuitsImg}
          className={s.GridItem_md}
        />
        <ProjectCard
          title="Game Theory"
          description="Simple simulation of society with cooperation and cheating"
          imgUrl={GameTheoryImg}
          className={s.GridItem_md}
        />
        <ProjectCard
          title="Brick Breaker"
          description="Made during experiments with custom game engine"
          imgUrl={BrickBreakerImg}
          size="sm"
          className={s.GridItem_sm}
        />
        <ProjectCard
          title="Minesweeper"
          description="A classic game but on endless field"
          imgUrl={MinesweeperImg}
          size="sm"
          className={s.GridItem_sm}
        />
      </div>
    </main>
  );
};

export default ProjectsGrid;
