"use client";

import { User } from "@/types/user";
import { Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useFadeIn from "@/utils/animation";

interface PropsUsersInfo {
  user: User;
}

export const UserInfo: React.FC<PropsUsersInfo> = ({ user }) => {

  const router = useRouter();

  const { isVisible, fadeInClass } = useFadeIn();

  return (
    <div className="mx-auto p-6 max-w-screen-md">
          <Card key={user.id} className={`p-4 rounded shadow border-none bg-gradient-to-r from-red-500 to-brown-500 text-center ${fadeInClass}`}>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl flex flex-col items-start justify-center">
                <p><b>Username:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Address:</b> {user.address.street}, {user.address.city}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Website:</b> {user.website}</p>
                <p><b>Company:</b> {user.company.name}</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="mx-auto p-6 text-xl"
                onClick={() => router.push('/')}
                >HOME
              </Button>
            </CardFooter>
          </Card>
    </div>
  );
}