import './App.css';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
const nameV="Praneet Bandi";    
const bioV = "I was born in New Jersey and moved to New Tampa shortly after. I have been attending schools in the Tampa Bay area for most of my life."
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
 const education=[
  {
    institution :"University of South Florida",
    degree :"Bachelors of Business Analytics",
    duration :"2020-Present",
  },
 ];




function App() {
  return (
    <div className="App">

      

       <PersonalInfo name={nameV} bio={bioV} contactInfo={contactInfoV} />
       <Skills skills={skills}/>
       <WorkExperience workExperience={workExperience}/>
       <Education education={education}/>
  
         
    </div>
  )
}

export default App;
