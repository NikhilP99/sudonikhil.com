"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={handleClick} className="flex my-auto rounded-full items-center justify-center mx-2 w-10 h-10 bg-primary-foreground hover:bg-primary-foreground/80" aria-label="Toggle Dark Mode">
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all" />
    </button>
  )
}
