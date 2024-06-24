import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";

export default function Differences() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <section>
      <h3>Не знаете с чего начать?</h3>

      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {contentType ? (
        <p>{differences[contentType]}</p>
      ) : (
        <div>Нажми на кнопку</div>
      )}
    </section>
  );
}
