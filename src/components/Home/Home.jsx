import { useState } from "react";

import Dropdown from "../../utils/Dropdown";
import MVA from "../../Data/mva";

import "./home.css";

const IndianLegalActs = [
  { value: "1", label: "Indian Penal Code" },
  { value: "2", label: "Code of Criminal Procedure" },
  { value: "3", label: "Civil Procedure Code" },
  { value: "4", label: "Indian Evidence Act" },
  { value: "5", label: "Hindu Marriage Act" },
  { value: "6", label: "Indian Divorce Act" },
  { value: "7", label: "Negotiable Instruments Act" },
  { value: "8", label: "The Motor Vehicles Act" },
];

const Home = () => {
  const [selectedAct, setSelectedAct] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const handleDropdown = (selectedAct) => {
    setSelectedAct(selectedAct);
  };

  return (
    <div className='home-container'>
      <div className='home-section-1'>
        <div className='home-section-1-title'>
          <h1>Empower Yourself: Know Your Rights</h1>
        </div>
        <div className='home-section-1-tagline'>
          <p>The Ultimate App for Legal Knowledge and Empowerment!</p>
        </div>
      </div>
      <div className='home-section-2'>
        <div className='home-section-2-search'>
          <Dropdown
            value={selectedAct}
            data={IndianLegalActs}
            placeholder='Select An Act'
            onChange={handleDropdown}
          />

          {selectedAct != "" ? (
            <>
              <Dropdown
                value={selectedSection}
                data={MVA}
                placeholder='Select A Section'
                onChange={handleDropdown}
              />
            </>
          ) : (
            <>
              <p
                style={{
                  color: "#a9a9a9",
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Please select an option!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
