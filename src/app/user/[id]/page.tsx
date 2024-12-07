import { User } from "@/types/user";
import { UserInfo } from "@/components/UserInfo/UserInfo";
import { notFound } from "next/navigation"; 
import { fetchData } from '@/utils/error';

export const UserPage = async ({ params }: { params: { id: string } }) => {

  const UserId = params.id;

    const { data: user, error } = await fetchData<User>(`https://jsonplaceholder.typicode.com/users/${UserId}`);

    if (error || !user) { 
      notFound();
    }

    return <UserInfo user={user} />;
};

export default UserPage;