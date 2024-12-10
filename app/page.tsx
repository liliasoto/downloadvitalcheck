import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Clock, Bell, User } from 'lucide-react'
import { DownloadButton } from './components/download-button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5DDC9A] to-green-100">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">VitalCheck</h1>
          <p className="text-xl text-green-800 mb-8">Monitorea tus signos vitales con facilidad</p>
          <DownloadButton />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/screenshot.png"
              width={300}
              height={600}
              alt="VitalCheck App Screenshot"
              className="rounded-3xl shadow-2xl mx-auto"
            />
          </div>
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="flex items-center p-6">
                <Heart className="h-12 w-12 text-[#5DDC9A] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Monitoreo de Signos Vitales</h3>
                  <p className="text-gray-600">Mide tus niveles de oxígeno en sangre y pulso cardíaco con precisión.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="flex items-center p-6">
                <Clock className="h-12 w-12 text-[#5DDC9A] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Historial de Mediciones</h3>
                  <p className="text-gray-600">Mantén un registro detallado de tus mediciones anteriores.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="flex items-center p-6">
                <Bell className="h-12 w-12 text-[#5DDC9A] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alarmas Personalizadas</h3>
                  <p className="text-gray-600">Configura alertas según tus necesidades de salud específicas.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="flex items-center p-6">
                <User className="h-12 w-12 text-[#5DDC9A] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gestión de Perfil</h3>
                  <p className="text-gray-600">Personaliza tu perfil de usuario para un seguimiento más preciso.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">¡Descarga VitalCheck ahora y cuida tu salud!</h2>
          <DownloadButton />
        </div>
      </main>
    </div>
  )
}

