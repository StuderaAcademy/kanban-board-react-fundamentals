import DropDownButton from "./DropDownButton.jsx";

export default function KanbanCard({
    id,
    title,
    subtitle,
    meta,
    row,
    DeleteTask,
}) {
    const priority = meta?.priority || "Medium";

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
        <article className="group rounded-xl border border-stone-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md">
            <header className="mb-1.5 flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-medium text-stone-900">{title}</h4>
                    {subtitle && (
                        <p className="text-xs text-stone-500 leading-relaxed">{subtitle}</p>
                    )}
                </div>

                <div className="flex flex-col items-end gap-1">
                    <span className={priorityClasses}>{priority}</span>
                </div>
            </header>

            <footer className="mt-2 flex items-center justify-between text-[11px] text-stone-400">
                {/* ✅ Like your GitHub: dropdown only appears in Backlog (row 1) */}
                {row === 1 && (
                    <DropDownButton
                        onDelete={() => DeleteTask?.(id)}
                        // Modify will be added in Version 05
                        onModify={() => { }}
                    />
                )}

                <div className="flex items-center gap-2">
                    <span>{meta?.due}</span>
                </div>
            </footer>
        </article>
    );
}
