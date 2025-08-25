import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, School, UserPlus, FileText } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido al Sistema de Promoción e Inducción Educativa</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Docentes Registrados</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Preparatorias Visitadas</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+5 este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Actividades de Promoción</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+12 esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estudiantes en Inducción</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+23% vs mes anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Acciones Rápidas - Promoción</CardTitle>
            <CardDescription>Gestione las actividades de promoción en educación superior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start">
              <Link href="/promocion/docentes">
                <UserPlus className="mr-2 h-4 w-4" />
                Registrar Nuevo Docente
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start bg-transparent">
              <Link href="/promocion/preparatorias">
                <School className="mr-2 h-4 w-4" />
                Registrar Preparatoria
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start bg-transparent">
              <Link href="/promocion/actividades">
                <BookOpen className="mr-2 h-4 w-4" />
                Nueva Actividad de Promoción
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Acciones Rápidas - Inducción</CardTitle>
            <CardDescription>Administre el proceso de inducción y nivelación</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start">
              <Link href="/induccion/evidencias">
                <FileText className="mr-2 h-4 w-4" />
                Subir Evidencias
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start bg-transparent">
              <Link href="/induccion/nivelacion">
                <BookOpen className="mr-2 h-4 w-4" />
                Gestionar Nivelación
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start bg-transparent">
              <Link href="/induccion/asistencia">
                <Users className="mr-2 h-4 w-4" />
                Control de Asistencia
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Actividad Reciente</CardTitle>
          <CardDescription>Últimas acciones realizadas en el sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <UserPlus className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Nuevo docente registrado</p>
                <p className="text-xs text-muted-foreground">Dr. María González - hace 2 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 p-2 rounded-full">
                <School className="h-4 w-4 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Preparatoria visitada</p>
                <p className="text-xs text-muted-foreground">CBTIS No. 45 - hace 4 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-2 rounded-full">
                <BookOpen className="h-4 w-4 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Actividad de promoción registrada</p>
                <p className="text-xs text-muted-foreground">Presentación Ingeniería en Sistemas - hace 6 horas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
