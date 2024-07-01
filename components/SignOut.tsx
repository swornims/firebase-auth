"use client";

import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/signout", {
        method: "POST",
      });
      await res.json();
      sessionStorage.removeItem("user");
      router.push("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-red-500 text-white rounded"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
