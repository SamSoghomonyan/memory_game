import React, { useState, useEffect } from "react";
import LevelOneCard from "../LevelOneCard";
import GameOver from "../GameOver";

const data = [
  {
    id: 1,
    name: "United Arab Emirates",
    img: "https://www.countryflagsapi.com/flagssvg/ae.svg",
    isClick: false,
  },
  {
    id: 2,
    name: "Andorra",
    img: "https://www.countryflagsapi.com/flagssvg/ad.svg",
    isClick: false,
  },
  {
    id: 3,
    name: "Afghanistan",
    img: "https://www.countryflagsapi.com/flagssvg/af.svg",
    isClick: false,
  },
  {
    id: 4,
    name: "Antigua And Barbuda",
    img: "https://www.countryflagsapi.com/flagssvg/ag.svg",
    isClick: false,
  },
  {
    id: 5,
    name: "Anguilla",
    img: "https://www.countryflagsapi.com/flagssvg/ai.svg",
    isClick: false,
  },
  {
    id: 6,
    name: "Armenia",
    img: "https://www.countryflagsapi.com/flagssvg/am.svg",
    isClick: false,
  },
  {
    id: 7,
    name: "United Arab Emirates",
    img: "https://www.countryflagsapi.com/flagssvg/ae.svg",
    isClick: false,
  },
  {
    id: 8,
    name: "Andorra",
    img: "https://www.countryflagsapi.com/flagssvg/ad.svg",
    isClick: false,
  },
  {
    id: 9,
    name: "Afghanistan",
    img: "https://www.countryflagsapi.com/flagssvg/af.svg",
    isClick: false,
  },
  {
    id: 10,
    name: "Antigua And Barbuda",
    img: "https://www.countryflagsapi.com/flagssvg/ag.svg",
    isClick: false,
  },
  {
    id: 11,
    name: "Anguilla",
    img: "https://www.countryflagsapi.com/flagssvg/ai.svg",
    isClick: false,
  },
  {
    id: 12,
    name: "Armenia",
    img: "https://www.countryflagsapi.com/flagssvg/am.svg",
    isClick: false,
  },
].sort(() => Math.random() - 0.5);

const LevelOne = () => {
  const [levelOne, setLevelOne] = useState(data);
  const [check, setCheck] = useState(false);
  const [same, setSame] = useState([]);
  const playAgain = () => {
    let again = levelOne.map((item) => {
      if (item.isClick) {
        setLevelOne((item.isClick = false));
        return item;
      }
      return item;
    });
    setCheck(false);
    setLevelOne(again);
  };
  useEffect(() => {
    let count = 0;
    levelOne.map((item) => {
      if (item.isClick) {
        count++;
      }
    });
    if (count == 12) {
      setCheck(true);
    }
  }, [levelOne]);
  const handelClose = () => {
    let closeArray = data.map((item) => {
      same.map((item1) => {
        if (item1.name === item.name) {
          item.isClick = false;
          return item;
        }
      });
      return item;
    });
    setLevelOne(closeArray);
  };
  useEffect(() => {
    if (same.length == 2) {
      if (same[0].name !== same[1].name) {
        setTimeout(() => {
          handelClose();
          setSame([]);
        }, 500);
      } else {
        setSame([]);
      }
    }
  }, [same]);
  console.log("same :>> ", same);
  const handleClick = (id) => {
    if (same.length < 2) {
      let dataOne = data.map((item) => {
        if (item.id === id) {
          setSame([...same, item]);
          item.isClick = true;
          return item;
        }
        return item;
      });
      setLevelOne(dataOne);
    }
  };
  console.log("check :>> ", check);
  return (
    <div>
      {check ? (
        <GameOver />
      ) : (
        <div>
          <div className="containerLevelOne">
            <div className="LevelOne">
              {levelOne.map((card) => {
                return (
                  <LevelOneCard
                    key={card.id}
                    {...card}
                    same={same}
                    handleClick={handleClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      <button className="playAgain" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
};

export default LevelOne;

// slice anel u enpes anel ete inq@ erku ht uni u sexmi ekroridin avtopat en erkus@ stugi am toxi kam pagi 3 in sexmeluc
// u jamanak el sarqel arajin sexmeluc sksac gna minchev ekrord sexmel@ ete jamana@ lrana avtomat pakvi
// isk erb inq@ arden errord@ sexmi arajin@ avtomar darna 0 kam sksi o ic
// format@ lini espisi 00:30 , 00:29 , 00:28

// let c = [1,2,3]
// undefined
// let c1 = c.slice(0,2)
// undefined
// c1
// (2) [1, 2]
// let c2 = c.slice(2)
// undefined
// c2
// [3]
