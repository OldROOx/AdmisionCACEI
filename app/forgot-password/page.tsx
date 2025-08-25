"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset request
    setTimeout(() => {
      setSuccess(true)
      setIsLoading(false)
    }, 2000)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h2 className="font-heading text-xl font-bold mb-2">Correo Enviado</h2>
            <p className="text-muted-foreground mb-6">
              Se ha enviado un enlace de recuperación de contraseña a su correo electrónico. Revise su bandeja de
              entrada y siga las instrucciones.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/login">Volver al Login</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => {
                  setSuccess(false)
                  setEmail("")
                }}
              >
                Enviar Nuevamente
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary rounded-full p-3">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Recuperar Contraseña</h1>
          <p className="text-muted-foreground">Ingrese su correo para recibir instrucciones de recuperación</p>
        </div>

        {/* Forgot Password Form */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Restablecer Contraseña</CardTitle>
            <CardDescription>
              Ingrese su dirección de correo electrónico y le enviaremos un enlace para restablecer su contraseña
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@sistema.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Alert>
                <AlertDescription>
                  Si el correo electrónico está registrado en nuestro sistema, recibirá las instrucciones de
                  recuperación.
                </AlertDescription>
              </Alert>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar Instrucciones"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Button variant="ghost" asChild>
                <Link href="/login" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Volver al Login
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
