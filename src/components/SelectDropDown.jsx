const SelectDropDown = ({ name, setShowModal, selectedLanguage }) => {
  return (
    <div className="select-drop-down" onClick={() => setShowModal(name)}>
      <input defaultValue={selectedLanguage} />
      <div className="down-arrow">
        <svg
          focusable="false"
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 24 25"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SelectDropDown;
