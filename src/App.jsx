import { useState } from "react";
import KanbanColumn from "./Components/KanbanColumn.jsx";
import KanbanCard from "./Components/KanbanCard.jsx";

export default function App() {
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 7);

  const [columns, setColumns] = useState({
    1: [],
    2: [],
    3: [],
  });

  function AddItem(title, subtitle, priority) {
    const newKanban = {
      id: crypto.randomUUID(),
      title,
      subtitle: subtitle || "Newly added task",
      meta: {
        owner: "You",
        due: dueDate.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
        priority: priority || "Medium",
      },
    };

    setColumns((prev) => ({
      ...prev,
      1: [...prev[1], newKanban],
    }));
  }

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
                Version 03: real data structure + Add task (Backlog only)
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

          {/* Board */}
          <div className="flex-1 overflow-auto px-4 py-6">
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {/* Backlog */}
              <KanbanColumn
                title="Backlog"
                row={1}
                count={columns[1].length}
                AddItem={AddItem}
                canAdd={true}
              >
                {columns[1].map((item) => (
                  <KanbanCard
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    meta={item.meta}
                  />
                ))}
              </KanbanColumn>

              {/* In Progress */}
              <KanbanColumn
                title="In Progress"
                row={2}
                count={columns[2].length}
                canAdd={false}
              >
                {columns[2].map((item) => (
                  <KanbanCard
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    meta={item.meta}
                  />
                ))}
              </KanbanColumn>

              {/* Done */}
              <KanbanColumn
                title="Done"
                row={3}
                count={columns[3].length}
                canAdd={false}
              >
                {columns[3].map((item) => (
                  <KanbanCard
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    meta={item.meta}
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
