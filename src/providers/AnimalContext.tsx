import { createContext } from 'react';
import { Animal, initialAnimals } from '@/lib/animals'

interface AnimalsContextProps {
  addAnimal: (newAnimal: Animal) => void;
  removeAnimal: (id: number) => void;
  animals: Animal[];
}

export const contextDefaultValues: AnimalsContextProps = {
  addAnimal: () => { },
  removeAnimal: () => { },
  animals: initialAnimals,
}

export const AnimalContext = createContext<AnimalsContextProps>(
  contextDefaultValues
);


