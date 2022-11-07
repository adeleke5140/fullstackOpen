import StatisticLine from "./StatisticLine";

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

export default Statistics;
