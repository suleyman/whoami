import React from "react";

type Props = {
  data: {
    ip: string;
    location: string;
  };
};

export default function PageData(props: Props) {
  return (
    <div className="max-w-sm border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
      <div className="text-xl">
        Your IP Address: <strong>{props.data.ip}</strong>
      </div>
      <div className="text-xl">
        Your Location: <strong>{props.data.location}</strong>
      </div>
    </div>
  );
}
