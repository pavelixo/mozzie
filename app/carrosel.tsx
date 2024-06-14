"use client";

import React, { useState, useEffect } from 'react';

const images: string[] = [
  "https://cdn.discordapp.com/attachments/1217881201956884580/1251282276290007110/image.png?ex=666e02ee&is=666cb16e&hm=749c92ef7ade8ea8ca992d0da98dddcc1a76e77c4144d259e8b54274b1bef854&",
  "https://cdn.discordapp.com/attachments/1217881201956884580/1251238230569910404/image.png?ex=666dd9e9&is=666c8869&hm=e6bc8c9b6c37b6304c30320d8784cf31f3f89a07e5c9145d0d73a17753b5282a&",
  "https://cdn.discordapp.com/attachments/1217881201956884580/1251237144198910064/image.png?ex=666dd8e6&is=666c8766&hm=ba4f16a4f68633afd070224b9c8512edb114f669cdd34353c070273210ddc439&",
  "https://cdn.discordapp.com/attachments/1217881201956884580/1251237099550801971/image.png?ex=666dd8db&is=666c875b&hm=e44cbf59bb0013af1c58aede39aebcca5615e59dded74eb47d306fee4eb60251&",
  "https://cdn.discordapp.com/attachments/1217881201956884580/1251236292075978822/image.png?ex=666dd81a&is=666c869a&hm=13b8eeef48007962acdc8e83de509253abff15aca7aa26e446385da5248ee3c5&",
  "https://cdn.discordapp.com/attachments/1217881201956884580/1251236182717632542/image.png?ex=666dd800&is=666c8680&hm=217e8fe63bd3889c09e3bc00e46129f926eb2001fd6ef431218d7141dcd17ea5&",
  "https://cdn.discordapp.com/attachments/1217887732806717561/1251237740780195941/image.png?ex=666dd974&is=666c87f4&hm=ce6288f645b59c73e7e06130da49e5343deee7a33c3044ca68fb79e315c9b8a8&",
];

const Carrossel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const nextImage = (currentImage + 1) % images.length;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-full max-w-2xl overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {images.map((image, index) => (
            <div className="min-w-full" key={index}>
              <img src={image} alt={`Imagem ${index}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Carrossel;
