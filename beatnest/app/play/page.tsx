'use client'

import React, { useState, useEffect } from 'react'
import * as Tone from 'tone'
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

// Piano Component
const Piano = () => {
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

  const playNote = (note: string) => {
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease(`${note}4`, '8n')
  }

  return (
    <div className="flex justify-center space-x-2">
      {notes.map((note) => (
        <Button
          key={note}
          className="w-12 h-32 bg-white text-black border border-black hover:bg-gray-200"
          onClick={() => playNote(note)}
        >
          {note}
        </Button>
      ))}
    </div>
  )
}

// Guitar Component
const Guitar = () => {
  const strings = ['E', 'A', 'D', 'G', 'B', 'E']

  const playString = (note: string) => {
    const synth = new Tone.PluckSynth().toDestination()
    synth.triggerAttack(note)
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      {strings.map((string, index) => (
        <div
          key={index}
          className="w-64 h-1 bg-amber-900 hover:bg-amber-700 cursor-pointer"
          onClick={() => playString(`${string}${3 + Math.floor(index / 2)}`)}
        />
      ))}
    </div>
  )
}

// Drums Component
const Drums = () => {
  const drums = [
    { name: 'Kick', sound: 'C2' },
    { name: 'Snare', sound: 'E2' },
    { name: 'Hi-hat', sound: 'G2' },
    { name: 'Tom', sound: 'B2' },
  ]

  const playDrum = (sound: string) => {
    const synth = new Tone.MembraneSynth().toDestination()
    synth.triggerAttackRelease(sound, '8n')
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {drums.map((drum) => (
        <Button
          key={drum.name}
          className="w-32 h-32 bg-gray-800 text-white rounded-full hover:bg-gray-700"
          onClick={() => playDrum(drum.sound)}
        >
          {drum.name}
        </Button>
      ))}
    </div>
  )
}

// Main App Component
export default function BeatNest() {
  const [instrument, setInstrument] = useState('piano')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Tone.start().then(() => setIsLoaded(true))
  }, [])

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-3xl font-bold text-center">BeatNest</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-8 space-y-8">
        <div className="space-x-4">
          <Button onClick={() => setInstrument('piano')} variant={instrument === 'piano' ? 'default' : 'outline'}>Piano</Button>
          <Button onClick={() => setInstrument('guitar')} variant={instrument === 'guitar' ? 'default' : 'outline'}>Guitar</Button>
          <Button onClick={() => setInstrument('drums')} variant={instrument === 'drums' ? 'default' : 'outline'}>Drums</Button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          {instrument === 'piano' && <Piano />}
          {instrument === 'guitar' && <Guitar />}
          {instrument === 'drums' && <Drums />}
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground p-4 text-center">
        <p>Made with ❤️ by Anirban Ghosh</p>
        <a href="https://github.com/kekubhai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-primary-foreground hover:text-primary-foreground/80">
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </footer>
    </div>
  )
}