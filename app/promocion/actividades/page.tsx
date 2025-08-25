"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Presentation as PresentationChart, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RegistrarActividadPage() {
  const [formData, setFormData] = useState({
    docente: "",
    preparatoria: "",
    proyecto: "",
    fecha: "",
    hora: "",
    duracion: "",
    numeroEstudiantes: "",
    carrerasPromovidas: "",
    tipoActividad: "",
    materialUtilizado: "",
    observaciones: "",
    evidencias: null as File | null,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true)
      setIsLoading(false)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (success) {
    return (
      <div className="p-6">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="font-heading text-xl font-bold mb-2">Actividad Registrada</h2>
            <p className="text-muted-foreground mb-6">
              La actividad de promoción ha sido registrada exitosamente en el sistema.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/promocion/actividades">Registrar Otra Actividad</Link>
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/promocion">Volver al Módulo</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/promocion">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="font-heading text-3xl font-bold">Registrar Actividad de Promoción</h1>
          <p className="text-muted-foreground">Registre una nueva actividad de promoción realizada</p>
        </div>
      </div>

      {/* Form */}
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <PresentationChart className="h-5 w-5" />
            Información de la Actividad
          </CardTitle>
          <CardDescription>Complete todos los campos requeridos para registrar la actividad</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="docente">Docente Responsable *</Label>
                <Select onValueChange={(value) => handleInputChange("docente", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione el docente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dr-martinez">Dr. Juan Martínez - Ing. Sistemas</SelectItem>
                    <SelectItem value="dra-lopez">Dra. Ana López - Ing. Industrial</SelectItem>
                    <SelectItem value="dr-ruiz">Dr. Carlos Ruiz - Ing. Civil</SelectItem>
                    <SelectItem value="dra-gonzalez">Dra. María González - Administración</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preparatoria">Preparatoria Visitada *</Label>
                <Select onValueChange={(value) => handleInputChange("preparatoria", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione la preparatoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cbtis-45">CBTIS No. 45</SelectItem>
                    <SelectItem value="cetis-12">CETIS No. 12</SelectItem>
                    <SelectItem value="conalep-3">CONALEP No. 3</SelectItem>
                    <SelectItem value="cbtis-23">CBTIS No. 23</SelectItem>
                    <SelectItem value="cecytes-1">CECYTES No. 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="proyecto">Proyecto/Carrera Presentada *</Label>
              <Input
                id="proyecto"
                placeholder="Ej: Ingeniería en Sistemas Computacionales"
                value={formData.proyecto}
                onChange={(e) => handleInputChange("proyecto", e.target.value)}
                required
              />
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha de la Actividad *</Label>
                <Input
                  id="fecha"
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => handleInputChange("fecha", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hora">Hora de Inicio *</Label>
                <Input
                  id="hora"
                  type="time"
                  value={formData.hora}
                  onChange={(e) => handleInputChange("hora", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duracion">Duración *</Label>
                <Select onValueChange={(value) => handleInputChange("duracion", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Duración" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30-min">30 minutos</SelectItem>
                    <SelectItem value="45-min">45 minutos</SelectItem>
                    <SelectItem value="1-hora">1 hora</SelectItem>
                    <SelectItem value="1.5-horas">1.5 horas</SelectItem>
                    <SelectItem value="2-horas">2 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Activity Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="numeroEstudiantes">Número de Estudiantes Alcanzados *</Label>
                <Input
                  id="numeroEstudiantes"
                  type="number"
                  placeholder="Ej: 45"
                  value={formData.numeroEstudiantes}
                  onChange={(e) => handleInputChange("numeroEstudiantes", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipoActividad">Tipo de Actividad *</Label>
                <Select onValueChange={(value) => handleInputChange("tipoActividad", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="presentacion">Presentación</SelectItem>
                    <SelectItem value="taller">Taller</SelectItem>
                    <SelectItem value="conferencia">Conferencia</SelectItem>
                    <SelectItem value="demostracion">Demostración</SelectItem>
                    <SelectItem value="feria">Feria Vocacional</SelectItem>
                    <SelectItem value="visita-guiada">Visita Guiada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="carrerasPromovidas">Carreras Promovidas</Label>
              <Textarea
                id="carrerasPromovidas"
                placeholder="Liste las carreras que se promovieron durante la actividad"
                value={formData.carrerasPromovidas}
                onChange={(e) => handleInputChange("carrerasPromovidas", e.target.value)}
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="materialUtilizado">Material Utilizado</Label>
              <Textarea
                id="materialUtilizado"
                placeholder="Describa el material didáctico, tecnológico o de apoyo utilizado"
                value={formData.materialUtilizado}
                onChange={(e) => handleInputChange("materialUtilizado", e.target.value)}
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="observaciones">Observaciones y Resultados</Label>
              <Textarea
                id="observaciones"
                placeholder="Describa los resultados obtenidos, reacciones de los estudiantes, etc."
                value={formData.observaciones}
                onChange={(e) => handleInputChange("observaciones", e.target.value)}
                rows={3}
              />
            </div>

            {/* Evidence Upload */}
            <div className="space-y-2">
              <Label htmlFor="evidencias">Evidencias (Opcional)</Label>
              <Input
                id="evidencias"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={(e) => setFormData({ ...formData, evidencias: e.target.files?.[0] || null })}
              />
              <p className="text-xs text-muted-foreground">
                Suba fotografías, listas de asistencia, o documentos relacionados con la actividad
              </p>
            </div>

            <Alert>
              <AlertDescription>
                Los campos marcados con (*) son obligatorios. Esta información será utilizada para generar reportes de
                efectividad de promoción.
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrar Actividad"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/promocion">Cancelar</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
