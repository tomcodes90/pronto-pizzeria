"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-48 h-full text-white border-l">
      <p>{date.toLocaleTimeString()}</p>
      <p className="text-center">
        Developed by <br />
        <Link
          href="https://www.linkedin.com/in/thomas-miccich%C3%A8-21660b230/"
          className="hover:animate-pulse hover:underline underline-offset-4"
        >
          Thomas Miccichè
        </Link>
      </p>
    </div>
  );
}
