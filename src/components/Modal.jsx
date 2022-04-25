import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  setShowModal,
  languages,
  chosenLanguage,
  setChosenLanguage,
}) => {
  // States
  const [searchedLanguage, setSearchedLanguage] = useState("");

  // Functions
  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().startsWith(searchedLanguage.toLowerCase())
  );

  const clickHandler = (e) => {
    setChosenLanguage(e.target.textContent);
    setShowModal(null);
  };
  return (
    <div className="option-list">
      <div className="search-bar">
        <input
          value={searchedLanguage}
          onChange={(e) => setSearchedLanguage(e.target.value)}
        />
        <div className="close-button" onClick={() => setShowModal(null)}>
          <AiOutlineClose className="close-icon" />
        </div>
      </div>
      <div className="option-container">
        <ul>
          {filteredLanguages?.map((filteredLanguages, _index) => (
            <div className="list-item">
              <div className="icon">
                {chosenLanguage === filteredLanguages ? "✓" : ""}
              </div>
              <li
                key={_index}
                onClick={clickHandler}
                style={{
                  color:
                    chosenLanguage === filteredLanguages ? "#8ab4f8" : null,
                }}
              >
                {filteredLanguages}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
