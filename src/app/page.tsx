import { UserCard } from '@/components/UserCard/UserCard';
import { User } from "@/types/user";
import { fetchData } from '@/utils/error';
import { notFound } from "next/navigation"; 

const HomePage: React.FC = async () => {
  const { data: users, error } = await fetchData<User[]>('https://jsonplaceholder.typicode.com/users');

  if (error || !users || users.length === 0) {
    notFound();
  }
  return <UserCard users={users} />;
};

export default HomePage;