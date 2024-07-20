import { getCalls } from "./axios/api";

import { useQuery } from "@tanstack/react-query";
import { Call } from "./types/CallInterface";
import { CallCard } from "./components/call-card";

export function App() {
  const {
    data: calls,
    isLoading,
    error,
  } = useQuery<Call[]>({ queryKey: ["calls"], queryFn: getCalls });

  return (
    <div className="h-screen bg-zinc-900">
      <div className="space-y-4 p-5">
        <h1 className="font-bold text-zinc-200 text-lg uppercase">chamados</h1>

        {calls?.map((call) => (
          <CallCard call={call} />
        ))}
      </div>
    </div>
  );
}
