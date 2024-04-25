import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => {
        console.log({ error });
        setError("Error fetching users");
      });
  }, []);
  return (
    <div>
      <h1 role="user-heading">Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li role="user-item" key={user}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};
