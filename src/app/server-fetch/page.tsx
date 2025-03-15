import { OutputList } from "../_components/OutputList/OutputList";
import { User } from "../api/users/_data/users";

const ServerFetchPage = async () => {
  const fetched = await fetch("http://localhost:3000/api/users");
  const users: User[] = await fetched.json();
  return <OutputList users={users} />;
};

export default ServerFetchPage;
