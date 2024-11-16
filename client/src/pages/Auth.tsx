'use client'

import { useState } from 'react'
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLogin, setIsLogin] = useState(false)

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      // Handle successful auth here (e.g., redirect to dashboard)
    } catch (error) {
      setError(`Failed to ${isLogin ? 'log in' : 'sign up'} with Google. Please try again.`)
      console.error('Google auth error:', error)
    }
  }

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      // Handle successful auth here (e.g., redirect to dashboard)
    } catch (error) {
      setError(`Failed to ${isLogin ? 'log in' : 'sign up'}. Please check your credentials and try again.`)
      console.error('Email auth error:', error)
    }
  }

  const toggleAuthMode = () => {
    setIsLogin(!isLogin)
    setError(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {isLogin ? 'Log in' : 'Sign up'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin
              ? 'Enter your credentials to log in'
              : 'Create an account or sign up with Google'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleEmailAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {isLogin ? 'Log in' : 'Sign up'}
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleAuth}
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            {isLogin ? 'Log in' : 'Sign up'} with Google
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button onClick={toggleAuthMode} className="text-blue-600 hover:underline">
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}