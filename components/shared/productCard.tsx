import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface IProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<IProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 nt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, beatae
          libero. Architecto quidem.
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            From <b>{price}</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus className="w-5 h-5 mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
