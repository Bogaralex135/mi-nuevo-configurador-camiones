import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Camiones Europeos - Configuración comercial de camiones',
  description:
    'Accede al sistema de gestión de configuración comercial de camiones.',

  // Configuración para plataformas estándar (WhatsApp, Slack, LinkedIn, Facebook)
  openGraph: {
    title: 'Camiones Europeos - Login',
    description:
      'Plataforma avanzada para la configuración comercial de camiones.',
    url: 'https://tu-demo-camiones.vercel.app', // Reemplaza con tu URL real del demo
    siteName: 'Camiones Europeos',
    images: [
      {
        url: 'https://tu-demo-camiones.vercel.app/og-image.jpg', // La ruta de la imagen del camión de fondo
        width: 1200,
        height: 630,
        alt: 'Vista previa del Sistema de Camiones Europeos',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },

  // Configuración específica para X / Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Camiones Europeos - Logística Inteligente',
    description: 'Accede al sistema de gestión de flotas y rutas europeas.',
    images: ['https://tu-demo-camiones.vercel.app/og-image.jpg'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className={cn('h-full', 'antialiased', inter.variable)}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}
