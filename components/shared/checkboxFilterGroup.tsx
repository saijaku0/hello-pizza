"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FilterChecboxProps, FilterCheckbox } from "./filterCheckbox";
import { Input } from "../ui";

type Item = FilterChecboxProps;

interface IProps {
  title: string;
  items: Item[];
  defaultItems: Item[];
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
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue))
    : defaultItems?.slice(0, limit);

  function onChangeSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <div className={cn(className)}>
      <p className="font-bolt mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, idx) => (
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

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 nt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary nt-3"
          >
            {showAll ? "Hide" : "+ Show All"}
          </button>
        </div>
      )}
    </div>
  );
};
