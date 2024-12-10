"use client";

import { User } from "@/types/user";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useFadeIn from "@/utils/animation";
import { SearchInput } from "@/components/SearchInput/SearchInput";

interface PropsUsers {
  users: User[];
}

export const UserCard: React.FC<PropsUsers> = ({ users }) => { 
  const router = useRouter();

  const [searchName, setSearchName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { isVisible, fadeInClass } = useFadeIn();

  const handleSearch = () => {
    if (!searchName.trim()) { 
      setMessage("Заполните поле");
      return;
    }
  
    const user = users.find(user => user.name.toLowerCase() === searchName.toLowerCase());

    if (user) {
      router.push(`/user/${user.id}`);
      setMessage("");
    } else {
      setMessage("Пользователь не найден");
    }
  };

  return (
    <div className={`mx-auto p-6 transition-opacity duration-1000 ${fadeInClass}`}>
      <SearchInput 
        searchName={searchName}
        setSearchName={setSearchName}
        handleSearch={handleSearch}
        message={message}
      />

      <h1 className="text-center text-3xl m-4 font-bold">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 max-w-screen-xl mx-auto">
        {users?.map((user) => (
          <Card key={user.id} className="p-4 rounded shadow border-none bg-gradient-to-r from-red-500 to-brown-500">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">{user.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-xl flex flex-col">
                <p><b>Company:</b> {user.company.name}</p>
                <p><b>Email:</b> {user.email}</p>
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