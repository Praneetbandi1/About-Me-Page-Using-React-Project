import AddEducation from "./AddEducation.js";
export default function Education({ education }) {
  return (
    <div className="education">
      <h3>Education</h3>

      {education.map((education) => (
        <AddEducation
          institution={education.institution}
          degree={education.degree}
          duration={education.duration}
        />
      ))}
    </div>
  );
}
