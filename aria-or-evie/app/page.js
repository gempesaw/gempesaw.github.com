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
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(1).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(10).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(11).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(12).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(13).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(14).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(15).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(16).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(17).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(18).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(19).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(2).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(20).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(21).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(22).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(23).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(24).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(25).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(26).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(27).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(28).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(29).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(3).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(4).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(5).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(6).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(7).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(8).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria+(9).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/aria.jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(10).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(11).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(12).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(13).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(14).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(15).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(16).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(17).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(18).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(19).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(20).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(21).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(22).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(23).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(24).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(25).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(26).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(27).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(28).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(29).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(30).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(31).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(32).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(33).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(34).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(35).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(36).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(37).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(38).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(39).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(40).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(41).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(42).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(43).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(44).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(45).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(46).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(47).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(48).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(5).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(6).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(7).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(8).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie+(9).jpg',
  'https://f004.backblazeb2.com/file/aria-or-evie/evie.jpg'
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
