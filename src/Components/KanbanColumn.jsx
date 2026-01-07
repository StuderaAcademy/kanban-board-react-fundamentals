export default function KanbanColumn({ title, count, children }) {
    return (
        <section className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-stone-50/60 p-3 shadow-sm">
            {/* Column header */}
            <header className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                        {title}
                    </span>
                    <span className="text-[11px] text-stone-400">
                        {count} {count === 1 ? "task" : "tasks"}
                    </span>
                </div>

                {/* Layout only: button does nothing for now */}
                <button
                    type="button"
                    className="
            rounded-full border border-stone-200 bg-white px-2.5 py-1
            text-[11px] font-medium text-stone-600 shadow-sm
            hover:bg-stone-50 transition
          "
                >
                    + Add
                </button>
            </header>

            {/* Cards */}
            <div className="flex flex-col gap-3">{children}</div>
        </section>
    );
}
