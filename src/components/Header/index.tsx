import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";

export default function Header() {
  return (
    <div className="mt-6 md:mt-10 flex flex-row justify-between">
      <Image src="/logo.png" alt="logo" width={50} height={50} className="rounded-full border-2 border-primary-foreground" />
      <ThemeToggle />
    </div>
  )
}