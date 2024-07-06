

export default function PersonalInfo({name, bio, contactInfo}) {
    return (
        <div className="personal-info">
            <h3>{name}</h3>
            <p>{bio}</p>
            <p>{contactInfo}</p> 
        </div>
    )  
}