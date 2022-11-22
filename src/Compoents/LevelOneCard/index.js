import React from "react";

const LevelOneCard = ({ isClick, img, handleClick, same, id }) => {
  return (
    <div>
      <div onClick={() => handleClick(id)} className="cardLevelOne">
        {isClick ? (
          <img className="imgClick" src={img} />
        ) : (
          <img
            className="img"
            src="https://www.creativefabrica.com/wp-content/uploads/2021/02/10/doodle-Question-Mark-Graphics-8494718-1.jpg"
          />
        )}
      </div>
    </div>
  );
};

export default LevelOneCard;
