import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, School, Presentation as PresentationChart, FileText } from "lucide-react"
import Link from "next/link"

export default function PromocionPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold">Módulo de Promoción E.S.</h1>
        <p className="text-muted-foreground">Gestione las actividades de promoción en educación superior</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Docentes Activos</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Participando en promoción</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Preparatorias</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Instituciones registradas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Actividades</CardTitle>
            <PresentationChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Actions */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <UserPlus className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-heading">Registrar Docente</CardTitle>
            <CardDescription>Registre un nuevo docente encargado de realizar actividades de promoción</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/promocion/docentes">Registrar Docente</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <School className="h-12 w-12 text-secondary mb-4" />
            <CardTitle className="font-heading">Registrar Preparatoria</CardTitle>
            <CardDescription>Agregue una nueva preparatoria al catálogo de instituciones visitadas</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/promocion/preparatorias">Registrar Preparatoria</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <PresentationChart className="h-12 w-12 text-accent mb-4" />
            <CardTitle className="font-heading">Registrar Actividad</CardTitle>
            <CardDescription>Registre una nueva actividad de promoción realizada por un docente</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/promocion/actividades">Registrar Actividad</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <FileText className="h-12 w-12 text-chart-1 mb-4" />
            <CardTitle className="font-heading">Ver Registros</CardTitle>
            <CardDescription>Consulte y administre todos los registros de actividades de promoción</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/promocion/registros">Ver Registros</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Resumen de Actividades</CardTitle>
          <CardDescription>Vista general de las actividades de promoción</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <p className="text-sm text-muted-foreground">Esta semana</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">32</div>
              <p className="text-sm text-muted-foreground">Este mes</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">156</div>
              <p className="text-sm text-muted-foreground">Estudiantes alcanzados</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-1">12</div>
              <p className="text-sm text-muted-foreground">Proyectos presentados</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
