import { useState } from "react"
import "./App.css"

function App() {
  const [text, setText] = useState("")
  const [finalText, setFinalText] = useState<string>(``)
  const remove = (column: string) => {
    setFinalText(
      column
        .split("\n")
        .filter((e: string) => e !== "")
        .join("\n")
    )
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {finalText && (
        <button
          style={{
            marginBottom: "15px",
            backgroundColor: "white",
            color: "black",
          }}
          onClick={() => navigator.clipboard.writeText(finalText)}
        >
          Copy
        </button>
      )}
      <textarea
        rows={25}
        cols={100}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        style={{
          marginTop: "15px",
          marginBottom: "20px",
          backgroundColor: "white",
          color: "black",
        }}
        onClick={() => remove(text)}
      >
        Remove Blank Lines
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {finalText.split("\n").map((text) => (
          <p style={{ margin: 0 }}>{text}</p>
        ))}
      </div>
    </div>
  )
}

export default App
