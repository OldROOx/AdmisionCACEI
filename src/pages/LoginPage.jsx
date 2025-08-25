// src/pages/LoginPage.jsx
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        // Simulate authentication
        setTimeout(() => {
            if (email === "admin@sistema.edu" && password === "admin123") {
                navigate("/dashboard")
            } else {
                setError("Credenciales incorrectas. Intente nuevamente.")
            }
            setIsLoading(false)
        }, 1000)
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
                    <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Sistema Educativo</h1>
                    <p className="text-muted-foreground">Promoción e Inducción Educativa</p>
                </div>

                {/* Login Form */}
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="font-heading text-xl">Iniciar Sesión</CardTitle>
                        <CardDescription>Ingrese sus credenciales para acceder al sistema</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <Alert variant="destructive">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

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

                            <div className="space-y-2">
                                <Label htmlFor="password">Contraseña</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Ingrese su contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-muted-foreground" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <input id="remember" type="checkbox" className="rounded border-border text-primary focus:ring-ring" />
                                    <Label htmlFor="remember" className="text-sm">
                                        Recordarme
                                    </Label>
                                </div>
                                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                                    ¿Olvidó su contraseña?
                                </Link>
                            </div>

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-muted-foreground">
                                ¿No tiene cuenta?{" "}
                                <Link to="/register" className="text-primary hover:underline">
                                    Solicitar acceso
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Demo Credentials */}
                <Card className="mt-4 bg-muted/50">
                    <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground text-center mb-2">Credenciales de demostración:</p>
                        <div className="text-xs text-center space-y-1">
                            <p>Email: admin@sistema.edu</p>
                            <p>Contraseña: admin123</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

// src/pages/RegisterPage.jsx - You'll need to create this
// src/pages/ForgotPasswordPage.jsx - You'll need to create this
// src/pages/Dashboard.jsx - You'll need to create this
// And all the other pages referenced in App.jsx