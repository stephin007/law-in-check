import "./home.css";

// const IndianLegalActs = [
//   "Indian Penal Code",
//   "Code of Criminal Procedure",
//   "Civil Procedure Code",
//   "Indian Evidence Act",
//   "Hindu Marriage Act",
//   "Indian Divorce Act",
//   "Negotiable Instruments Act",
//   "The Motor Vehicles Act",
// ];

const Home = () => {
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
        <div className='home-section-search'></div>
      </div>
    </div>
  );
};

export default Home;
