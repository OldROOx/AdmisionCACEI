import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BookOpen, Users, Upload } from "lucide-react"
import Link from "next/link"

export default function InduccionPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold">Módulo de Inducción</h1>
        <p className="text-muted-foreground">Gestione el proceso de inducción y nivelación de estudiantes</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estudiantes en Inducción</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Activos este periodo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clases de Nivelación</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Programadas este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Evidencias Subidas</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Upload className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-heading">Evidencias del Curso</CardTitle>
            <CardDescription>
              Registre y almacene evidencias del curso de inducción, incluyendo asistencia al curso en línea
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/induccion/evidencias">Gestionar Evidencias</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <BookOpen className="h-12 w-12 text-secondary mb-4" />
            <CardTitle className="font-heading">Clases de Nivelación</CardTitle>
            <CardDescription>
              Administre el registro de clases de nivelación y almacene evidencias relacionadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/induccion/nivelacion">Gestionar Nivelación</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="h-12 w-12 text-accent mb-4" />
            <CardTitle className="font-heading">Control de Asistencia</CardTitle>
            <CardDescription>
              Lleve un control detallado de la asistencia de alumnos en los cursos de nivelación
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/induccion/asistencia">Control de Asistencia</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Progreso del Curso de Inducción</CardTitle>
            <CardDescription>Estado actual de los estudiantes en el proceso de inducción</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Curso Completado</span>
                <span className="text-sm text-muted-foreground">89 estudiantes</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "57%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">En Progreso</span>
                <span className="text-sm text-muted-foreground">45 estudiantes</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: "29%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Pendiente</span>
                <span className="text-sm text-muted-foreground">22 estudiantes</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-muted-foreground h-2 rounded-full" style={{ width: "14%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Actividades Recientes</CardTitle>
            <CardDescription>Últimas acciones realizadas en el módulo de inducción</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Upload className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Evidencia subida</p>
                  <p className="text-xs text-muted-foreground">Lista de asistencia - Matemáticas - hace 1 hora</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-2 rounded-full">
                  <BookOpen className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Clase programada</p>
                  <p className="text-xs text-muted-foreground">Nivelación de Física - hace 3 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Users className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Asistencia registrada</p>
                  <p className="text-xs text-muted-foreground">25 estudiantes - Química - hace 5 horas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
