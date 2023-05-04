import { AnimalType } from "@/lib/animals";
import React, { useState } from "react";

type CardProps = {
  name: string,
  type: AnimalType,
  onDelete: () => void,
}

const Card = ({ name, type, onDelete }: CardProps) => {
  const [showText, setShowText] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMakeNoiseClick = () => {
    setShowText(true);
    setTimeout(() => setShowText(false), 2000); // hide text after 2 seconds
  };

  const animalNoise = {
    'pig': "Oink",
    'cow': "Mu",
    'sheep': "Beh"
  }

  return (<>
    <div className="border border-gray-300 p-4 m-4 flex justify-between"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <h2 className="text-lg font-medium mb-4">{name}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleMakeNoiseClick}
        >
          Make Noise
        </button>
        {hovered && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4 "
            onClick={onDelete}
          >
            Delete
          </button>
        )}
      </div>
      {showText && (
        <p className="text-gray-600 text-sm mt-2 self-center">
          {animalNoise[type]}
        </p>
      )}
    </div>

  </>
  );
};

export default Card;