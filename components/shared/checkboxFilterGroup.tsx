"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FilterChecboxProps, FilterCheckbox } from "./filterCheckbox";
import { Input } from "../ui";

type Item = FilterChecboxProps;

interface IProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  omChange?: (value: string[]) => void;
  defaultValue?: string;
  className?: string;
}

export const CheckboxFilterGroup: React.FC<IProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  className,
  defaultValue,
  omChange,
}) => {
  return (
    <div className={cn(className)}>
      <p className="font-bolt mb-3">{title}</p>

      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item, idx) => (
          <FilterCheckbox
            key={idx}
            text={item.value}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
    </div>
  );
};
