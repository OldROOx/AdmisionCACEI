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
import { School, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RegistrarPreparatoriaPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    clave: "",
    tipo: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
    telefono: "",
    email: "",
    director: "",
    coordinador: "",
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
            <h2 className="font-heading text-xl font-bold mb-2">Preparatoria Registrada</h2>
            <p className="text-muted-foreground mb-6">La preparatoria ha sido registrada exitosamente en el sistema.</p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/promocion/preparatorias">Registrar Otra Preparatoria</Link>
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
          <h1 className="font-heading text-3xl font-bold">Registrar Preparatoria</h1>
          <p className="text-muted-foreground">Agregue una nueva preparatoria al catálogo de instituciones</p>
        </div>
      </div>

      {/* Form */}
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <School className="h-5 w-5" />
            Información de la Preparatoria
          </CardTitle>
          <CardDescription>Complete todos los campos requeridos para registrar la preparatoria</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre de la Institución *</Label>
                <Input
                  id="nombre"
                  placeholder="Ej: CBTIS No. 45"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clave">Clave de la Institución</Label>
                <Input
                  id="clave"
                  placeholder="Ej: 14DCT0045K"
                  value={formData.clave}
                  onChange={(e) => handleInputChange("clave", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo de Institución *</Label>
              <Select onValueChange={(value) => handleInputChange("tipo", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione el tipo de institución" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cbtis">CBTIS</SelectItem>
                  <SelectItem value="cetis">CETIS</SelectItem>
                  <SelectItem value="conalep">CONALEP</SelectItem>
                  <SelectItem value="cecytes">CECYTES</SelectItem>
                  <SelectItem value="preparatoria-estatal">Preparatoria Estatal</SelectItem>
                  <SelectItem value="preparatoria-federal">Preparatoria Federal</SelectItem>
                  <SelectItem value="preparatoria-privada">Preparatoria Privada</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Información de Ubicación</h3>

              <div className="space-y-2">
                <Label htmlFor="direccion">Dirección *</Label>
                <Input
                  id="direccion"
                  placeholder="Calle, número, colonia"
                  value={formData.direccion}
                  onChange={(e) => handleInputChange("direccion", e.target.value)}
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ciudad">Ciudad *</Label>
                  <Input
                    id="ciudad"
                    placeholder="Ciudad"
                    value={formData.ciudad}
                    onChange={(e) => handleInputChange("ciudad", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado *</Label>
                  <Select onValueChange={(value) => handleInputChange("estado", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione el estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aguascalientes">Aguascalientes</SelectItem>
                      <SelectItem value="baja-california">Baja California</SelectItem>
                      <SelectItem value="baja-california-sur">Baja California Sur</SelectItem>
                      <SelectItem value="campeche">Campeche</SelectItem>
                      <SelectItem value="chiapas">Chiapas</SelectItem>
                      <SelectItem value="chihuahua">Chihuahua</SelectItem>
                      <SelectItem value="coahuila">Coahuila</SelectItem>
                      <SelectItem value="colima">Colima</SelectItem>
                      <SelectItem value="durango">Durango</SelectItem>
                      <SelectItem value="guanajuato">Guanajuato</SelectItem>
                      <SelectItem value="guerrero">Guerrero</SelectItem>
                      <SelectItem value="hidalgo">Hidalgo</SelectItem>
                      <SelectItem value="jalisco">Jalisco</SelectItem>
                      <SelectItem value="mexico">México</SelectItem>
                      <SelectItem value="michoacan">Michoacán</SelectItem>
                      <SelectItem value="morelos">Morelos</SelectItem>
                      <SelectItem value="nayarit">Nayarit</SelectItem>
                      <SelectItem value="nuevo-leon">Nuevo León</SelectItem>
                      <SelectItem value="oaxaca">Oaxaca</SelectItem>
                      <SelectItem value="puebla">Puebla</SelectItem>
                      <SelectItem value="queretaro">Querétaro</SelectItem>
                      <SelectItem value="quintana-roo">Quintana Roo</SelectItem>
                      <SelectItem value="san-luis-potosi">San Luis Potosí</SelectItem>
                      <SelectItem value="sinaloa">Sinaloa</SelectItem>
                      <SelectItem value="sonora">Sonora</SelectItem>
                      <SelectItem value="tabasco">Tabasco</SelectItem>
                      <SelectItem value="tamaulipas">Tamaulipas</SelectItem>
                      <SelectItem value="tlaxcala">Tlaxcala</SelectItem>
                      <SelectItem value="veracruz">Veracruz</SelectItem>
                      <SelectItem value="yucatan">Yucatán</SelectItem>
                      <SelectItem value="zacatecas">Zacatecas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="codigoPostal">Código Postal</Label>
                  <Input
                    id="codigoPostal"
                    placeholder="12345"
                    value={formData.codigoPostal}
                    onChange={(e) => handleInputChange("codigoPostal", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Información de Contacto</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    placeholder="(555) 123-4567"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contacto@preparatoria.edu.mx"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="director">Director(a)</Label>
                  <Input
                    id="director"
                    placeholder="Nombre del director"
                    value={formData.director}
                    onChange={(e) => handleInputChange("director", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coordinador">Coordinador de Vinculación</Label>
                  <Input
                    id="coordinador"
                    placeholder="Nombre del coordinador"
                    value={formData.coordinador}
                    onChange={(e) => handleInputChange("coordinador", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notas">Notas Adicionales</Label>
              <Textarea
                id="notas"
                placeholder="Información adicional sobre la preparatoria"
                value={formData.notas}
                onChange={(e) => handleInputChange("notas", e.target.value)}
                rows={3}
              />
            </div>

            <Alert>
              <AlertDescription>
                Los campos marcados con (*) son obligatorios. Esta información será utilizada para programar visitas de
                promoción.
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrar Preparatoria"}
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
