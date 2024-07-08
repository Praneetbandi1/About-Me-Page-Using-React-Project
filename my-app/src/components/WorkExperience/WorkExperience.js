import AddWorkExperience from "./AddWorkExperience.js";
export default function WorkExperience({ workExperience }) {
  return(
  <div className="workExperience">
    <h3>Work Experience</h3>
    { workExperience.map((experience) => (
      <AddWorkExperience
        title={experience.title}
        company={experience.company}
        duration={experience.duration}
      />
    ))}
  </div>)}

