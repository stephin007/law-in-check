import { useEffect, useState } from "react";
import Select from "react-select";

import Dropdown from "../../utils/Dropdown";

import "./home.css";

const IndianLegalActs = [
  { value: "1", label: "Indian Penal Code" },
  { value: "2", label: "Code of Criminal Procedure" },
  { value: "3", label: "Civil Procedure Code" },
  { value: "4", label: "Indian Evidence Act" },
  { value: "5", label: "Indian Divorce Act" },
  { value: "6", label: "Negotiable Instruments Act" },
  { value: "7", label: "The Motor Vehicles Act" },
];

const Home = () => {
  const [selectedAct, setSelectedAct] = useState("");
  const [ipcdata, setIpcdata] = useState([]);
  const [crpcdata, setCrpcdata] = useState([]);
  const [iecdata, setIecdata] = useState([]);
  const [cpcdata, setCpcdata] = useState([]);
  const [idadata, setIdadata] = useState([]);
  const [niadata, setNiadata] = useState([]);
  const [mvadata, setMvadata] = useState([]);
  const [sectionDescription, setSectionDescription] = useState("");
  const [ipcSectionDescription, setIpcSectionDescription] = useState("");
  const [selectedSection, setSelectedSection] = useState(false);

  useEffect(() => {
    fetchCRPC();
    fetchIPC();
    fetchIEC();
    fetchCPC();
    fetchIDA();
    fetchNIA();
    fetchMVA();
  }, []);

  const handleDropdown = (selectedAct) => {
    setSelectedAct(selectedAct);
    setSelectedSection(false);
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

  const fetchCPC = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/cpc.json"
    );
    const data = await response.json();
    setCpcdata(data);
  };

  const CPCSectionList = cpcdata.map((item) => {
    return { value: item.section, label: item.title };
  });

  const fetchIEC = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/iea.json"
    );
    const data = await response.json();
    setIecdata(data);
  };

  const IECSectionList = iecdata.map((item) => {
    return { value: item.section, label: item.section_title };
  });

  const fetchIDA = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/ida.json"
    );
    const data = await response.json();
    setIdadata(data);
  };

  const IDASectionList = idadata.map((item) => {
    return { value: item.section, label: item.title };
  });

  const fetchNIA = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/nia.json"
    );
    const data = await response.json();
    setNiadata(data);
  };

  const NIASectionList = niadata.map((item) => {
    return { value: item.section, label: item.section_title };
  });

  const fetchMVA = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/MVA.json"
    );
    const data = await response.json();
    setMvadata(data);
  };

  const MVASectionList = mvadata.map((item) => {
    return { value: item.section, label: item.title };
  });

  const functionToCaptureIPCSectionDescription = async (section) => {
    const response = await fetch(
      "https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/ipc.json"
    );
    const data = await response.json();
    const sectionDescription = data.filter(
      (item) => item.Section === section.value
    );
    console.log(sectionDescription);
    setIpcSectionDescription(sectionDescription[0].section_desc);
    setSelectedSection(true);
  };

  const generalFunctionToFetchSectionDescription = async (section, act) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/${act}.json`
    );
    const data = await response.json();
    console.log(section);
    const sectionDescription = data.filter((item) => item.section === section);
    console.log(sectionDescription);
    setSectionDescription(sectionDescription[0].description);
    setSelectedSection(true);
  };

  const generalFunctionToFetchSpecificSectionDescription = async (
    section,
    act
  ) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/civictech-India/Indian-Law-Penal-Code-Json/main/${act}.json`
    );
    const data = await response.json();
    const sectionDescription = data.filter(
      (item) => item.section === section.value
    );
    setSectionDescription(sectionDescription[0].section_desc);
    setSelectedSection(true);
  };

  const dynamicContent = (selectedAct) => {
    switch (selectedAct) {
      case "1":
        return (
          <>
            <Select
              options={IPCSectionList}
              onChange={(e) => functionToCaptureIPCSectionDescription(e)}
            />
          </>
        );
      case "2":
        return (
          <>
            <Select
              options={CRPCSectionList}
              onChange={(e) =>
                generalFunctionToFetchSpecificSectionDescription(e, "crpc")
              }
            />
          </>
        );
      case "3":
        return (
          <>
            <Select
              options={CPCSectionList}
              onChange={(e) =>
                generalFunctionToFetchSectionDescription(e.value, "cpc")
              }
            />
          </>
        );
      case "4":
        return (
          <>
            <Select
              options={IECSectionList}
              onChange={(e) =>
                generalFunctionToFetchSpecificSectionDescription(e, "iea")
              }
            />
          </>
        );
      case "5":
        return (
          <>
            <Select
              options={IDASectionList}
              isClearable
              onChange={(e) =>
                generalFunctionToFetchSectionDescription(e.value, "ida")
              }
            />
          </>
        );
      case "6":
        return (
          <>
            <Select
              options={NIASectionList}
              onChange={(e) =>
                generalFunctionToFetchSpecificSectionDescription(e, "nia")
              }
            />
          </>
        );
      case "7":
        return (
          <>
            <Select
              options={MVASectionList}
              onChange={(e) =>
                generalFunctionToFetchSectionDescription(e.value, "MVA")
              }
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
          <p>The Ultimate App for Legal Knowledge</p>
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

          {selectedAct === "1" && selectedSection && (
            <div className='section-description'>
              <h3>Section Description</h3>
              <p>{ipcSectionDescription}</p>
            </div>
          )}

          {selectedAct === "2" && selectedSection && (
            <div className='section-description'>
              <h3>Section Description</h3>
              <p>{sectionDescription}</p>
            </div>
          )}

          {selectedAct === "3" && selectedSection && (
            <div className='section-description'>
              <h3>Section Description</h3>
              <p>{sectionDescription}</p>
            </div>
          )}

          {selectedAct === "4" && selectedSection && (
            <div className='section-description'>
              <h3>Section Description</h3>
              <p>{sectionDescription}</p>
            </div>
          )}

          {selectedAct === "5" && selectedSection && (
            <div className='section-description'>
              <h3>Section Description</h3>
              <p>{sectionDescription}</p>
            </div>
          )}

          {selectedAct === "6" && selectedSection && (
            <div className='section-description'>
              <h3>Section Description</h3>
              <p>{sectionDescription}</p>
            </div>
          )}

          {selectedAct === "7" && selectedSection && (
            <div className='section-description'>
              <h3>Section Description</h3>
              <p>{sectionDescription}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
