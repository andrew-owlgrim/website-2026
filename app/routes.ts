import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("circuits", "routes/circuits.tsx"),
  route("silly-knight", "routes/silly-knight.tsx"),
  route("game-theory", "routes/game-theory.tsx"),
  route("minesweeper", "routes/minesweeper.tsx"),
  route("brick-breaker", "routes/brick-breaker.tsx"),
] satisfies RouteConfig;
