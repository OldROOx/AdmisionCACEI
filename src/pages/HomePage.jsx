import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, BarChart3, GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h1 className="font-heading text-2xl font-bold text-foreground">Sistema Educativo</h1>
            </div>
            <Button asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Gestión de Promoción e Inducción Educativa
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sistema integral para registrar, controlar y evaluar las actividades de promoción en educación superior y
            procesos de inducción estudiantil.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/dashboard">Acceder al Sistema</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Conocer Más</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="font-heading text-3xl font-bold text-center mb-12">Módulos del Sistema</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Promoción E.S.</CardTitle>
                <CardDescription>Registro de docentes, preparatorias visitadas y proyectos mostrados</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link to="/dashboard/promocion">Ver Módulo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="font-heading">Inducción</CardTitle>
                <CardDescription>Control de evidencias, asistencia y clases de nivelación</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link to="/dashboard/induccion">Ver Módulo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-heading">Reportes</CardTitle>
                <CardDescription>Estadísticas y gráficas de efectividad de promoción</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link to="/dashboard/reportes">Ver Reportes</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-chart-1 mb-4" />
                <CardTitle className="font-heading">Dashboard</CardTitle>
                <CardDescription>Panel principal con resumen de actividades y métricas</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link to="/dashboard">Ver Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Sistema de Promoción e Inducción Educativa. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
