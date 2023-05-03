import React, { useCallback, useState } from 'react';
import { Animal, initialAnimals } from '@/lib/animals'
import { AnimalContext, contextDefaultValues } from './AnimalContext';

type TodoProviderProps = {
  children: React.ReactNode;
};

export const AnimalProvider = ({ children }: TodoProviderProps) => {
  const [animals, setAnimals] = useState<Animal[]>(contextDefaultValues.animals);

  console.log(animals)
  const addAnimal = useCallback(
    (newAnimal: Animal) => setAnimals([...animals, newAnimal]),
    [animals]
  );

  const removeAnimal = useCallback((id: number) => (
    console.log('AUI'),
    setAnimals(animals.filter((a) => a.id !== id)),
    console.log(animals)
  ), [animals])


  return (
    <AnimalContext.Provider
      value={{
        addAnimal,
        removeAnimal,
        animals
      }}
    >
      {children}
    </AnimalContext.Provider>
  );
}