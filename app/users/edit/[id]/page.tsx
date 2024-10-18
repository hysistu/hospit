"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "@/types/user";
import UserForm from "@/components/UserForm";

const EditUserPage: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const extractedId = pathname.split("/").pop();

    if (extractedId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${extractedId}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    }
  }, []);

  const handleUpdate = (updatedUser: Omit<User, "id">) => {
    if (user) {
      const newUser = { ...user, ...updatedUser };
      setUser(newUser);
      alert("User updated successfully!");
      router.push("/users");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {user ? (
        <UserForm onSubmit={handleUpdate} initialData={user} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditUserPage;
