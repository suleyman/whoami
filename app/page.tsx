import PageData from "@/app/components/PageData";

export default async function Home() {
  const response = await fetch(process.env.APP_URL + "/api/whoami", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <PageData ip={data.ip} location={data.location} />
    </main>
  );
}
