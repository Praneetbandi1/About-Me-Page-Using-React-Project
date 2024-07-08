export default function AddWorkExperience({ title, company, duration }) {
  return (
    <div className="workExperience">
      <p>
        <ul>
          <li>
            {title}: {company} ({duration})
          </li>
        </ul>
      </p>
    </div>
  );
}