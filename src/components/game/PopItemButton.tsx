import type { PopItem } from '../../features/gameplay/gameTypes';

type PopItemButtonProps = {
  item: PopItem;
  popped: boolean;
  wrong: boolean;
  onTap: (id: string) => void;
};

export function PopItemButton({ item, popped, wrong, onTap }: PopItemButtonProps) {
  return (
    <button
      type="button"
      className={`pop-item pop-item--${item.color} ${popped ? 'is-popped' : ''} ${wrong ? 'is-wrong' : ''}`.trim()}
      onClick={() => onTap(item.id)}
      disabled={popped}
      aria-label={`${item.color} ${item.shape}`}
    >
      <span className={`pop-item__shape pop-item__shape--${item.shape}`} />
    </button>
  );
}
