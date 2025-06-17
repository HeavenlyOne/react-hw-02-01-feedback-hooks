import Notification from "../Notification/Notification";

export default function Statistics({ feedback }) {
    const {Good: good, Neutral: neutral, Bad: bad} = feedback
  const countTotalFeedback = () => {
    return good + neutral + bad;
    };
    const countPositiveFeedbackPercentage = () => {
        return Math.ceil((good / countTotalFeedback()) * 100);
    }
    const posFeed = countPositiveFeedbackPercentage()
    const total = countTotalFeedback()
    return total ? (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {posFeed ? posFeed + '%' : '0%'}</li>
      </ul>
    ) : (
      <Notification message={'There is no feedback'} />
    );
}
