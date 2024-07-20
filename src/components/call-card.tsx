import { Call } from "../types/CallInterface";
import { CircleUserRound } from 'lucide-react'

interface CallProps {
  call: Call;
}

export function CallCard({ call }: CallProps) {
  return(
   <div className="bg-zinc-800 max-w-96 p-5 rounded-md shadow-3xl">
    <h1 className="flex items-center gap-2 text-xl text-white"> <CircleUserRound/> {call.author.username}</h1>
    <span className="text-zinc-400">{call.category}</span>
    <p className="py-4 text-white">{call.description}</p>
   </div>
  )
}

