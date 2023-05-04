import React, { useCallback, useState } from 'react';
import { Animal, initialAnimals } from '@/lib/animals'
import { AnimalContext, contextDefaultValues } from './AnimalContext';

type TodoProviderProps = {
  children: React.ReactNode;
};

export const AnimalProvider = ({ children }: TodoProviderProps) => {
  const [animals, setAnimals] = useState<Animal[]>(contextDefaultValues.animals);

  const addAnimal = useCallback(
    (newAnimal: Animal) => setAnimals([...animals, newAnimal]),
    [animals]
  );

  const removeAnimal = useCallback((id: number) => (
    setAnimals(animals.filter((a) => a.id !== id))
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