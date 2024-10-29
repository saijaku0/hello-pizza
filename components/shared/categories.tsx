"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface IProps {
  className?: string;
}

const cats = [
  "Pizza",
  "Combo",
  "Snacks",
  "Coctails",
  "Hot",
  "Drinks",
  "Desserts",
];

export const Categories: React.FC<IProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, idx) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === idx &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
          href={`/#${cat}`}
          key={idx}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
