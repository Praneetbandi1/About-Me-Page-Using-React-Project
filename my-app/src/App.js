import './App.css';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
const nameV="Praneet Bandi";    
const bioV = "I was born in New Jersey and moved to New Tampa shortly after."
const contactInfoV="I can be reached at this number: 813-564-3453"
//skills array
const skills=  [
  {
   name: " Web Development",
   proficiency: "Expert"
  },

  { name:" Data Visualization  ",
   proficiency:"Advanced"
  },

  {
   name:"Power BI ",
   proficiency:"Intermediate",

  }
];
const workExperience=[
  {
    title:"Senior Software Engineer",
    company:"BCBS",
    duration:"2022-Present",
  },

  {
    title:"Junior Software Engineer",
    company:"City Bank",
    duration:"2021-2022",

  },

  {
    title:"Software Engineer",
    company:"Capital One",
    duration:"2020-2021",

  }

 ];





function App() {
  return (
    <div className="App">

      

       <PersonalInfo name={nameV} bio={bioV} contactInfo={contactInfoV} />
       <Skills skills={skills}/>
       <WorkExperience workExperience={workExperience}/>
  
         
    </div>
  )
}

export default App;
