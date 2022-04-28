import TextBox from "./components/TextBox";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdSwap } from "react-icons/io";
import { SiGoogletranslate } from "react-icons/si";

const App = () => {
  // States
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Turkish");
  const [languages, setlanguages] = useState([]);
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  // Fetch data
  const getLanguages = () => {
    const options = {
      method: "GET",
      url: "https://google-translate20.p.rapidapi.com/languages",
      headers: {
        "X-RapidAPI-Host": `${process.env.RAPID_API_HOST}`,
        "X-RapidAPI-Key": `${process.env.RAPID_API_KEY_LANGUAGES}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        const arrayOfData = Object.keys(response.data.data).map(
          (key) => response.data.data[key]
        );
        setlanguages(arrayOfData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const translate = () => {
    const options = {
      method: "GET",
      url: "https://google-translate20.p.rapidapi.com/translate",
      params: {
        text: textToTranslate,
        tl: outputLanguage,
        sl: inputLanguage,
      },
      headers: {
        "X-RapidAPI-Host": `${process.env.RAPID_API_HOST}`,
        "X-RapidAPI-Key": `${process.env.RAPID_API_KEY_TRANSLATE}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setTranslatedText(response.data.data.translation);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // Effects
  useEffect(() => {
    getLanguages();
  }, []);

  // Functions
  const clickhandler = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
    setTextToTranslate(translatedText);
    setTranslatedText(textToTranslate);
  };

  // console.log(languages);

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            boxName="input"
            setShowModal={setShowModal}
            textToTranslate={textToTranslate}
            setTextToTranslate={setTextToTranslate}
            translate={translate}
          />
          <div className="arrow-container" onClick={clickhandler}>
            <IoMdSwap className="arrow-icon" />
          </div>
          <TextBox
            selectedLanguage={outputLanguage}
            boxName="output"
            setShowModal={setShowModal}
            translatedText={translatedText}
            setTranslatedText={setTranslatedText}
            translate={translate}
          />
          <div className="button-container" onClick={translate}>
            <SiGoogletranslate size={"30px"} className="translate-icon" />
          </div>
        </>
      )}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          languages={languages}
          chosenLanguage={
            showModal === "input" ? inputLanguage : outputLanguage
          }
          setChosenLanguage={
            showModal === "input" ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
  );
};

export default App;
