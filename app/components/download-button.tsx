'use client'

import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export function DownloadButton() {
  return (
    <Button 
      className="bg-white text-[#5DDC9A] hover:bg-green-100 text-lg px-8 py-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      onClick={() => window.location.href = '/app-release.apk'}
    >
      <Download className="mr-2 h-6 w-6" /> Descargar APK
    </Button>
  )
}

