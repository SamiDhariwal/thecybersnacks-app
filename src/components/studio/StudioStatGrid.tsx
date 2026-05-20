type StudioStat = {
  label: string;
  value: number | string;
};

type StudioStatGridProps = {
  stats: StudioStat[];
};

export function StudioStatGrid({ stats }: StudioStatGridProps) {
  return (
    <dl className="studio-stat-grid">
      {stats.map((stat) => (
        <div className="studio-stat-card" key={stat.label}>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
