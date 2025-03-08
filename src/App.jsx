import React, { useState } from "react";

function App() {
  // Your flashcards data
  const flashcardsData = [
    {
      question: "Start",
      answer: "Press the next button to start"
    },
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces."
    },
    {
      question: "What is JSX?",
      answer: "A syntax extension that looks like HTML but is used in React."
    },
    {
      question: "What are props?",
      answer: "Props are inputs passed from a parent component to a child."
    },
    {
      question: "What is state?",
      answer: "State is data managed within a component that can change over time."
    },
    {
      question: "What is the difference between props and state?",
      answer:
        "Props are passed in from parents and are read-only; state is managed within a component and can be updated.",
    },
    {
      question: "Why do we need keys in lists?",
      answer:
        "Keys help React identify which items have changed, are added, or removed; they make list rendering more efficient.",
    },
  ];

  // State to track the current index and whether the card is flipped
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = flashcardsData[currentIndex];

  // Handler to flip card
  const handleFlip = () => {
    setShowAnswer(!showAnswer);
  };

  // Handler to go to next card
  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      prev === flashcardsData.length - 1 ? 0 : prev + 1
    );
  };

  // Handler to go to previous card
  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      prev === 0 ? flashcardsData.length - 1 : prev - 1
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Flashcards</h1>

      {/* Flashcard content */}
      <div style={styles.flashcard} onClick={handleFlip}>
        {showAnswer ? currentCard.answer : currentCard.question}
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleFlip}>Flip</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    margin: "50px auto",
    maxWidth: "600px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "30px",
  },
  flashcard: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "100%",
    height: "200px",
    margin: "0 auto 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default App;
