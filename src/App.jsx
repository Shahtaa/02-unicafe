import { useState } from 'react';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>

      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>

      {all > 0 ? (
        // Näytä keskiarvo ja positiivinen prosenttiosuus jos palautetta on annettu
        <>
          <div>average {(good - bad) / all}</div>
          <div>positive {good / all * 100} %</div>
        </>
      ) : (
        // Näytä jos palautetta ei ole annettu
        <>
          <div>average</div>
          <div>positive</div>
        </>
      )}
    </div>
  );
};

export default App;