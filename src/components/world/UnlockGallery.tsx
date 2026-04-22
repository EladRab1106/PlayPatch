type UnlockGalleryProps = {
  title: string;
  items: string[];
};

export function UnlockGallery({ title, items }: UnlockGalleryProps) {
  return (
    <section className="unlock-gallery">
      <p className="eyebrow">{title}</p>
      <div className="unlock-gallery__items">
        {items.map((item) => (
          <article className="unlock-chip" key={item}>
            <span className="unlock-chip__spark">✦</span>
            <strong>{item}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
