import './App.css';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';

const nameV="Praneet Bandi";    
const bioV = "I was born in New Jersey and moved to New Tampa shortly after."
const contactInfoV="I can be reached at this number: 813-564-3453"

function App() {
  return (
    <div className="App">
         
       <PersonalInfo name={nameV} bio={bioV} contactInfo={contactInfoV} />
      
    </div>
  );
}

export default App;
