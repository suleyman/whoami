"use client";

import PageData from "@/app/components/PageData";
import { useEffect, useState } from "react";

const getData = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_APP_URL + "/api/whoami", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export default function Home() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
        {data ? <PageData location={data.location} ip={data.ip} /> : "No data"}
    </main>
  );
}
