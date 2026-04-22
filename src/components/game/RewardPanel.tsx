type RewardPanelProps = {
  seeds: number;
  streak: number;
  feedback: 'idle' | 'correct' | 'incorrect';
  rewardMessage: string;
};

export function RewardPanel({ seeds, streak, feedback, rewardMessage }: RewardPanelProps) {
  return (
    <aside className="reward-panel">
      <p className="eyebrow">Reward loop</p>
      <div className="reward-stat">
        <strong>{seeds}</strong>
        <span>Seeds collected</span>
      </div>
      <div className="reward-stat">
        <strong>{streak}/3</strong>
        <span>Blooms this round</span>
      </div>
      <div
        className={
          feedback === 'correct'
            ? 'reward-message reward-message--success'
            : feedback === 'incorrect'
              ? 'reward-message reward-message--retry'
              : 'reward-message'
        }
      >
        {feedback === 'correct' && rewardMessage ? rewardMessage : null}
        {feedback === 'incorrect' ? 'Almost there. Look at the rule and try again.' : null}
        {feedback === 'idle' ? 'Solve patterns to grow flowers, paths, and gentle creatures.' : null}
      </div>
    </aside>
  );
}
