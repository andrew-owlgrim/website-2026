import clsx from "clsx";

type DonutProps = {
  value: number; // 0–100
  thickness?: number; // % from radius
  className?: string;
};

export function DonutChart({ value, thickness = 33, className }: DonutProps) {
  const v = Math.max(0, Math.min(100, value));
  const r = 50 - thickness / 4;

  return (
    <svg viewBox="0 0 100 100" className={clsx("donunt-chart", className)}>
      <g transform="rotate(-90 50 50)">
        {/* background */}
        <circle
          cx="50"
          cy="50"
          r={r}
          pathLength={100}
          className="donut-bg"
          strokeWidth={thickness / 2}
          stroke="currentColor"
          fill="none"
        />

        {/* progress */}
        <circle
          cx="50"
          cy="50"
          r={r}
          pathLength={100}
          strokeDasharray={`${v} 100`}
          className="donut-value"
          strokeWidth={thickness / 2}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          style={{ transform: "rotate(180deg)", transformOrigin: "50% 50%" }}
        />
      </g>
    </svg>
  );
}
