import React from "react";
import { cn } from "@/lib/utils";
import { Categories } from "./categories";
import { SortPopup } from "./sortPopup";
import { Container } from "./container";

interface IProps {
  className?: string;
}

export const TopBar: React.FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className,
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
