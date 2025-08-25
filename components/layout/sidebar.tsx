"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  GraduationCap,
  Home,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  UserPlus,
  School,
  Presentation as PresentationChart,
  FileText,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Promoción E.S.",
    href: "/promocion",
    icon: BookOpen,
    children: [
      { name: "Registrar Docente", href: "/promocion/docentes", icon: UserPlus },
      { name: "Registrar Preparatoria", href: "/promocion/preparatorias", icon: School },
      { name: "Registrar Actividad", href: "/promocion/actividades", icon: PresentationChart },
      { name: "Ver Registros", href: "/promocion/registros", icon: FileText },
    ],
  },
  {
    name: "Inducción",
    href: "/induccion",
    icon: Users,
    children: [
      { name: "Evidencias Curso", href: "/induccion/evidencias", icon: FileText },
      { name: "Clases Nivelación", href: "/induccion/nivelacion", icon: BookOpen },
      { name: "Control Asistencia", href: "/induccion/asistencia", icon: Users },
    ],
  },
  {
    name: "Reportes",
    href: "/reportes",
    icon: BarChart3,
  },
  {
    name: "Configuración",
    href: "/configuracion",
    icon: Settings,
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (name: string) => {
    setExpandedItems((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-heading font-bold">Sistema Educativo</span>
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isExpanded = expandedItems.includes(item.name)
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

            return (
              <div key={item.name}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", isActive && "bg-secondary text-secondary-foreground")}
                  onClick={() => {
                    if (item.children) {
                      toggleExpanded(item.name)
                    }
                  }}
                  asChild={!item.children}
                >
                  {item.children ? (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  )}
                </Button>

                {/* Submenu */}
                {item.children && isExpanded && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Button
                        key={child.href}
                        variant={pathname === child.href ? "secondary" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href={child.href}>
                          <child.icon className="h-3 w-3" />
                          {child.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </ScrollArea>

      {/* User Actions */}
      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
          <LogOut className="h-4 w-4" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={cn("hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0", className)}>
        <div className="flex flex-col flex-grow bg-card border-r">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
