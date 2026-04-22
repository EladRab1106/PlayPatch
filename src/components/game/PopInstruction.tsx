type PopInstructionProps = {
  instruction: string;
  roundIndex: number;
  totalRounds: number;
};

export function PopInstruction({ instruction, roundIndex, totalRounds }: PopInstructionProps) {
  return (
    <section className="instruction-card">
      <div>
        <p className="eyebrow">Pop the Right Thing</p>
        <h2>{instruction}</h2>
      </div>
      <span className="instruction-badge">
        Round {roundIndex + 1}/{totalRounds}
      </span>
    </section>
  );
}
