import type { PatternToken } from '../../features/gameplay/gameTypes';

type PatternPreviewProps = {
  sequence: Array<PatternToken | null>;
  title?: string;
};

const positionClassMap = {
  left: 'pattern-token--left',
  center: 'pattern-token--center',
  right: 'pattern-token--right',
};

export function PatternPreview({ sequence, title }: PatternPreviewProps) {
  return (
    <section className="pattern-preview">
      {title ? <p className="eyebrow">{title}</p> : null}
      <div className="pattern-track" aria-label="Pattern sequence">
        {sequence.map((token, index) =>
          token ? (
            <div className="pattern-slot" key={`${token.shape}-${index}`}>
              <div className={`pattern-token ${positionClassMap[token.position]}`}>
                {Array.from({ length: token.count }).map((_, itemIndex) => (
                  <span
                    className={`pattern-piece pattern-piece--${token.shape} pattern-piece--${token.color}`}
                    key={`${token.shape}-${itemIndex}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="pattern-slot pattern-slot--missing" key={`missing-${index}`}>
              <span>?</span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
