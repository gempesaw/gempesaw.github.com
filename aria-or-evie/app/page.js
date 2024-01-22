'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

let images = shuffle([
  "https://f004.backblazeb2.com/file/aria-or-evie/aria.jpg",
  "https://f004.backblazeb2.com/file/aria-or-evie/evie.jpg"
]);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photoSrc, setPhotoSrc] = useState('');
  const [correctName, setCorrectName] = useState('');
  const [score, setScore] = useState(0);
  const [verified, setVerified] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value == "10") {
      setVerified(true)
    }
  };

  const myToast = (msg) => {
    toast.dismiss();

  };

  const reset = () => {
    const nextIndex = currentIndex + 1 < images.length
          ? currentIndex + 1
          : 0;

    if (nextIndex === 0) {
      images = shuffle(images)
    }

    setCurrentIndex(nextIndex);
    setPhotoSrc(images[nextIndex]);
    setCorrectName(images[nextIndex].split(/\//).reverse()[0]);
  };

  useEffect(reset, []);

  const guess = (guessedName) => {
    if (correctName.toLowerCase().includes(guessedName)) {
      toast.dismiss();
      toast.success('Correct! You guessed right.', {
        position: toast.POSITION.TOP_CENTER
      })
      setScore(score + 1);
    } else {
      toast.dismiss();
      toast.error(`Wrong! It's ${correctName}.`, {
        position: toast.POSITION.TOP_CENTER
      })
    }

    reset();
  };

  if (verified === false) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.verify}>
            <p>what month was aria born?</p>
            <input type="text" onChange={handleInputChange} />
          </div>
        </header>
      </div>
    )
  }
  else {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Image
            src={photoSrc}
            alt="Guess who!"
            layout="fill"
            objectFit="contain"
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
}

export default Home;
