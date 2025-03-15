"use client";

import { useEffect, useState } from "react";
import { User } from "../api/users/_data/users";

import { OutputList } from "../_components/OutputList/OutputList";

const fetchData = async () => {
  const fetched = await fetch("http://localhost:3000/api/users");
  const results = (await fetched.json()) as User[];
  return results;
};

const ClientFetchPage = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    async function fillData() {
      setError(null);
      setIsLoading(true);
      try {
        const results = await fetchData();
        setUsers(results);
        setError(null);
      } catch (error) {
        setError(error as Error);
      }
      setIsLoading(false);
    }
    fillData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error ({error.message})</div>;
  return <OutputList users={users} />;
};

export default ClientFetchPage;
