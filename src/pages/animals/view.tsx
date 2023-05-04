import React, { useContext } from 'react'
import Card from '@/components/Card'
import { AnimalContext } from '@/providers/AnimalContext';

export function AnimalsView() {
  const { addAnimal, animals, removeAnimal } = useContext(AnimalContext);

  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  return (
    <div style={{ maxWidth: 800 }}>
      <ul className='list-disc'>
        {animals.map((animal) => (
          <Card key={animal.id} name={animal.name} type={animal.type} onDelete={() => removeAnimal(animal.id)} />

        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mx-4"
        onClick={() => addAnimal(randomAnimal)}
      >
        Add new animal
      </button>
    </div>
  )
}
