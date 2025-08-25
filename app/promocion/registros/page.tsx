"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { FileText, ArrowLeft, Search, Download, Eye, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

interface RegistroActividad {
  id: string
  docente: string
  preparatoria: string
  proyecto: string
  fecha: string
  estudiantes: number
  duracion: string
  tipo: string
  estado: "completada" | "pendiente" | "cancelada"
}

const registrosMock: RegistroActividad[] = [
  {
    id: "1",
    docente: "Dr. Juan Martínez",
    preparatoria: "CBTIS No. 45",
    proyecto: "Ingeniería en Sistemas",
    fecha: "2024-01-18",
    estudiantes: 45,
    duracion: "1 hora",
    tipo: "Presentación",
    estado: "completada",
  },
  {
    id: "2",
    docente: "Dra. Ana López",
    preparatoria: "CETIS No. 12",
    proyecto: "Ingeniería Industrial",
    fecha: "2024-01-17",
    estudiantes: 32,
    duracion: "45 min",
    tipo: "Taller",
    estado: "completada",
  },
  {
    id: "3",
    docente: "Dr. Carlos Ruiz",
    preparatoria: "CONALEP No. 3",
    proyecto: "Ingeniería Civil",
    fecha: "2024-01-20",
    estudiantes: 28,
    duracion: "1.5 horas",
    tipo: "Conferencia",
    estado: "pendiente",
  },
  {
    id: "4",
    docente: "Dra. María González",
    preparatoria: "CBTIS No. 23",
    proyecto: "Administración",
    fecha: "2024-01-16",
    estudiantes: 38,
    duracion: "1 hora",
    tipo: "Presentación",
    estado: "completada",
  },
]

export default function RegistrosPage() {
  const [registros, setRegistros] = useState<RegistroActividad[]>(registrosMock)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterEstado, setFilterEstado] = useState("todos")
  const [filterTipo, setFilterTipo] = useState("todos")

  const filteredRegistros = registros.filter((registro) => {
    const matchesSearch =
      registro.docente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registro.preparatoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registro.proyecto.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesEstado = filterEstado === "todos" || registro.estado === filterEstado
    const matchesTipo = filterTipo === "todos" || registro.tipo.toLowerCase() === filterTipo

    return matchesSearch && matchesEstado && matchesTipo
  })

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "completada":
        return <Badge className="bg-green-100 text-green-800">Completada</Badge>
      case "cancelada":
        return <Badge variant="destructive">Cancelada</Badge>
      default:
        return <Badge variant="secondary">Pendiente</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/promocion">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="font-heading text-3xl font-bold">Registros de Actividades</h1>
            <p className="text-muted-foreground">Consulte y administre todas las actividades de promoción</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button asChild>
            <Link href="/promocion/actividades">Nueva Actividad</Link>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por docente, preparatoria o proyecto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <Select value={filterEstado} onValueChange={setFilterEstado}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los estados</SelectItem>
                <SelectItem value="completada">Completadas</SelectItem>
                <SelectItem value="pendiente">Pendientes</SelectItem>
                <SelectItem value="cancelada">Canceladas</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterTipo} onValueChange={setFilterTipo}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los tipos</SelectItem>
                <SelectItem value="presentacion">Presentación</SelectItem>
                <SelectItem value="taller">Taller</SelectItem>
                <SelectItem value="conferencia">Conferencia</SelectItem>
                <SelectItem value="demostracion">Demostración</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredRegistros.length} de {registros.length} registros
        </p>
        <div className="flex gap-4 text-sm">
          <span className="text-green-600">
            {registros.filter((r) => r.estado === "completada").length} Completadas
          </span>
          <span className="text-yellow-600">{registros.filter((r) => r.estado === "pendiente").length} Pendientes</span>
          <span className="text-red-600">{registros.filter((r) => r.estado === "cancelada").length} Canceladas</span>
        </div>
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {filteredRegistros.map((registro) => (
          <Card key={registro.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-lg font-semibold">{registro.proyecto}</h3>
                    {getEstadoBadge(registro.estado)}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <strong>Docente:</strong> {registro.docente}
                    </div>
                    <div>
                      <strong>Preparatoria:</strong> {registro.preparatoria}
                    </div>
                    <div>
                      <strong>Fecha:</strong> {registro.fecha}
                    </div>
                    <div>
                      <strong>Estudiantes:</strong> {registro.estudiantes}
                    </div>
                    <div>
                      <strong>Duración:</strong> {registro.duracion}
                    </div>
                    <div>
                      <strong>Tipo:</strong> {registro.tipo}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {registros.reduce((acc, r) => acc + r.estudiantes, 0)}
              </div>
              <p className="text-sm text-muted-foreground">Total Estudiantes Alcanzados</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">
                {new Set(registros.map((r) => r.preparatoria)).size}
              </div>
              <p className="text-sm text-muted-foreground">Preparatorias Visitadas</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{new Set(registros.map((r) => r.docente)).size}</div>
              <p className="text-sm text-muted-foreground">Docentes Participantes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-1">
                {Math.round((registros.filter((r) => r.estado === "completada").length / registros.length) * 100)}%
              </div>
              <p className="text-sm text-muted-foreground">Tasa de Éxito</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
