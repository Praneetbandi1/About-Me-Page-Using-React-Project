export default function 
Addskill({name, proficiency}) {
  return (
    <div className="skills">
      <p>
        <ul>
          <li>
            {name}:
            {proficiency} 
            </li>
        </ul>

      </p>

    </div>


  )
}