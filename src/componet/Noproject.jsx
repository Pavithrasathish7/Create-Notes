import React from "react";
import image from "../assets/no-projects.png";
import Button from "./Button";

export default function Noproject({ onStart }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={image}
        alt="image name"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bond text-stone-500 my-4">
        No Notes Selected
      </h2>
      <p className="text-stone-400 mb-40">
        Select a Notes or Started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onStart}>Create New Notes</Button>
      </p>
    </div>
  );
}
