"use client";

import { User } from "@/types/user";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PropsUsers {
  users: User[];
}

export const UserCard: React.FC<PropsUsers> = ({ users }) => { 
  const router = useRouter();

  return (
    <div className="mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 max-w-screen-xl mx-auto">
        {users?.map((user) => (
          <Card key={user.id} className="p-4 rounded shadow border-none bg-gradient-to-r from-red-500 to-brown-500 text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-xl flex flex-col justify-center items-center">
              <div className="flex">
                <h2 className="mr-2 font-bold">Company name:</h2>
                <p>{user.company.name}</p>
              </div>
              <div className="flex">
                <h2 className="mr-2 font-bold">Email:</h2>
                <p>{user.email}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="mx-auto p-6"
                onClick={() => router.push(`/user/${user.id}`)}
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};