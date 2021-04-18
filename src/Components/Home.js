import React from 'react'
import "./Home.css"
import Maths from "./Maths.jpg"

function Home() {

    return (
        <div className="allText">
            <img className="mathsImage" src={Maths} alt="jacky teaching maths" />
            <div>
                <h3>Do you or your children need some help with maths?</h3>
            </div>
            <div>
                <p>My name is Jacky and I offer 1 to 1 maths tuition at affordable prices.</p> 
                <p>Most parents agree that fully tailored 1 to 1 teaching is extremely efficient. I craft the lessons to ensure your child benefits and becomes more confident in maths and  to help them reach their potential.</p>
                <p>Or alternatively as an adult you regret not having a secure maths foundation in order to help your child with homework. I can help with gaps and confidence in areas needed with either regular or one-off tuition.</p> 
                <p>I offer lessons throughout Thurso, Halkirk or Castletown in person or anywhere online via Skype or Zoom.</p>
                <p> All levels of maths are covered from P3 to Higher. 
                </p>
            </div>
        </div>
    )
}

export default Home
