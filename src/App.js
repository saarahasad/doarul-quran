import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("10:1");
  const [data, setData] = useState([]);
  const [surah, setSurah] = useState(2);
  const [ayah, setAyah] = useState(282);

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
  }
  function HandleClickNext(e) {
    e.preventDefault();
    console.log("You clicked next.");
    setAyah(ayah + 1);
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

        setSurah(surah + 1);
        setAyah(1);
      });
  };

  useEffect(() => {
    fetchData();
  }, [surah, ayah]);

  return (
    <div className="App">
      <div className="container">
         <div>
            <select className="custom-select" onChange={(e) => updateSelectSurah(e.target.value)}>
              {numberSurahs.map((s, index) => {
                return (
                  <option key={`year${index}`} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>

            <select className="custom-select"  onChange={(e) => updateSelectAyah(e.target.value)}>
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
            Prev
          </button>
         
          <button className="next-btn" onClick={HandleClickNext}>
            Next
          </button>
        </div>
        <div className="display-container">
          {data.map((item, index) => (
            <div>
              <>
                {index == 0 ? (
                  <>
                    <p className="english-text">
                      {" "}
                      Surah {item.surah.englishName}
                    </p>
                    <br />
                    <p className="english-text">
                      {item.surah.number}: {item.numberInSurah}
                    </p>
                    <p className="font-kitab arabic">{item.text}</p>
                  </>
                ) : (
                  <>
                    {" "}
                    <div>
                      <p className="translation">{item.text} </p>
                      <br />
                      <br />
                    </div>
                  </>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
