import { useState } from "react";

const arr = new Uint8Array(7);
function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(arr);

  const total = good + neutral + bad;
  const percentagePositiveFeedback = (good / total) * 100;

  const average = (good - bad) / 3;

  const handleGood = () => setGood(good + 1);
  const handleBad = () => setBad(bad + 1);
  const handleNeutral = () => setNeutral(neutral + 1);

  const getRandomIndex = () =>
    setSelected(Math.round(Math.random() * (anecdotes.length - 1)));

  const increaseVote = (selected) => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const highestVote = Math.max(...votes);
  const indexOfHighestVote = votes.indexOf(highestVote);
  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <div className="button-group">
        <Button handler={handleGood} text="good" />
        <Button handler={handleBad} text="bad" />
        <Button handler={handleNeutral} text="neutral" />
      </div>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        percentagePositiveFeedback={percentagePositiveFeedback}
        average={average}
      />

      <div className="quote-section">
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button handler={() => increaseVote(selected)} text="vote" />
        <Button handler={getRandomIndex} text="next anecdote" />
      </div>

      <div className="highest-anecdote">
        <h2>Anecdote with the most votes</h2>
        {highestVote !== 0 && (
          <p>
            {anecdotes[indexOfHighestVote]} has {highestVote}{" "}
            {highestVote == 1 ? "vote" : "votes"}
          </p>
        )}
      </div>
    </div>
  );
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text} </td>
    <td>{value}</td>
  </tr>
);

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>;

const Statistics = (props) => {
  const { good, neutral, bad, total, percentagePositiveFeedback, average } =
    props;

  if (good == 0 && bad == 0 && neutral == 0)
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given </p>
      </>
    );

  return (
    <div className="feedback-category">
      <h2>Statistics </h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={null ?? average} />
          <StatisticLine
            text="positive"
            value={`${percentagePositiveFeedback || 0}%`}
          />
        </tbody>
      </table>
    </div>
  );
};

export default App;
