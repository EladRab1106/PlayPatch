type CelebrationBurstProps = {
  active: boolean;
  label: string;
};

export function CelebrationBurst({ active, label }: CelebrationBurstProps) {
  return (
    <div className={active ? 'celebration-burst celebration-burst--active' : 'celebration-burst'}>
      <span>{label}</span>
      <i className="burst-dot burst-dot--one" />
      <i className="burst-dot burst-dot--two" />
      <i className="burst-dot burst-dot--three" />
    </div>
  );
}
