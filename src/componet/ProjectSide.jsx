import React from "react";

export default function ProjectSide({ onStart, projects, handleselect }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:wd-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:tex-xl text-stone-200">
        Your Notes
      </h2>
      <div>
        <button
          onClick={onStart}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Notes
        </button>
      </div>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button
                onClick={() => handleselect(project.id)}
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
