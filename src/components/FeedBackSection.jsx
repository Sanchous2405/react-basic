import { useState } from "react";
import Button from "./Button/Button";

export default function FeedBackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше Имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          Name:{name}
          <br />
          Reaseon:{reason}
        </pre>

        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
