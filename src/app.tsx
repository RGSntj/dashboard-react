import { getCalls } from "./axios/api";

import { useQuery } from "@tanstack/react-query";
import { Call } from "./types/CallInterface";
import { CallCard } from "./components/call-card";

export function App() {

  const calls: Call[] = [
    {
      id: "u87zgvsd0876dsyaag87",
      category: "Hardware",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur
        vel cupiditate odio quas rem! Illum ipsam asperiores obcaecati, reiciendis
        eaque deserunt, recusandae autem, rem vel voluptatum in nisi hic!`,
      authorId: `87asfd6y7av0867dasf098`,
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        username: "Maria",
      },
    },
    {
      id: "u87zgvsd0876dsyaag87",
      category: "Software",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur
        vel cupiditate odio quas rem! Illum ipsam asperiores obcaecati, reiciendis
        eaque deserunt, recusandae autem, rem vel voluptatum in nisi hic!`,
      authorId: "87asfd6y7av0867dasf098",
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        username: "Rodrygo",
      },
    },
    {
      id: "u87zgvsd0876dsyaag87",
      category: "Hardware",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur
        vel cupiditate odio quas rem! Illum ipsam asperiores obcaecati, reiciendis
        eaque deserunt, recusandae autem, rem vel voluptatum in nisi hic!`,
      authorId: `87asfd6y7av0867dasf098`,
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        username: "Maria",
      },
    },
    {
      id: "u87zgvsd0876dsyaag87",
      category: "Software",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur
        vel cupiditate odio quas rem! Illum ipsam asperiores obcaecati, reiciendis
        eaque deserunt, recusandae autem, rem vel voluptatum in nisi hic!`,
      authorId: "87asfd6y7av0867dasf098",
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        username: "Rodrygo",
      },
    },
    {
      id: "u87zgvsd0876dsyaag87",
      category: "Hardware",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur
        vel cupiditate odio quas rem! Illum ipsam asperiores obcaecati, reiciendis
        eaque deserunt, recusandae autem, rem vel voluptatum in nisi hic!`,
      authorId: `87asfd6y7av0867dasf098`,
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        username: "Maria",
      },
    },
    {
      id: "u87zgvsd0876dsyaag87",
      category: "Software",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur
        vel cupiditate odio quas rem! Illum ipsam asperiores obcaecati, reiciendis
        eaque deserunt, recusandae autem, rem vel voluptatum in nisi hic!`,
      authorId: "87asfd6y7av0867dasf098",
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        username: "Rodrygo",
      },
    },
    {
      id: "u87zgvsd0876dsyaag87",
      category: "Hardware",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur
        vel cupiditate odio quas rem! Illum ipsam asperiores obcaecati, reiciendis
        eaque deserunt, recusandae autem, rem vel voluptatum in nisi hic!`,
      authorId: `87asfd6y7av0867dasf098`,
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        username: "Maria",
      },
    },
    {
      id: "u87zgvsd0876dsyaag87",
      category: "Software",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur
        vel cupiditate odio quas rem! Illum ipsam asperiores obcaecati, reiciendis
        eaque deserunt, recusandae autem, rem vel voluptatum in nisi hic!`,
      authorId: "87asfd6y7av0867dasf098",
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        username: "Rodrygo",
      },
    },
  ];
  // const {
  //   data: calls,
  //   isLoading,
  //   error,
  // } = useQuery<Call[]>({ queryKey: ["calls"], queryFn: getCalls });

  return (
    <div className="h-screen bg-zinc-900">
      <div className="space-y-4 p-5">
        <h1 className="font-bold text-zinc-200 text-lg uppercase">chamados</h1>

        <div className="flex flex-wrap gap-10 justify-center">
          {calls?.map((call) => (
            <CallCard call={call} />
          ))}
        </div>
      </div>
    </div>
  );
}
