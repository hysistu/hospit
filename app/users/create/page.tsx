"use client";

import UserForm from "@/components/UserForm";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateUserPage: React.FC = () => {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  const handleCreate = (newUser: Omit<User, "id">) => {
    const createdUser: User = {
      ...newUser,
      id: users.length + 1,
    };
    setUsers([...users, createdUser]);
    alert("User created successfully!");
    router.push("/users");
  };

  return (
    <div className="container mx-auto p-4">
      <UserForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateUserPage;
