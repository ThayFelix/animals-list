import React from 'react'
import { AnimalsView } from './animals'

export default function Home() {
  return (
    <main
      className={`min-h-screen p-24`}
    >
      <h1 className="text-4xl font-bold text-left my-8 m-4">Animals</h1>
      <AnimalsView />
    </main>
  )
}
