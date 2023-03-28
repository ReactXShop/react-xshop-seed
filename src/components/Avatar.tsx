import React from "react";

type Props = {
  size: "small" | "medium" | "large";
  nameInitial: string;
};

export const Avatar: React.FC<Props> = ({ size = "small", nameInitial }) => {
  return (
    <div>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 hover:bg-gray-200">
        <span className="font-medium leading-none text-black">{nameInitial}</span>
      </span>
    </div>
  );
};
