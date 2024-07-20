import { Call } from "../types/CallInterface";

interface CallProps {
  call: Call;
}

export function CallCard({ call }: CallProps) {
  return <p>Card</p>;
}
