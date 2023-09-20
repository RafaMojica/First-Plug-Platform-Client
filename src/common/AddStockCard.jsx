"use client";
import React from "react";
import { IconX, FileIcon } from "./Icons";

const AddStockCard = ({ title, file, currentDate, className }) => {
  return (
    <article className={`flex flex-col ${className || ""}`}>
      <section className="bg-white p-4 rounded-md shadow-md mx-10">
        <header className="flex items-center justify-between">
          <div className="flex">
            <div className="flex gap-2">
              <FileIcon />
              <div className="flex-col">
                <h2 className="font-bold">{title}</h2>
                <p className="text-gray-500">{file}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button className="bg-transparent border-none cursor-pointer">
              <IconX />
            </button>
            <p className="text-gray-500">{currentDate} </p>
          </div>
        </header>
      </section>
    </article>
  );
};

export default AddStockCard;
