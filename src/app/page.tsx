import { UserCard } from '@/components/UserCard/UserCard';
import { User } from "@/types/user";

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 60 } });
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const users: User[] = await response.json();
  return users;
};

const HomePage = async () => {
  const users = await fetchUsers();
  return <UserCard users={users} />;
};

export default HomePage;