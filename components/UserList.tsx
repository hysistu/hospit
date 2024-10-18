"use client";

import { useEffect, useState } from "react";
import { User } from "../types/user";
import axios from "axios";
import Link from "next/link";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    alert("User deleted successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">User List</h2>
      <ul className="bg-white rounded-lg shadow-md p-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-gray-500">{user.phone}</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href={`/users/edit/${user.id}`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
