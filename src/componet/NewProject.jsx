import React, { useRef } from "react";
import Input from "./Input";
import Model from "./Model";

export default function NewProject({ onAdd, onCancel }) {
  const model = useRef();
  const title = useRef();
  const descrption = useRef();
  const duedate = useRef();

  function handleSave() {
    const entertitle = title.current.value;
    const enterdescription = descrption.current.value;
    const enterduedate = duedate.current.value;

    if (
      entertitle.trim() === "" ||
      enterdescription.trim() === "" ||
      enterduedate.trim() === ""
    ) {
      model.current.open();
      return;
    }
    onAdd({
      title: entertitle,
      descrption: enterdescription,
      duedate: enterduedate,
    });
  }

  return (
    <>
      <Model ref={model} buttoncancel="Cancel">
        <h2 className="text-xl font-bond text-stone-800 my-4 ">
          Please enter valid input
        </h2>
        <p className="text-stone-700 mb-4 ">
          Yenda Daiiiiiii athukuta sollanuma
        </p>
        <p className="text-stone-700 mb-4 ">
          Input la ethume illa da correct ah type pannu
        </p>
      </Model>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={descrption} label="Description" textarea />
          <Input type="date" ref={duedate} label="Due date" />
        </div>
      </div>
    </>
  );
}
