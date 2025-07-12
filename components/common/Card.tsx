import React from "react";
import Image from "next/image";
import { CardProps } from "@/types";
import { Button } from "@/components/common/Button";
import { UI_TEXT } from "@/constants";

export const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      key={id}
      className="rounded-2xl overflow-hidden shadow-md border hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <Button onClick={onClick} className="mt-2">
          {UI_TEXT.viewDetails}
        </Button>
      </div>
    </div>
  );
};

export default Card;
