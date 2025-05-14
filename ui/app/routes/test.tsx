import type { Route } from "./+types/test";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Test" }, { name: "description", content: "Test!" }];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(`http://localhost:8080/ping`);
  const product = await res.json();
  return product;
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Test({ loaderData }: Route.ComponentProps) {
  const { message } = loaderData;
  return (
    <div className="p-8 sm:p-2 w-auto">
      <div className="text-2xl font-bold grid items-center justify-center">
        Title
      </div>
      <nav className="p-2">Navigation</nav>
      <div className="grid grid-cols-[20%_80%]">
        <div className="p-2">Sidebar</div>
        <div className="p-2">{message}</div>
      </div>

      <div className="fixed bottom-0 w-full">
        <div className="grid p-4 items-center justify-center">Footer</div>
      </div>
    </div>
  );
}
