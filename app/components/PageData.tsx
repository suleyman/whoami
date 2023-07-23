import React from "react";

type Props = {
  ip: string;
  location: string;
};

export default function PageData(props: Props) {
  return (
    <div className="max-w-sm border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
      <div className="text-xl">
        Your IP Address: <strong>{props.ip}</strong>
      </div>
      <div className="text-xl">
        Your Location: <strong>{props.location}</strong>
      </div>
    </div>
  );
}
