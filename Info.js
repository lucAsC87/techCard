import React from "react"

export default function Info() {
    return(
        <div className="info">
        <img src="https://f4.bcbits.com/img/0017790346_20.jpg" width="317px"/>
        <h2>Luca Cavallo</h2>
        <h4 className="jobtitle">Frontend Developer</h4>
        <div className ="links">
        <ul>
         <li><a href="mailto:lucas2187@gmail.com">
         <button className="mail"><img src="https://icons.download/icons/medium/outline/round/communication/mail.svg"/>Email</button></a></li>
         <li><a href="https://www.linkedin.com/in/luca-cavallo-24b047224/">
         <button className="linkedin"><img src="https://toppng.com/public/uploads/thumbnail/linkedin-logo-black-png-linkedin-icon-black-and-white-115629065571rpt0smdin.png"/>Linkedin</button></a></li>
        </ul>
        </div>
        </div>
    )
}