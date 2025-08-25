"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, ArrowLeft, Search, Download, Calendar } from "lucide-react"
import Link from "next/link"

interface Estudiante {
  id: string
  nombre: string
  matricula: string
  carrera: string
  presente: boolean
}

interface RegistroAsistencia {
  id: string
  clase: string
  fecha: string
  instructor: string
  estudiantes: Estudiante[]
  totalPresentes: number
  totalEstudiantes: number
}

const estudiantesMock: Estudiante[] = [
  { id: "1", nombre: "Juan Pérez García", matricula: "2024001", carrera: "Ing. Sistemas", presente: true },
  { id: "2", nombre: "María González López", matricula: "2024002", carrera: "Ing. Industrial", presente: true },
  { id: "3", nombre: "Carlos Rodríguez Martín", matricula: "2024003", carrera: "Ing. Civil", presente: false },
  { id: "4", nombre: "Ana Martínez Ruiz", matricula: "2024004", carrera: "Administración", presente: true },
  { id: "5", nombre: "Luis Hernández Torres", matricula: "2024005", carrera: "Contaduría", presente: true },
  { id: "6", nombre: "Sofia López Jiménez", matricula: "2024006", carrera: "Arquitectura", presente: false },
]

export default function AsistenciaPage() {
  const [selectedClase, setSelectedClase] = useState("")
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>(estudiantesMock)
  const [searchTerm, setSearchTerm] = useState("")
  const [showRegistro, setShowRegistro] = useState(false)

  const filteredEstudiantes = estudiantes.filter(
    (estudiante) =>
      estudiante.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || estudiante.matricula.includes(searchTerm),
  )

  const toggleAsistencia = (id: string) => {
    setEstudiantes((prev) =>
      prev.map((estudiante) => (estudiante.id === id ? { ...estudiante, presente: !estudiante.presente } : estudiante)),
    )
  }

  const marcarTodos = (presente: boolean) => {
    setEstudiantes((prev) => prev.map((estudiante) => ({ ...estudiante, presente })))
  }

  const guardarAsistencia = () => {
    // Simulate saving attendance
    alert("Asistencia guardada correctamente")
    setShowRegistro(false)
  }

  const totalPresentes = estudiantes.filter((e) => e.presente).length
  const porcentajeAsistencia = Math.round((totalPresentes / estudiantes.length) * 100)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/induccion">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="font-heading text-3xl font-bold">Control de Asistencia</h1>
            <p className="text-muted-foreground">Registre la asistencia de estudiantes a las clases de nivelación</p>
          </div>
        </div>
        <Button onClick={() => setShowRegistro(!showRegistro)}>
          <Users className="mr-2 h-4 w-4" />
          Tomar Asistencia
        </Button>
      </div>

      {/* Class Selection */}
      {showRegistro && (
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Seleccionar Clase</CardTitle>
            <CardDescription>Elija la clase para registrar asistencia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clase">Clase de Nivelación *</Label>
                <Select onValueChange={setSelectedClase} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione la clase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matematicas-09">Matemáticas Básicas - 09:00</SelectItem>
                    <SelectItem value="fisica-14">Física Fundamental - 14:00</SelectItem>
                    <SelectItem value="quimica-11">Química General - 11:00</SelectItem>
                    <SelectItem value="algebra-16">Álgebra - 16:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha</Label>
                <Input id="fecha" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Attendance Form */}
      {showRegistro && selectedClase && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="font-heading">Lista de Asistencia</CardTitle>
                <CardDescription>Marque los estudiantes presentes</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  {totalPresentes}/{estudiantes.length} presentes ({porcentajeAsistencia}%)
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search and Actions */}
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar estudiante..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => marcarTodos(true)}>
                  Marcar Todos
                </Button>
                <Button variant="outline" size="sm" onClick={() => marcarTodos(false)}>
                  Desmarcar Todos
                </Button>
              </div>
            </div>

            {/* Student List */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredEstudiantes.map((estudiante) => (
                <div
                  key={estudiante.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox checked={estudiante.presente} onCheckedChange={() => toggleAsistencia(estudiante.id)} />
                    <div>
                      <p className="font-medium">{estudiante.nombre}</p>
                      <p className="text-sm text-muted-foreground">
                        {estudiante.matricula} • {estudiante.carrera}
                      </p>
                    </div>
                  </div>
                  <Badge variant={estudiante.presente ? "default" : "secondary"}>
                    {estudiante.presente ? "Presente" : "Ausente"}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t">
              <Button onClick={guardarAsistencia} className="flex-1">
                Guardar Asistencia
              </Button>
              <Button variant="outline" onClick={() => setShowRegistro(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Attendance Records */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-heading">Registros Recientes</CardTitle>
              <CardDescription>Últimos registros de asistencia</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Matemáticas Básicas</h4>
                  <p className="text-sm text-muted-foreground">Dr. Juan Martínez • 2024-01-18 • 09:00</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800">23/25 presentes (92%)</Badge>
                <Button variant="ghost" size="sm">
                  Ver Detalles
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Física Fundamental</h4>
                  <p className="text-sm text-muted-foreground">Dra. Ana López • 2024-01-17 • 14:00</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-100 text-yellow-800">16/20 presentes (80%)</Badge>
                <Button variant="ghost" size="sm">
                  Ver Detalles
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Química General</h4>
                  <p className="text-sm text-muted-foreground">Dr. Carlos Ruiz • 2024-01-16 • 11:00</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800">21/22 presentes (95%)</Badge>
                <Button variant="ghost" size="sm">
                  Ver Detalles
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">89%</div>
              <p className="text-sm text-muted-foreground">Asistencia Promedio</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <p className="text-sm text-muted-foreground">Estudiantes Activos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <p className="text-sm text-muted-foreground">Clases Esta Semana</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-sm text-muted-foreground">Materias Activas</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
