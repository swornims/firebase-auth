"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SignOut from "../components/SignOut";

interface User {
  email: string;
}

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {!user ? (
        <div>
          <Link
            className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
            href="/signin"
          >
            Sign In
          </Link>
          <Link
            className="px-4 py-2 bg-green-500 text-white rounded"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <div>
          <p className="font-medium mb-4">Logged in as: {user.email}</p>
          <SignOut />
        </div>
      )}
    </div>
  );
};

export default HomePage;
