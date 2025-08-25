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
import { UserPlus, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RegistrarDocentePage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    cedula: "",
    especialidad: "",
    departamento: "",
    experiencia: "",
    notas: "",
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
            <h2 className="font-heading text-xl font-bold mb-2">Docente Registrado</h2>
            <p className="text-muted-foreground mb-6">El docente ha sido registrado exitosamente en el sistema.</p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/promocion/docentes">Registrar Otro Docente</Link>
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
          <h1 className="font-heading text-3xl font-bold">Registrar Docente</h1>
          <p className="text-muted-foreground">Registre un nuevo docente para actividades de promoción</p>
        </div>
      </div>

      {/* Form */}
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Información del Docente
          </CardTitle>
          <CardDescription>Complete todos los campos requeridos para registrar al docente</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre(s) *</Label>
                <Input
                  id="nombre"
                  placeholder="Ingrese el nombre"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellidos">Apellidos *</Label>
                <Input
                  id="apellidos"
                  placeholder="Ingrese los apellidos"
                  value={formData.apellidos}
                  onChange={(e) => handleInputChange("apellidos", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="docente@institucion.edu"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  placeholder="(555) 123-4567"
                  value={formData.telefono}
                  onChange={(e) => handleInputChange("telefono", e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cedula">Cédula Profesional</Label>
                <Input
                  id="cedula"
                  placeholder="Número de cédula"
                  value={formData.cedula}
                  onChange={(e) => handleInputChange("cedula", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="especialidad">Especialidad *</Label>
                <Select onValueChange={(value) => handleInputChange("especialidad", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione la especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ingenieria-sistemas">Ingeniería en Sistemas</SelectItem>
                    <SelectItem value="ingenieria-industrial">Ingeniería Industrial</SelectItem>
                    <SelectItem value="ingenieria-civil">Ingeniería Civil</SelectItem>
                    <SelectItem value="administracion">Administración</SelectItem>
                    <SelectItem value="contaduria">Contaduría</SelectItem>
                    <SelectItem value="arquitectura">Arquitectura</SelectItem>
                    <SelectItem value="otra">Otra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="departamento">Departamento *</Label>
                <Select onValueChange={(value) => handleInputChange("departamento", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione el departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ingenieria">Ingeniería</SelectItem>
                    <SelectItem value="ciencias-economicas">Ciencias Económico Administrativas</SelectItem>
                    <SelectItem value="arquitectura">Arquitectura</SelectItem>
                    <SelectItem value="ciencias-basicas">Ciencias Básicas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experiencia">Años de Experiencia</Label>
                <Input
                  id="experiencia"
                  type="number"
                  placeholder="Años de experiencia docente"
                  value={formData.experiencia}
                  onChange={(e) => handleInputChange("experiencia", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notas">Notas Adicionales</Label>
              <Textarea
                id="notas"
                placeholder="Información adicional sobre el docente"
                value={formData.notas}
                onChange={(e) => handleInputChange("notas", e.target.value)}
                rows={3}
              />
            </div>

            <Alert>
              <AlertDescription>
                Los campos marcados con (*) son obligatorios. La información será utilizada para asignar actividades de
                promoción.
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrar Docente"}
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
