import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import Differences from "./components/Differences";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedBackSection from "./components/FeedBackSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            {" "}
            <TeachingSection />
            <Differences />
          </>
        )}

        {tab === "feedback" && (
          <>
            <FeedBackSection />
          </>
        )}
      </main>
    </>
  );
}
