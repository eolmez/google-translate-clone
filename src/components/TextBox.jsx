import SelectDropDown from "./SelectDropDown";

const TextBox = ({
  selectedLanguage,
  name,
  setShowModal,
  textToTranslate,
  setTextToTranslate,
  translatedText,
}) => {
  return (
    <div className={name}>
      <SelectDropDown
        style={name}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={name === "input" ? "Enter Text" : "Translation"}
        disabled={name === "output"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        defaultValue={name === "input" ? textToTranslate : translatedText}
      />
    </div>
  );
};

export default TextBox;
