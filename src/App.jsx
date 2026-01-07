import KanbanColumn from "./Components/KanbanColumn.jsx";
import KanbanCard from "./Components/KanbanCard.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-stone-100 overflow-hidden">
      <div className="flex w-full h-screen">
        {/* MAIN CONTENT */}
        <main className="flex flex-1 flex-col">
          {/* Top bar */}
          <div className="flex h-16 items-center justify-between border-b border-stone-200 bg-white/80 px-4 backdrop-blur">
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-stone-900">
                Product Roadmap
              </h1>
              <p className="text-[11px] text-stone-500">
                Kanban board for managing tasks.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button className="rounded-full border border-stone-200 bg-white px-3 py-1.5 font-medium text-stone-700 shadow-sm hover:bg-stone-50 transition">
                + New task
              </button>
              <button className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 font-medium text-stone-500 hover:bg-stone-100 transition">
                Filter
              </button>
            </div>
          </div>

          {/* Kanban Board — STATIC */}
          <div className="flex-1 overflow-auto px-4 py-6">
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {/* Backlog */}
              <KanbanColumn title="Backlog" count={3}>
                <KanbanCard
                  title="Design landing page"
                  subtitle="Create hero section and layout"
                  priority="High"
                  due="Mar 12"
                />
                <KanbanCard
                  title="Setup project repo"
                  subtitle="Initialize GitHub repository"
                  priority="Medium"
                  due="Mar 14"
                />
                <KanbanCard
                  title="Write documentation"
                  subtitle="Add README and guidelines"
                  priority="Low"
                  due="Mar 20"
                />
              </KanbanColumn>

              {/* In Progress */}
              <KanbanColumn title="In Progress" count={2}>
                <KanbanCard
                  title="Build UI components"
                  subtitle="Column & card styles"
                  priority="High"
                  due="Mar 15"
                />
                <KanbanCard
                  title="Responsive layout"
                  subtitle="Mobile + desktop tweaks"
                  priority="Medium"
                  due="Mar 18"
                />
              </KanbanColumn>

              {/* Done */}
              <KanbanColumn title="Done" count={1}>
                <KanbanCard
                  title="Project setup"
                  subtitle="Vite + Tailwind installed"
                  priority="Low"
                  due="Mar 10"
                />
              </KanbanColumn>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
