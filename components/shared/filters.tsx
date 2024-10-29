import React from "react";
import { cn } from "@/lib/utils";

import { Title } from "./title";
import { FilterCheckbox } from "./filterCheckbox";
import { Input } from "../ui";
import { RangeSlider } from "./rangeSlider";
import { CheckboxFilterGroup } from "./checkboxFilterGroup";

interface IProps {
  className?: string;
}

export const Filters: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Take it" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFilterGroup
        title="Components"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: "Chees sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Onio",
            value: "5",
          },
          {
            text: "Tomatos",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Chees sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Onio",
            value: "5",
          },
          {
            text: "Tomatos",
            value: "6",
          },
          {
            text: "Chees sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Onio",
            value: "5",
          },
          {
            text: "Tomatos",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
