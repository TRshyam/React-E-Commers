import React from "react";
import { Text } from "./Text";

export default function DesktopButton({ linkbutton = "See Offers", ...props }) {
  return (
    <div {...props}>
      <Text size="md" as="p" className="!text-gray-300">
        {linkbutton}
      </Text>
      <div className="h-[2px] w-px mt-[3px] bg-gray-300" />
      <div className="self-stretch h-[2px]  mt-[-2px] relative bg-gray-300" />
    </div>
  );
}
