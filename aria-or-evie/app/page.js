'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 2000,
  theme: 'colored'
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}


let images = shuffle([
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(1).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(10).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(11).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(12).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(13).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(14).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(15).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(16).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(17).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(18).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(19).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(2).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(20).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(21).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(22).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(23).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(24).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(25).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(26).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(27).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(28).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(29).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(3).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(4).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(5).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(6).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(7).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(8).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(9).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria.webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(10).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(11).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(12).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(13).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(14).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(15).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(16).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(17).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(18).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(19).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(20).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(21).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(22).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(23).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(24).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(25).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(26).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(27).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(28).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(29).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(30).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(31).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(32).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(33).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(34).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(35).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(36).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(37).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(38).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(39).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(40).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(41).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(42).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(43).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(44).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(45).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(46).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(47).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(48).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(5).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(6).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(7).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(8).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(9).webp',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie.webp'
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
      toast.success('Correct! You guessed right.', toastOptions)
      setScore(score + 1);
    } else {
      toast.dismiss();
      toast.error(`Wrong! It's ${correctName}.`, toastOptions)
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
