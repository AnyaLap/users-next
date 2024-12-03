import { User } from "@/types/user";
import { Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";

interface PropsUsers {
  users: User[];
}

export const UserCard = ({ users }: PropsUsers) => {
  return (
    <div className="mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-w-screen-xl mx-auto">
        {users.map((user) => (
          <Card key={user.id} className="p-4 rounded shadow border-none bg-gradient-to-r from-red-500 to-brown-500 text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl">
              <p>{user.company.name}</p>
              <p>{user.email}</p>
            </CardContent>
            <CardFooter>
              <Button className="mx-auto p-6">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};