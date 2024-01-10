'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const correctPassword = 'cute';
const userInput = prompt('Enter the password to access the content:');

if (userInput === correctPassword) {
  alert('Access granted! You can view the content.');
} else {
  alert('Incorrect password. Access denied.');
}

const Home = () => {
  const [imagesByFolder, setImagesByFolder] = useState({});
  const [photoSrc, setPhotoSrc] = useState('');
  const [correctName, setCorrectName] = useState('');
  const [score, setScore] = useState(0);

  const myToast = (msg) => {
    toast.dismiss();
    toast(msg, {
      position: toast.POSITION.TOP_CENTER,
    })
  };

  const reset = async () => {
    const response = await fetch('/api/blob');
    const images = await response.json();

    if (images && images.length > 1) {
      const otherImages = images.filter((image) => image.url !== photoSrc);

      // Pick a random image from the filtered pool
      const randomImage = otherImages[Math.floor(Math.random() * otherImages.length)];

      setPhotoSrc(randomImage.url);
      setCorrectName(randomImage.pathname.toLowerCase());
    } else {
      console.error('Images array is empty or only contains the currently displayed image.');
    }
  };

  useEffect(() => {
    reset();
  }, []);

  const guess = (guessedName) => {
    if (guessedName === correctName) {
      myToast('Correct! You guessed right.');
      setScore(score + 1);
    } else {
      myToast(`Wrong! It's ${correctName}.`);
    }

    reset(); // Set up the next round after the user guesses
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src={photoSrc}
          alt="Guess who!"
          layout="fill"
          objectFit="cover"
        />
      </header>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => guess("aria")}>aria</button>
        <button className={styles.button} onClick={() => guess("evie")}>evie</button>
      </div>

      <div className={styles.score}>
        <p>Score: {score}</p>
      </div>

      <ToastContainer/>

    </div>
  );
};

export default Home;
