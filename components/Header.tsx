"use client";

import Link from "next/link";
import {
  Bars3Icon,
  CalendarIcon,
  BanknotesIcon,
  ArrowLeftStartOnRectangleIcon,
  ShoppingCartIcon,
  GiftIcon,
  BookOpenIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarMenu,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

function Header() {
  const handleExpand = () => {
    console.log("Expand");
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <header className="absolute left-0 top-0 flex flex-col items-center justify-between h-screen w-16 py-8 bg-gradient">
      <Button variant="ghost" onClick={handleExpand}>
        <Bars3Icon className="h-7 w-7" />
      </Button>
      <Menubar className="flex flex-col items-center justify-center h-auto border-none space-x-0 space-y-5 bg-transparent">
        <MenubarMenu>
          <Button variant="ghost" asChild>
            <Link href="/#">
              <CalendarIcon className="h-7 w-7" />
            </Link>
          </Button>
        </MenubarMenu>
        <MenubarMenu>
          <Button variant="ghost" asChild>
            <Link href="/financeiro">
              <BanknotesIcon className="h-7 w-7" />
            </Link>
          </Button>
        </MenubarMenu>
        <MenubarMenu>
          <Button variant="ghost" asChild>
            <Link href="/mercado">
              <ShoppingCartIcon className="h-7 w-7" />
            </Link>
          </Button>
        </MenubarMenu>
        <MenubarMenu>
          <Button variant="ghost" asChild>
            <Link href="/#">
              <BookOpenIcon className="h-7 w-7" />
            </Link>
          </Button>
        </MenubarMenu>
        <MenubarMenu>
          <Button variant="ghost" asChild>
            <Link href="/#">
              <GiftIcon className="h-7 w-7" />
            </Link>
          </Button>
        </MenubarMenu>
        <MenubarMenu>
          <Button variant="ghost" asChild>
            <Link href="/#">
              <ChatBubbleLeftIcon className="h-7 w-7" />
            </Link>
          </Button>
        </MenubarMenu>
      </Menubar>
      <Button variant="ghost" onClick={handleLogout}>
        <ArrowLeftStartOnRectangleIcon className="h-7 w-7" />
      </Button>
    </header>
  );
}

export default Header;
