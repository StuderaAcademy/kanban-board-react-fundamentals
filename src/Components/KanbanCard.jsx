export default function KanbanCard({ title, subtitle, priority = "Medium", due }) {
    let priorityClasses =
        "border px-2 py-0.5 text-[10px] rounded-full uppercase tracking-[0.14em]";

    if (priority === "Low") {
        priorityClasses += " bg-emerald-50 border-emerald-200 text-emerald-700";
    } else if (priority === "High") {
        priorityClasses += " bg-rose-50 border-rose-200 text-rose-700";
    } else {
        priorityClasses += " bg-amber-50 border-amber-200 text-amber-700";
    }

    return (
        <article className="rounded-xl border border-stone-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md">
            <header className="mb-1.5 flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-medium text-stone-900">{title}</h4>
                    {subtitle && (
                        <p className="text-xs text-stone-500 leading-relaxed">{subtitle}</p>
                    )}
                </div>

                <span className={priorityClasses}>{priority}</span>
            </header>

            <footer className="mt-2 flex items-center justify-end text-[11px] text-stone-400">
                <span>{due}</span>
            </footer>
        </article>
    );
}
