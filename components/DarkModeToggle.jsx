"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function DarkModeToggle() {
  const { setTheme } = useTheme()
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
    setTheme(toggle ? "dark" : "light")
  }


  return (
    <Button variant="default" size="icon" onClick={handleToggle} className="rounded-full">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
