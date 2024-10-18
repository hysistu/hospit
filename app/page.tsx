import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to the User Management App
        </h1>
        <div className="space-x-4">
          <Link href="/users" className="text-blue-500 hover:underline text-xl">
            View Users
          </Link>
          <Link
            href="/users/create"
            className="text-green-500 hover:underline text-xl"
          >
            Create User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
