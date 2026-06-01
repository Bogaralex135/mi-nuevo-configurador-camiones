'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginCard() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ocurrió un error inesperado.')
      }

      // Redirigir al panel principal del sistema si las credenciales son correctas
      router.push('/dashboard')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Inicia sesión</CardTitle>

        <CardAction>
          <Button variant='link'>Registrarse</Button>
        </CardAction>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          {error && (
            <div className='mb-4 rounded bg-red-100 p-3 text-sm text-red-700'>
              {error}
            </div>
          )}
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>

              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                id='email'
                type='email'
                placeholder='m@ejemplo.com'
                required
              />
            </div>

            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Contraseña</Label>

                <a
                  href='#'
                  className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>
                  ¿Olvidaste tu constraseña?
                </a>
              </div>

              <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                id='password'
                type='password'
                required
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className='flex-col gap-2'>
          <Button type='submit' className='w-full'>
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Validando credenciales...
              </>
            ) : (
              'Ingresar al Sistema'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
