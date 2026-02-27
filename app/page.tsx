"use client";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [story, setStory] = useState("");

  async function generate() {
    const res = await fetch("/api/story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guideText: text })
    });

    const data = await res.json();
    setStory(data.story);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Draw & Tell a Story ✨</h1>

      <p>Describe your drawing:</p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: 100 }}
      />

      <br /><br />

      <button onClick={generate}>
        Generate Story
      </button>

      {story && (
        <div style={{ marginTop: 30 }}>
          <h2>Your Story</h2>
          <p>{story}</p>
        </div>
      )}
    </div>
  );
}
