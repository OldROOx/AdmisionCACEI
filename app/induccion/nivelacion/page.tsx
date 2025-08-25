"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, Plus, Calendar, Clock, Users, MapPin } from "lucide-react"
import Link from "next/link"

interface ClaseNivelacion {
  id: string
  materia: string
  fecha: string
  hora: string
  duracion: string
  instructor: string
  aula: string
  capacidad: number
  inscritos: number
  estado: "programada" | "en-curso" | "completada" | "cancelada"
}

const clasesMock: ClaseNivelacion[] = [
  {
    id: "1",
    materia: "Matemáticas Básicas",
    fecha: "2024-01-20",
    hora: "09:00",
    duracion: "2 horas",
    instructor: "Dr. Juan Martínez",
    aula: "Aula 101",
    capacidad: 30,
    inscritos: 25,
    estado: "programada",
  },
  {
    id: "2",
    materia: "Física Fundamental",
    fecha: "2024-01-18",
    hora: "14:00",
    duracion: "1.5 horas",
    instructor: "Dra. Ana López",
    aula: "Lab. Física",
    capacidad: 20,
    inscritos: 18,
    estado: "completada",
  },
  {
    id: "3",
    materia: "Química General",
    fecha: "2024-01-22",
    hora: "11:00",
    duracion: "2 horas",
    instructor: "Dr. Carlos Ruiz",
    aula: "Lab. Química",
    capacidad: 25,
    inscritos: 22,
    estado: "programada",
  },
]

export default function NivelacionPage() {
  const [showForm, setShowForm] = useState(false)
  const [clases, setClases] = useState<ClaseNivelacion[]>(clasesMock)
  const [formData, setFormData] = useState({
    materia: "",
    fecha: "",
    hora: "",
    duracion: "",
    instructor: "",
    aula: "",
    capacidad: "",
    descripcion: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newClase: ClaseNivelacion = {
      id: Date.now().toString(),
      materia: formData.materia,
      fecha: formData.fecha,
      hora: formData.hora,
      duracion: formData.duracion,
      instructor: formData.instructor,
      aula: formData.aula,
      capacidad: Number.parseInt(formData.capacidad),
      inscritos: 0,
      estado: "programada",
    }
    setClases([newClase, ...clases])
    setFormData({
      materia: "",
      fecha: "",
      hora: "",
      duracion: "",
      instructor: "",
      aula: "",
      capacidad: "",
      descripcion: "",
    })
    setShowForm(false)
  }

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "completada":
        return <Badge className="bg-green-100 text-green-800">Completada</Badge>
      case "en-curso":
        return <Badge className="bg-blue-100 text-blue-800">En Curso</Badge>
      case "cancelada":
        return <Badge variant="destructive">Cancelada</Badge>
      default:
        return <Badge variant="secondary">Programada</Badge>
    }
  }

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
            <h1 className="font-heading text-3xl font-bold">Clases de Nivelación</h1>
            <p className="text-muted-foreground">Administre las clases de nivelación para estudiantes</p>
          </div>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Programar Clase
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Programar Nueva Clase</CardTitle>
            <CardDescription>Complete la información para programar una clase de nivelación</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="materia">Materia *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, materia: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione la materia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matematicas">Matemáticas Básicas</SelectItem>
                      <SelectItem value="fisica">Física Fundamental</SelectItem>
                      <SelectItem value="quimica">Química General</SelectItem>
                      <SelectItem value="algebra">Álgebra</SelectItem>
                      <SelectItem value="calculo">Cálculo Diferencial</SelectItem>
                      <SelectItem value="geometria">Geometría Analítica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructor">Instructor *</Label>
                  <Input
                    id="instructor"
                    placeholder="Nombre del instructor"
                    value={formData.instructor}
                    onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fecha">Fecha *</Label>
                  <Input
                    id="fecha"
                    type="date"
                    value={formData.fecha}
                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hora">Hora *</Label>
                  <Input
                    id="hora"
                    type="time"
                    value={formData.hora}
                    onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duracion">Duración *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, duracion: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Duración" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1 hora">1 hora</SelectItem>
                      <SelectItem value="1.5 horas">1.5 horas</SelectItem>
                      <SelectItem value="2 horas">2 horas</SelectItem>
                      <SelectItem value="2.5 horas">2.5 horas</SelectItem>
                      <SelectItem value="3 horas">3 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="aula">Aula/Laboratorio *</Label>
                  <Input
                    id="aula"
                    placeholder="Ej: Aula 101, Lab. Física"
                    value={formData.aula}
                    onChange={(e) => setFormData({ ...formData, aula: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacidad">Capacidad *</Label>
                  <Input
                    id="capacidad"
                    type="number"
                    placeholder="Número máximo de estudiantes"
                    value={formData.capacidad}
                    onChange={(e) => setFormData({ ...formData, capacidad: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea
                  id="descripcion"
                  placeholder="Descripción adicional de la clase"
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit">Programar Clase</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Classes List */}
      <div className="grid gap-4">
        {clases.map((clase) => (
          <Card key={clase.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-lg font-semibold">{clase.materia}</h3>
                    {getEstadoBadge(clase.estado)}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {clase.fecha}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {clase.hora} ({clase.duracion})
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {clase.aula}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {clase.inscritos}/{clase.capacidad} estudiantes
                    </div>
                  </div>
                  <p className="text-sm">
                    <strong>Instructor:</strong> {clase.instructor}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {clases.filter((c) => c.estado === "programada").length}
              </div>
              <p className="text-sm text-muted-foreground">Programadas</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {clases.filter((c) => c.estado === "completada").length}
              </div>
              <p className="text-sm text-muted-foreground">Completadas</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {clases.reduce((acc, c) => acc + c.inscritos, 0)}
              </div>
              <p className="text-sm text-muted-foreground">Total Inscritos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(
                  (clases.reduce((acc, c) => acc + c.inscritos, 0) / clases.reduce((acc, c) => acc + c.capacidad, 0)) *
                    100,
                )}
                %
              </div>
              <p className="text-sm text-muted-foreground">Ocupación</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
