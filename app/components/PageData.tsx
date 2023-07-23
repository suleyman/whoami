import React from "react";

type Props = {
  ip: string;
  location: {
    city: string;
    country: string;
    countryRegion: string;
    latitude: string;
    longitude: string;
    region: string;
  };
};

export default function PageData(props: Props) {
  return (
    <div className="max-w-sm border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
      <div className="text-xl">
        Your IP Address: <strong>{props.ip}</strong>
      </div>
      <div className="text-xl">
        Your Location: <pre>{JSON.stringify(props.location)}</pre>
      </div>
    </div>
  );
}
