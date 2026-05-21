type StudioStat = {
  icon?: string;
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
          {stat.icon ? (
            <span aria-hidden="true" className="studio-stat-icon">
              {stat.icon}
            </span>
          ) : null}
          <div>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
