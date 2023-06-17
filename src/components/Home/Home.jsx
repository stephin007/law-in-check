import { useEffect, useState } from "react";

import Dropdown from "../../utils/Dropdown";
// import MVA from "../../Data/mva";

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
  const [ipcdata, setIpcdata] = useState([]);
  const [crpcdata, setCrpcdata] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");

  useEffect(() => {
    fetchCRPC();
    fetchIPC();
  }, []);

  const handleDropdown = (selectedAct) => {
    setSelectedAct(selectedAct);
  };

  const handleSelectedSection = (selectedSection) => {
    setSelectedSection(selectedSection);
  };

  const fetchCRPC = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/crpc.json"
    );
    const data = await response.json();
    setCrpcdata(data);
  };

  const CRPCSectionList = crpcdata.map((item) => {
    return { value: item.section, label: item.section_title };
  });

  const fetchIPC = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/ipc.json"
    );
    const data = await response.json();
    setIpcdata(data);
  };

  const IPCSectionList = ipcdata.map((item) => {
    return { value: item.Section, label: item.section_title };
  });

  const dynamicContent = (selectedAct) => {
    switch (selectedAct) {
      case "1":
        return (
          <>
            <Dropdown
              value={selectedSection}
              data={IPCSectionList}
              placeholder='Select A Section'
              onChange={handleSelectedSection}
            />
          </>
        );
      case "2":
        return (
          <>
            <Dropdown
              value={selectedSection}
              data={CRPCSectionList}
              placeholder='Select A Section'
              onChange={handleSelectedSection}
            />
          </>
        );
      default:
        return (
          <>
            <p
              style={{
                color: "#a9a9a9",
                width: "100%",
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Content yet to be added, Appreciate your patience.
            </p>
          </>
        );
    }
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
          {selectedAct === "" ? (
            <p
              style={{
                color: "#a9a9a9",
                width: "100%",
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Select an Act to see more
            </p>
          ) : (
            dynamicContent(selectedAct)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
