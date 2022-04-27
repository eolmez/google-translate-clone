import SelectDropDown from "./SelectDropDown";

const TextBox = ({
  selectedLanguage,
  boxName,
  setShowModal,
  textToTranslate,
  setTextToTranslate,
  translatedText,
  translate,
}) => {
  return (
    <div className={boxName}>
      <SelectDropDown
        style={boxName}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={boxName === "input" ? "Enter Text" : "Translation"}
        disabled={boxName === "output"}
        onChange={(e) => {
          setTextToTranslate(e.target.value);
        }}
        value={boxName === "input" ? textToTranslate : translatedText}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            translate();
          }
        }}
      />
    </div>
  );
};

export default TextBox;
