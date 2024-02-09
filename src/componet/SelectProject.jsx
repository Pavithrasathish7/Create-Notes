import React from "react";
import Task from "./Task";

function SelectProject({ projected, ondelete }) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projected.title}
          </h1>
          <button
            onClick={ondelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{projected.duedate}</p>
        <p className="text-stone-600 whitespace-normal">
          {projected.descrption}
        </p>
      </header>
    </div>
  );
}

export default SelectProject;
