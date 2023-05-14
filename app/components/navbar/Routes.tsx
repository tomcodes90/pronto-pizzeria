import Link from "next/link";
import React from "react";

const Route = ({ name, path }: any) => {
  return (
    <Link
      href={path}
      className="text-white bg-red-400 p-3 rounded-md uppercase"
    >
      {" "}
      {name}
    </Link>
  );
};

export default function Routes() {
  return (
    <div className="flex flex-1 justify-around gap-2 ">
      <Route name="Orders" path="/orders" />
      <Route name="Menu" path="/menu" />
      <Route name="History" path="/history" />
      <Route name="Stock" path="/stock" />
    </div>
  );
}
