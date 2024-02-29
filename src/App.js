import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Default1 from "./img/bd11.jpg";
import b7 from "./img/bd12.jpg";
import b8 from "./img/bd14.jpg";
import b10 from "./img/bd16.jpg";
import b11 from "./img/bd17.jpg";
import b13 from "./img/bd19.jpg";
import b15 from "./img/bd21.jpg";
import b17 from "./img/bd23.jpg";
import b19 from "./img/bd25.jpg";
import b20 from "./img/bd26.jpg";
import b21 from "./img/bd27.jpg";
import b23 from "./img/bd29.jpg";
import b24 from "./img/bd30.jpg";
import b26 from "./img/bd32.jpg";
import n2 from "./img/n1.jpg";
import Default from "./img/n2.jpg";
import n3 from "./img/n3.jpg";
import n4 from "./img/n4.jpg";
import n5 from "./img/n5.jpeg";
import n7 from "./img/n7.jpeg";
import n8 from "./img/n8.jpg";
import n9 from "./img/n9.jpg";
import n10 from "./img/n10.jpg";
import n11 from "./img/n11.jpg";
import n12 from "./img/n12.jpg";
import n13 from "./img/n13.jpg";
import n14 from "./img/n14.jpg";
import n15 from "./img/n15.jpg";
import n16 from "./img/n16.jpg";
import n17 from "./img/n17.jpg";
import n18 from "./img/n18.jpg";
import n19 from "./img/n19.jpg";
import n20 from "./img/n20.jpg";
import n21 from "./img/n21.jpg";
import n22 from "./img/n22.jpg";
import n23 from "./img/n23.jpg";
import n24 from "./img/n24.jpg";
import n25 from "./img/n25.jpg";
import n26 from "./img/n26.jpg";
import n27 from "./img/n27.jpg";
import n28 from "./img/n28.jpg";
import n29 from "./img/n29.jpg";
import n30 from "./img/n30.jpg";
import n31 from "./img/n31.jpg";
import n32 from "./img/n32.jpg";
import n33 from "./img/n33.jpg";
import n34 from "./img/n34.jpg";
import n35 from "./img/n35.jpg";
import n36 from "./img/n36.jpg";
import n37 from "./img/n37.jpg";
import n38 from "./img/n38.jpg";
import n39 from "./img/n39.jpg";
import n40 from "./img/n40.jpg";
import n41 from "./img/n41.jpg";
import n42 from "./img/n42.jpg";
import n43 from "./img/n43.jpg";
import n44 from "./img/n44.jpg";
import n45 from "./img/n45.jpg";
import n46 from "./img/n46.jpg";
import n47 from "./img/n47.jpg";

import alhudalogo from "./img/alhuda.png";

function App() {
  const [page, setPage] = useState("10:1");
  const [data, setData] = useState([]);
  const [surah, setSurah] = useState(1);
  const [ayah, setAyah] = useState(1);
  const [background, setBackground] = useState([
    Default,
    n3, n23, n30, n34, n18, n28, n46, n13, n10, n11, n19, n31, n40, n12, n37, n39, n15, n36, n21, n35, n20, n16, n9, n29, n45, n41, n44, n27, n14, n5, n25, n32, n4, n43, n8, n47, n26, n22, n2, n7, n17, n38, n24, n33, n42
      ]);
  const [bindex, setBIndex] = useState(0);

  const numberVerses = [
    7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
    111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
    54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49,
    62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28,
    28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
    15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5,
    6,
  ];
  const numberSurahs = Array.from({ length: 114 }, (_, i) => i + 1);

  function HandleClickPrev(e) {
    e.preventDefault();
    console.log("You clicked prev", ayah);

    if (ayah - 1 == 0) {
      if (surah - 1 == 0) {
        setAyah(1);
        setSurah(1);
      } else {
        console.log("E");
        setSurah(surah - 1);
        setAyah(1);
      }
    } else {
      setAyah(ayah - 1);
    }
    console.log("You clicked prev", ayah, surah);
    setBIndex((bindex + 1) % 45);
  }
  function HandleClickNext(e) {
    e.preventDefault();
    console.log("You clicked next.");
    setAyah(parseInt(ayah) + 1);
    setBIndex((bindex + 1) % 45);
  }

  function updateSelectSurah(e) {
    setSurah(e);
    setAyah(1);
  }

  function updateSelectAyah(e) {
    setAyah(e);
  }
  const fetchData = () => {
    fetch(
      `https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani-quran-academ,en.sahih`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((actualData) => {
        setData(actualData.data);
        console.log(data);
      })
      .catch((err) => {
        console.log("Surah ended");
        setAyah(1);
        setSurah(parseInt(surah) + 1);
        if (surah == 115) {
          setAyah(1);
          setSurah(1);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, [surah, ayah]);

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${background[bindex]})` }}
    >
      <div className="container">
        <div>
          <select
            className="custom-select"
            onChange={(e) => updateSelectSurah(e.target.value)}
          >
            {numberSurahs.map((s, index) => {
              return (
                <option key={`year${index}`} value={s}>
                  {s}
                </option>
              );
            })}
          </select>

          <select
            className="custom-select"
            onChange={(e) => updateSelectAyah(e.target.value)}
          >
            {Array.from(
              { length: numberVerses[surah - 1] },
              (_, i) => i + 1
            ).map((a, index) => {
              return (
                <option key={`year${index}`} value={a}>
                  {a}
                </option>
              );
            })}
          </select>
        </div>
        <div className="btn-container">
          <button
            variant="outlined"
            className="prev-btn"
            onClick={HandleClickPrev}
          >
        <FontAwesomeIcon icon={faArrowLeft} /> {/* Left arrow icon */}
          </button>

          <button className="next-btn" onClick={HandleClickNext}>
          <FontAwesomeIcon icon={faArrowRight} /> {/* Right arrow icon */}
          </button>
        </div>
        <div className="display-container">
          {data.map((item, index) => (
            <div>
            
              <div className="text-div"> 
                {index == 0 ? (
                   
                    <p className="font-kitab arabic">{item.text}</p>
                ) : (
                  <>
                    {" "}
                    <div>
                      <p className="translation">{item.text} </p>
                      <p className="english-text">
                      {" "}
                      Surah {item.surah.englishName} ( {item.surah.number} : {item.numberInSurah} )
                    </p>    
                    <br />
    
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className="alhudalogo"
          style={{
            backgroundImage: `url(${alhudalogo})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
