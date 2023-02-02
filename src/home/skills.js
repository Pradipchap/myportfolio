import React from "react";

import Loading from "./loading";
const skill = [
  {
    subject: "Web Development",
    Related: ["React ", "Next.js ", "Node js ", "Firebase"],
    Proficiency: 90,
  },
  {
    subject: "App Development",
    Related: ["Flutter ", "Node js ", "Firebase "],
    Proficiency: 40,
  },
  {
    subject: " AI",
    Related: ["None"],
    Proficiency: 20,
  },
];

export default function Skills() {

  
  return (
    <div className="cards">
      {skill.map((element) => {
        return (
          <div className="card" key={element.Proficiency}>
            <h2 style={{color:'#72a92f'}}>{element.subject}</h2>
            <h3>Related Technologies</h3>
            <h3>{element.Related}</h3>
            <h3>Proficiency</h3>
            <div className={`progress `}>

                <Loading className='temp' completed={element.Proficiency} />



            </div>
          </div>
        );
      })}
    </div>
  );
}
