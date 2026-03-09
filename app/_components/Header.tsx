"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import CVModal from "./CVModal";

function Header() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.png"} alt="logo" width={60} height={60} />
        <h2 className="font-bold text-3xl font-game">Khang</h2>
      </div>
      {/* Navbar */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8 font-game">
          <NavigationMenuItem>
            <NavigationMenuLink className="text-2xl p-2 hover:bg-accent rounded-xl cursor-alias">
              <Link href={"/aboutme"}> About me</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-2xl p-2 hover:bg-accent rounded-xl cursor-pointer"
              onClick={() => setCvModalOpen(true)}
            >
              CV
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-2xl p-2 hover:bg-accent rounded-xl cursor-alias">
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-2xl p-2 hover:bg-accent rounded-xl cursor-alias">
              <Link href={"/contact"}>Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* Contact */}
      <Button className="font-game text-2xl hover:bg-amber-300" variant="pixel">
        {" "}
        Feedback{" "}
      </Button>

      <CVModal open={cvModalOpen} onOpenChange={setCvModalOpen} />
    </div>
  );
}

export default Header;
