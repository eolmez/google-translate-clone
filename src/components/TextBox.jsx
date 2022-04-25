import SelectDropDown from "./SelectDropDown";

const TextBox = ({
  selectedLanguage,
  style,
  setShowModal,
  textToTranslate,
  setTextToTranslate,
  translatedText,
}) => {
  return (
    <div className={style}>
      <SelectDropDown
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === "input" ? textToTranslate : translatedText}
      />
    </div>
  );
};

export default TextBox;
