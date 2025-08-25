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
import { Upload, FileText, ArrowLeft, Eye, Download, Trash2 } from "lucide-react"
import Link from "next/link"

interface Evidencia {
  id: string
  nombre: string
  tipo: string
  fecha: string
  estudiante: string
  estado: "pendiente" | "aprobada" | "rechazada"
  archivo: string
}

const evidenciasMock: Evidencia[] = [
  {
    id: "1",
    nombre: "Asistencia Curso Inducción - Semana 1",
    tipo: "asistencia",
    fecha: "2024-01-15",
    estudiante: "Juan Pérez",
    estado: "aprobada",
    archivo: "asistencia_semana1.pdf",
  },
  {
    id: "2",
    nombre: "Evaluación Diagnóstica Matemáticas",
    tipo: "evaluacion",
    fecha: "2024-01-14",
    estudiante: "María González",
    estado: "pendiente",
    archivo: "eval_matematicas.pdf",
  },
  {
    id: "3",
    nombre: "Certificado Curso en Línea",
    tipo: "certificado",
    fecha: "2024-01-13",
    estudiante: "Carlos López",
    estado: "aprobada",
    archivo: "certificado_curso.pdf",
  },
]

export default function EvidenciasPage() {
  const [showForm, setShowForm] = useState(false)
  const [evidencias, setEvidencias] = useState<Evidencia[]>(evidenciasMock)
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    estudiante: "",
    descripcion: "",
    archivo: null as File | null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    const newEvidencia: Evidencia = {
      id: Date.now().toString(),
      nombre: formData.nombre,
      tipo: formData.tipo,
      fecha: new Date().toISOString().split("T")[0],
      estudiante: formData.estudiante,
      estado: "pendiente",
      archivo: formData.archivo?.name || "",
    }
    setEvidencias([newEvidencia, ...evidencias])
    setFormData({ nombre: "", tipo: "", estudiante: "", descripcion: "", archivo: null })
    setShowForm(false)
  }

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "aprobada":
        return <Badge className="bg-green-100 text-green-800">Aprobada</Badge>
      case "rechazada":
        return <Badge variant="destructive">Rechazada</Badge>
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
            <Link href="/induccion">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="font-heading text-3xl font-bold">Evidencias del Curso</h1>
            <p className="text-muted-foreground">Gestione las evidencias del curso de inducción</p>
          </div>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Upload className="mr-2 h-4 w-4" />
          Subir Evidencia
        </Button>
      </div>

      {/* Upload Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Subir Nueva Evidencia</CardTitle>
            <CardDescription>Complete la información para registrar una nueva evidencia</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre de la Evidencia *</Label>
                  <Input
                    id="nombre"
                    placeholder="Ej: Asistencia Semana 1"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de Evidencia *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, tipo: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione el tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asistencia">Lista de Asistencia</SelectItem>
                      <SelectItem value="evaluacion">Evaluación</SelectItem>
                      <SelectItem value="certificado">Certificado</SelectItem>
                      <SelectItem value="tarea">Tarea/Actividad</SelectItem>
                      <SelectItem value="foto">Fotografía</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="estudiante">Estudiante/Grupo *</Label>
                <Input
                  id="estudiante"
                  placeholder="Nombre del estudiante o grupo"
                  value={formData.estudiante}
                  onChange={(e) => setFormData({ ...formData, estudiante: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="archivo">Archivo *</Label>
                <Input
                  id="archivo"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={(e) => setFormData({ ...formData, archivo: e.target.files?.[0] || null })}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Formatos permitidos: PDF, JPG, PNG, DOC, DOCX. Tamaño máximo: 10MB
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea
                  id="descripcion"
                  placeholder="Descripción adicional de la evidencia"
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit">Subir Evidencia</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Evidence List */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Evidencias Registradas</CardTitle>
          <CardDescription>Lista de todas las evidencias del curso de inducción</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {evidencias.map((evidencia) => (
              <div key={evidencia.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{evidencia.nombre}</h4>
                    <p className="text-sm text-muted-foreground">
                      {evidencia.estudiante} • {evidencia.fecha} • {evidencia.archivo}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getEstadoBadge(evidencia.estado)}
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {evidencias.filter((e) => e.estado === "aprobada").length}
              </div>
              <p className="text-sm text-muted-foreground">Evidencias Aprobadas</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {evidencias.filter((e) => e.estado === "pendiente").length}
              </div>
              <p className="text-sm text-muted-foreground">Pendientes de Revisión</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {evidencias.filter((e) => e.estado === "rechazada").length}
              </div>
              <p className="text-sm text-muted-foreground">Evidencias Rechazadas</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
