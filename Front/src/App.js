import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import FindCandidates from './components/FindCandidates';
import Results from './components/Results';
import ResultsContext from './ResultsContext';
import { useState } from 'react';

function App() {
  const [job,setJob] = useState()
  const[skills,setSkills] = useState([])
  const handleJob = (jobTitle)=>{
    if(!jobTitle){
      return setJob();
    }
    setJob(jobTitle)
  }
  const handleSkills = (skills)=>{
    setSkills(skills)
  }
  return (
    <ResultsContext.Provider value = {{handleSkills:handleSkills,handleJob:handleJob,job:job,skills:skills}}>
    <div className="AppClass">
     <div className = 'search'>
     <Introduction/>
     <FindCandidates
     handleJob = {handleJob}
     />
     </div>
     <div className = 'results'>
     <Results/>
     </div>
    </div>
    </ResultsContext.Provider>
  );
}

export default App;
