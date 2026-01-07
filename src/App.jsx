import KanbanColumn from "./Components/KanbanColumn.jsx";
import KanbanCard from "./Components/KanbanCard.jsx";

export default function App() {
  // Version 02: simple display data (not the final/ideal structure)
  // Just to test the rendering process.
  const tasks = {
    backlog: [
      { title: "Design landing page", subtitle: "Create hero section and layout", priority: "High", due: "Mar 12" },
      { title: "Setup project repo", subtitle: "Initialize GitHub repository", priority: "Medium", due: "Mar 14" },
      { title: "Write documentation", subtitle: "Add README and guidelines", priority: "Low", due: "Mar 20" },
    ],
    inProgress: [
      { title: "Build UI components", subtitle: "Column & card styles", priority: "High", due: "Mar 15" },
      { title: "Responsive layout", subtitle: "Mobile + desktop tweaks", priority: "Medium", due: "Mar 18" },
    ],
    done: [
      { title: "Project setup", subtitle: "Vite + Tailwind installed", priority: "Low", due: "Mar 10" },
    ],
  };

  return (
    <div className="min-h-screen w-full bg-stone-100 overflow-hidden">
      <div className="flex w-full h-screen">
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

          {/* Kanban Board — now renders from simple data */}
          <div className="flex-1 overflow-auto px-4 py-6">
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {/* Backlog */}
              <KanbanColumn title="Backlog" count={tasks.backlog.length}>
                {tasks.backlog.map((t, idx) => (
                  <KanbanCard
                    key={`backlog-${idx}`}
                    title={t.title}
                    subtitle={t.subtitle}
                    priority={t.priority}
                    due={t.due}
                  />
                ))}
              </KanbanColumn>

              {/* In Progress */}
              <KanbanColumn title="In Progress" count={tasks.inProgress.length}>
                {tasks.inProgress.map((t, idx) => (
                  <KanbanCard
                    key={`inprogress-${idx}`}
                    title={t.title}
                    subtitle={t.subtitle}
                    priority={t.priority}
                    due={t.due}
                  />
                ))}
              </KanbanColumn>

              {/* Done */}
              <KanbanColumn title="Done" count={tasks.done.length}>
                {tasks.done.map((t, idx) => (
                  <KanbanCard
                    key={`done-${idx}`}
                    title={t.title}
                    subtitle={t.subtitle}
                    priority={t.priority}
                    due={t.due}
                  />
                ))}
              </KanbanColumn>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
