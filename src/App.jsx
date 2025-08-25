import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import PromocionPage from "./pages/promocion/PromocionPage"
import DocentesPage from "./pages/promocion/DocentesPage"
import PreparatoriasPage from "./pages/promocion/PreparatoriasPage"
import ActividadesPage from "./pages/promocion/ActividadesPage"
import RegistrosPage from "./pages/promocion/RegistrosPage"
import InduccionPage from "./pages/induccion/InduccionPage"
import EvidenciasPage from "./pages/induccion/EvidenciasPage"
import NivelacionPage from "./pages/induccion/NivelacionPage"
import AsistenciaPage from "./pages/induccion/AsistenciaPage"
import ReportesPage from "./pages/ReportesPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="promocion" element={<PromocionPage />} />
        <Route path="promocion/docentes" element={<DocentesPage />} />
        <Route path="promocion/preparatorias" element={<PreparatoriasPage />} />
        <Route path="promocion/actividades" element={<ActividadesPage />} />
        <Route path="promocion/registros" element={<RegistrosPage />} />

        <Route path="induccion" element={<InduccionPage />} />
        <Route path="induccion/evidencias" element={<EvidenciasPage />} />
        <Route path="induccion/nivelacion" element={<NivelacionPage />} />
        <Route path="induccion/asistencia" element={<AsistenciaPage />} />

        <Route path="reportes" element={<ReportesPage />} />
      </Route>
    </Routes>
  )
}

export default App
