export type NumberedListItem = {
  title: string;
  description: string;
};

export function NumberedList({
  items,
  columns = 2,
}: {
  items: NumberedListItem[];
  columns?: 1 | 2;
}) {
  return (
    <ol className={`mt-10 grid gap-x-10 gap-y-8 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item, i) => (
        <li key={item.title} className="border-t border-line pt-5">
          <span className="font-serif text-sm text-accent-dark">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 font-serif text-lg leading-snug text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
