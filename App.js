import React from "react"
import useWordGame from "./hooks/useWordGame.js"

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame(10)

  return (
    <div>
      <h1>how fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Starti
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App