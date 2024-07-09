export default function AddEducation({institution,degree,duration}) {
return (

    <div className="education">
        <p>
            <ul>
                <li>
                    {institution} <br></br>{degree} ({duration})
                </li>
            </ul>
        </p>

    </div>
);
}




