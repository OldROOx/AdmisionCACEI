"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Download, Filter, TrendingUp, School, Users, BookOpen } from "lucide-react"
import { useState } from "react"

// Mock data for charts
const promocionData = [
  { escuela: "CBTIS 45", estudiantes: 45, efectividad: 78 },
  { escuela: "CETIS 12", estudiantes: 32, efectividad: 65 },
  { escuela: "CONALEP 3", estudiantes: 28, efectividad: 82 },
  { escuela: "CBTIS 23", estudiantes: 38, efectividad: 71 },
  { escuela: "CETIS 8", estudiantes: 25, efectividad: 69 },
  { escuela: "CONALEP 7", estudiantes: 35, efectividad: 85 },
]

const induccionData = [
  { mes: "Ene", completados: 45, enProgreso: 23, pendientes: 12 },
  { mes: "Feb", completados: 52, enProgreso: 28, pendientes: 8 },
  { mes: "Mar", completados: 48, enProgreso: 31, pendientes: 15 },
  { mes: "Abr", completados: 61, enProgreso: 25, pendientes: 9 },
  { mes: "May", completados: 58, enProgreso: 29, pendientes: 11 },
]

const carrerasData = [
  { name: "Ing. Sistemas", value: 35, color: "#8b5cf6" },
  { name: "Ing. Industrial", value: 28, color: "#06b6d4" },
  { name: "Administración", value: 22, color: "#10b981" },
  { name: "Contaduría", value: 18, color: "#f59e0b" },
  { name: "Arquitectura", value: 15, color: "#ef4444" },
]

const asistenciaData = [
  { semana: "S1", asistencia: 92 },
  { semana: "S2", asistencia: 88 },
  { semana: "S3", asistencia: 94 },
  { semana: "S4", asistencia: 87 },
  { semana: "S5", asistencia: 91 },
  { semana: "S6", asistencia: 89 },
]

export default function ReportesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("2024")
  const [selectedModule, setSelectedModule] = useState("todos")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold">Reportes y Estadísticas</h1>
          <p className="text-muted-foreground">Análisis de efectividad de promoción e inducción educativa</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Período</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="semestre">Semestre Actual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Módulo</label>
              <Select value={selectedModule} onValueChange={setSelectedModule}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="promocion">Promoción</SelectItem>
                  <SelectItem value="induccion">Inducción</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efectividad Promoción</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">76%</div>
            <p className="text-xs text-muted-foreground">+5% vs mes anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Preparatorias Visitadas</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">6 nuevas este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estudiantes Alcanzados</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">203</div>
            <p className="text-xs text-muted-foreground">En actividades de promoción</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Inducción</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">89%</div>
            <p className="text-xs text-muted-foreground">Completaron el proceso</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Promotion Effectiveness Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Efectividad por Preparatoria</CardTitle>
            <CardDescription>Número de estudiantes alcanzados y porcentaje de efectividad</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={promocionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="escuela" fontSize={12} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="estudiantes" fill="var(--color-primary)" name="Estudiantes" />
                <Bar dataKey="efectividad" fill="var(--color-secondary)" name="Efectividad %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Career Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Distribución por Carrera</CardTitle>
            <CardDescription>Interés de estudiantes por programa académico</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={carrerasData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {carrerasData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Induction Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Progreso de Inducción</CardTitle>
            <CardDescription>Evolución mensual del proceso de inducción</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={induccionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completados" stackId="a" fill="var(--color-chart-1)" name="Completados" />
                <Bar dataKey="enProgreso" stackId="a" fill="var(--color-chart-2)" name="En Progreso" />
                <Bar dataKey="pendientes" stackId="a" fill="var(--color-chart-3)" name="Pendientes" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Attendance Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Tendencia de Asistencia</CardTitle>
            <CardDescription>Porcentaje de asistencia semanal en clases de nivelación</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={asistenciaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semana" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="asistencia"
                  stroke="var(--color-accent)"
                  strokeWidth={3}
                  name="Asistencia %"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Reports */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Top Preparatorias</CardTitle>
            <CardDescription>Instituciones con mayor efectividad de promoción</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {promocionData
                .sort((a, b) => b.efectividad - a.efectividad)
                .slice(0, 5)
                .map((item, index) => (
                  <div key={item.escuela} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{item.escuela}</p>
                        <p className="text-sm text-muted-foreground">{item.estudiantes} estudiantes</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{item.efectividad}%</Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Resumen Mensual</CardTitle>
            <CardDescription>Actividades realizadas este mes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Actividades de Promoción</p>
                  <p className="text-sm text-muted-foreground">Presentaciones realizadas</p>
                </div>
                <div className="text-2xl font-bold text-primary">42</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Clases de Nivelación</p>
                  <p className="text-sm text-muted-foreground">Sesiones completadas</p>
                </div>
                <div className="text-2xl font-bold text-secondary">28</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Evidencias Subidas</p>
                  <p className="text-sm text-muted-foreground">Documentos registrados</p>
                </div>
                <div className="text-2xl font-bold text-accent">156</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Nuevos Registros</p>
                  <p className="text-sm text-muted-foreground">Docentes y preparatorias</p>
                </div>
                <div className="text-2xl font-bold text-chart-1">12</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Opciones de Exportación</CardTitle>
          <CardDescription>Genere reportes detallados para análisis externo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="justify-start bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Reporte de Promoción (PDF)
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Estadísticas de Inducción (Excel)
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Reporte Completo (PDF)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
