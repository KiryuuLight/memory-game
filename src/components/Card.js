const Card = ({ id, name, imgSrc, updateScore }) => {
  const handleClick = (e) => updateScore(e.currentTarget.id);

  return (
    <div className="card" onClick={handleClick} id={id}>
      <div className="img-container">
        <img src={imgSrc} alt="card" />
      </div>
      <p className="game-text">{name}</p>
    </div>
  );
};

export default Card;
