'use client'

import React from 'react'
import { SparklesCore } from '@/components/ui/sparkles'
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-center text-white mb-4 animate-fade-in-up">
          Welcome to BeatNest
        </h1>
        <p className="text-xl text-white mb-8 animate-fade-in-up animation-delay-200">
          Unleash your musical creativity with virtual instruments
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
          <Button asChild>
            <Link href="/play">
              Start Playing
            </Link>
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full bg-transparent text-white p-4 text-center">
        <p>Made with ❤️ by Anirban Ghosh</p>
        <a
          href="https://github.com/kekubhai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-white hover:text-gray-300 mt-2"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </footer>
    </div>
  )
}

// Sparkles component from Aceternity UI
const Sparkles = ({ id, background, minSize, maxSize, particleDensity, className, particleColor }) => {
  const [dimension, setDimension] = React.useState({ width: 0, height: 0 })
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  React.useEffect(() => {
    const particles: { x: number; y: number; size: any; color: any; speedX: number; speedY: number }[] = []

    const init = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      canvas.width = dimension.width
      canvas.height = dimension.height

      const createParticle = () => {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * (maxSize - minSize) + minSize
        const color = particleColor
        const speedX = Math.random() * 0.5 - 0.25
        const speedY = Math.random() * 0.5 - 0.25

        return { x, y, size, color, speedX, speedY }
      }

      for (let i = 0; i < particleDensity; i++) {
        particles.push(createParticle())
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle) => {
          particle.x += particle.speedX
          particle.y += particle.speedY

          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX = -particle.speedX
          }

          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY = -particle.speedY
          }

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.fill()
        })

        requestAnimationFrame(animate)
      }

      animate()
    }

    init()
  }, [dimension, maxSize, minSize, particleColor, particleDensity])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      style={{
        background: background,
      }}
      className={className}
    ></canvas>
  )
}

