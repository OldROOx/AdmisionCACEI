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
import { GraduationCap, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    institucion: "",
    cargo: "",
    motivo: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration request
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
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="font-heading text-xl font-bold mb-2">Solicitud Enviada</h2>
            <p className="text-muted-foreground mb-6">
              Su solicitud de acceso ha sido enviada correctamente. El administrador del sistema revisará su solicitud y
              se pondrá en contacto con usted.
            </p>
            <Button asChild className="w-full">
              <Link href="/login">Volver al Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary rounded-full p-3">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Solicitar Acceso</h1>
          <p className="text-muted-foreground">Complete el formulario para solicitar acceso al sistema</p>
        </div>

        {/* Registration Form */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Información Personal</CardTitle>
            <CardDescription>Proporcione sus datos para procesar su solicitud de acceso</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre(s) *</Label>
                  <Input
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidos">Apellidos *</Label>
                  <Input
                    id="apellidos"
                    placeholder="Ingrese sus apellidos"
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
                    placeholder="usuario@institucion.edu"
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

              <div className="space-y-2">
                <Label htmlFor="institucion">Institución Educativa *</Label>
                <Input
                  id="institucion"
                  placeholder="Nombre de la institución donde labora"
                  value={formData.institucion}
                  onChange={(e) => handleInputChange("institucion", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cargo">Cargo/Posición *</Label>
                <Select onValueChange={(value) => handleInputChange("cargo", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione su cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="docente">Docente</SelectItem>
                    <SelectItem value="coordinador">Coordinador Académico</SelectItem>
                    <SelectItem value="director">Director</SelectItem>
                    <SelectItem value="administrador">Administrador</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivo">Motivo de la Solicitud *</Label>
                <Textarea
                  id="motivo"
                  placeholder="Explique brevemente por qué necesita acceso al sistema"
                  value={formData.motivo}
                  onChange={(e) => handleInputChange("motivo", e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <Alert>
                <AlertDescription>
                  Su solicitud será revisada por el administrador del sistema. Recibirá una respuesta en un plazo de 2-3
                  días hábiles.
                </AlertDescription>
              </Alert>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? "Enviando solicitud..." : "Enviar Solicitud"}
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/login">Cancelar</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
