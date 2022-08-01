import "../aboutme.css"
import javascript from "../assets/media/javascript.jpg";
import typescript from "../assets/media/typescript.png";
import ccplusplus from "../assets/media/ccplusplus.png";
import csharp from "../assets/media/csharp.png";

import react from "../assets/media/react.jpg";
import redux from "../assets/media/redux.png";
import html from "../assets/media/html.png";
import css from "../assets/media/css.png";
import bootstrap from "../assets/media/bootstrap.jpg";
import jquery from "../assets/media/jquery.png";


import nodejs from "../assets/media/nodejs.png";
import aspnet from "../assets/media/aspnet.png";

import sql from "../assets/media/sql.png";
import postgreSQL from "../assets/media/postgreSQL.png";
import mongoDB from "../assets/media/mongoDB.png";

import git from "../assets/media/git.png";
import gitHub from "../assets/media/gitHub.png";
import { NavLink, Link } from "react-router-dom";
import Portfolio from "../components/Portfolio";



const Aboutme = () => {
    return (
        <div className="main-container-child">
            <div className="summary-container">
				<h1 >Quang Minh Tran</h1>
				<br></br>
				<h5> Software Engineer/ Frontend/ Backend/ Full Stack </h5>
                <br></br>
          
			
				<p>
					I'm highly motivated to learn quickly and adapt in changing environment with multi-tasking abilities. Looking for a challenging full stack/frontend/backend role where I can implement my coding knowledge as well as further enhance my skills. My technical expertise includes but not limited to C/C++, JavaScript, C#, React/Redux, Node.js, HTML, CSS, TypeScript. Possess excellent communication and team-building abilities. 
				</p>
                <p>	
                    Open for on-site/hybrid/remote opportunities.	
			    </p>
            <br></br>		
				
					<li className="btn me-2 mb-3 summary-button">
      <Link
        exact
        to={'/Portfolio'}
        className={`menu-item`}>
	    <div className="menu-icon">
         
        </div>
        <span>View Portfolio</span>
		</Link></li>
            
		<li className="btn me-2 mb-3 summary-button">
      <Link
        exact
        to={'/Resume'}
        className={`menu-item`}>
	    <div className="menu-icon">
         
        </div>
        <span>Resume</span>
		</Link></li>
            </div>
            
            <div className="skills-conatiner">
			<div className="skill-type">
				<h5>Language</h5><br></br>
				<div className="skill-item">
				{/* 	<!-- Javascript --> */}
                        <img src={javascript} alt = ""></img>	
						<span>JavaScript</span>
				</div>	
                <div className="skill-item">
				{/* 	<!-- TypeScript --> */}
                        <img src={typescript} alt = ""></img>	
						<span>JavaScript</span>
                </div>
                <div className="skill-item">
				{/* 	<!-- C/C++ --> */}
                  <img src={ccplusplus} alt = ""></img>	
						<span>C/C++</span>
				
                </div>
                <div className="skill-item">
					{/* <!-- C# --> */}
					<img src={csharp} alt = ""></img>	
						<span>C#</span>
				</div>
			</div>


			<div className="skill-type">
				<h5>Fontend</h5>
				<div className="skill-item">
				{/* 	<!-- React --> */}
                        <img src={react} alt = ""></img>	
						<span>React</span>
				</div>	
                <div className="skill-item">
				{/* 	<!-- Redux --> */}
                        <img src={redux} alt = ""></img>	
						<span>Redux</span>
                </div>
                <div className="skill-item">
				{/* 	<!-- HTML --> */}
                  <img src={html} alt = ""></img>	
						<span>HTML</span>
				
                </div>
                <div className="skill-item">
					{/* <!-- CSS --> */}
					<img src={css} alt = ""></img>	
						<span>CSS</span>
				</div>
                <div className="skill-item">
					{/* <!-- Bootstrap --> */}
					<img src={bootstrap} alt = ""></img>	
						<span>Bootstrap</span>
				</div>
                <div className="skill-item">
					{/* <!-- JQuery --> */}
					<img src={jquery} alt = ""></img>	
						<span>Jquery</span>
				</div>
                

			</div>

			<div className="skill-type">
				<h5>Backend</h5>
				<div className="skill-item">
				{/* 	<!-- Node Js + Express JS --> */}
                        <img src={nodejs} alt = ""></img>	
						<span>Node Js + Express JS</span>
				</div>	
                <div className="skill-item">
				{/* 	<!-- ASP.NET --> */}
                        <img src={aspnet} alt = ""></img>	
						<span>Asp.net</span>
                </div>
               
			</div>

			<div className="skill-type">
				<h5>Databases</h5>
				<div className="skill-item">
				{/* 	<!-- SQLLite/MSSQL --> */}
                        <img src={sql} alt = ""></img>	
						<span>SQLLite/MSSQL</span>
				</div>	
                <div className="skill-item">
				{/* 	<!-- PostgreSQL --> */}
                        <img src={postgreSQL} alt = ""></img>	
						<span>PostgreSQL</span>
                </div>
                <div className="skill-item">
				{/* 	<!-- MongoDB --> */}
                  <img src={mongoDB} alt = ""></img>	
						<span>MongoDB</span>
				
                </div>
             
			</div>

			<div className="skill-type">
				<h5>Others</h5>
				<div className="skill-item">
				{/* 	<!-- Git --> */}
                        <img src={git} alt = ""></img>	
						<span>Git</span>
				</div>	
                <div className="skill-item">
				{/* 	<!-- GitHub --> */}
                        <img src={gitHub} alt = ""></img>	
						<span>GitHub</span>
                </div>
               
             </div>
           
            </div>
        

        </div>
    )
}
export default Aboutme;


