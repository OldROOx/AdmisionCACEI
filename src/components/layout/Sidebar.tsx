import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  GraduationCap,
  Home,
  BookOpen,
  Users,
  BarChart3,
  UserCheck,
  School,
  Activity,
  FileText,
  Upload,
  Calendar,
  UserX,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  {
    name: "Promoción E.S.",
    href: "/dashboard/promocion",
    icon: BookOpen,
    children: [
      { name: "Registro Docentes", href: "/dashboard/promocion/docentes", icon: UserCheck },
      { name: "Preparatorias", href: "/dashboard/promocion/preparatorias", icon: School },
      { name: "Actividades", href: "/dashboard/promocion/actividades", icon: Activity },
      { name: "Registros", href: "/dashboard/promocion/registros", icon: FileText },
    ],
  },
  {
    name: "Inducción",
    href: "/dashboard/induccion",
    icon: Users,
    children: [
      { name: "Evidencias", href: "/dashboard/induccion/evidencias", icon: Upload },
      { name: "Nivelación", href: "/dashboard/induccion/nivelacion", icon: Calendar },
      { name: "Asistencia", href: "/dashboard/induccion/asistencia", icon: UserX },
    ],
  },
  { name: "Reportes", href: "/dashboard/reportes", icon: BarChart3 },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 bg-card border-r border-border">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="font-heading text-xl font-bold text-foreground">Sistema Educativo</h1>
        </div>
      </div>

      <nav className="px-4 pb-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>

              {item.children && (
                <ul className="ml-6 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        to={child.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                          location.pathname === child.href
                            ? "bg-secondary text-secondary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted",
                        )}
                      >
                        <child.icon className="h-3 w-3" />
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
