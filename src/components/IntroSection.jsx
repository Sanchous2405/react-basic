import React from "react";

export default function IntroSection() {
  return (
    <section>
      <h1 key={1} className="centered">
        Фильтрация информации и технологий.
      </h1>
      <h3 key={2} className="centered" style={{ color: "#666" }}>
        Из огромного количества информации и навыков в IT, вы получаете только
        то, что необходимо и работает.
      </h3>
    </section>
  );
}
