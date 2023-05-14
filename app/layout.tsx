import "./globals.css";

import Clock from "./components/navbar/Clock";
import Routes from "./components/navbar/Routes";
import { Logo } from "./components/navbar/Logo";

export const metadata = {
  title: "Pronto Pizzeria",
  description: "Manage all the aspects of your Pizza Shop!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center h-32 w-screen bg-green-700">
          <Logo />
          <Routes />
          <Clock />
        </div>
        {children}
      </body>
    </html>
  );
}
