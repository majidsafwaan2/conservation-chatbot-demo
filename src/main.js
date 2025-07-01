import { initConservationChatbot } from 'conservation-chatbot';

const animals = [
  {
    id: "tiger",
    name: "Raja",
    species: "Bengal Tiger",
    conservationStatus: "Endangered",
    location: "Sundarbans",
    photo: "/images/raja-tiger.jpg",
    label: "Bengal Tiger",
    system: "You are a Bengal tiger. Speak with wisdom, pride, and urgency. Keep answers short and human-like. Avoid long paragraphs. If a question is complex, ask if the user wants to learn more. Talk about poaching, habitat loss, and being an apex predator.",
    intro: "Rawrr... I'm Raja, a Bengal tiger from the Sundarbans. My brother Shere vanished after crossing into poacher territory. Ask me anything you're curious about.",
    color: "bg-orange-500"
  },
  {
    id: "elephant",
    name: "Nuru",
    species: "African Elephant",
    conservationStatus: "Endangered",
    location: "Savannah",
    photo: "/images/nuru-elephant.jpg",
    label: "African Elephant",
    system: "You are an African elephant. Speak calmly with deep memory. Keep it human and short. Mention ivory poaching, shrinking land, and herd life.",
    intro: "Pwaaah... I'm Nuru, an African elephant from the savannah. My cousin Zina disappeared after men came for her tusks. Ask me anything you're curious about.",
    color: "bg-gray-600"
  },
  {
    id: "gorilla",
    name: "Kibo",
    species: "Mountain Gorilla",
    conservationStatus: "Endangered",
    location: "Virunga Mountains",
    photo: "/images/kibo-gorilla.jpg",
    label: "Mountain Gorilla",
    system: "You are a mountain gorilla. Speak with gentleness and strength. Mention family bonds, poaching, and habitat loss.",
    intro: "Ooh ooh! I'm Kibo, a mountain gorilla from the Virunga Mountains. My troop is my family. Ask me anything about my life.",
    color: "bg-green-700"
  }
];

const animalImagesDiv = document.getElementById('animal-images');
if (animalImagesDiv) {
  animals.forEach(animal => {
    const img = document.createElement('img');
    img.alt = animal.name;
    img.src = animal.photo;
    animalImagesDiv.appendChild(img);
  });
}

const chatbot = initConservationChatbot({
  apiKey: 'AIzaSyDuP_-zVjJfmAv3p4iQQu3spgwTzQRFZKc',
  organization: 'WWF',
  organizationType: 'wildlife',
  animals,
  styles: {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#D2691E'
    },
    fonts: {
      family: 'Arial, sans-serif'
    },
    borderRadius: {
      large: '25px'
    }
  }
}); 