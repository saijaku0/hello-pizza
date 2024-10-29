"use client";
import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./productCard";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface IProps {
  title: string;
  products: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductGroupList: React.FC<IProps> = ({
  title,
  products,
  categoryId,
  className,
  listClassName,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersactionRef = React.useRef(null);
  const intersaction = useIntersection(intersactionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersaction?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersaction?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersactionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.id}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
