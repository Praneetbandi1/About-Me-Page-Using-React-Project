import AddSkill from './AddSkill.js'

export default function
Skills({skills}) {
    return(
        <div className="skills">
            <h3>Skills</h3>
            {skills.map(skill=>(
                <AddSkill  
                name={skill.name} 
                proficiency={skill.proficiency}/>))}
                
                
          <br></br>
        </div>
    )
}
