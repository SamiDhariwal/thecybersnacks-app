import type { StudioContentStatus } from "@/lib/studio/certificationMetrics";

type StudioStatusBadgeProps = {
  status: StudioContentStatus;
};

export function StudioStatusBadge({ status }: StudioStatusBadgeProps) {
  return (
    <span className={`studio-status-badge status-${status.toLowerCase()}`}>
      {status}
    </span>
  );
}
