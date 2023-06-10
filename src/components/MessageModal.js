import imgSrc from '../img/message.png';

const MessageModal = ({ message, bestScore, onRetry }) => {
  const handleRetry = () => onRetry();

  return (
    <div className="message">
      <div className="message-container">
        <p className="message-primary-text">{message}</p>
        <p className="message-secondary-text">{`Best Score : ${bestScore}`}</p>
        <button className="btn" onClick={handleRetry}>
          Start Again
        </button>
      </div>
      <img src={imgSrc} alt="chibi-chie" />
    </div>
  );
};

export default MessageModal;
