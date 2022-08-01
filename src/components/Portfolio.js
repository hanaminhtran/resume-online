import "../aboutme.css"
import shoping_cart_project from "../assets/media/shopping_cart_project.png";
import resume_project from "../assets/media/resume_project.jpg";
import movie_database_project from "../assets/media/movie_database_project.png";






const Portfolio = () => {
    return (
        <div><h2 className="portfolio-heading">Portfolio</h2>
        <div className="main-container-child">
           
            
            <div className="project-card">
                <div className="card-container h-100 card">
                    <div className="card-body card-body">
                        <div className="card-image">
                            <a><img className="card-img" src={shoping_cart_project} alt=""></img></a>
                        </div>
                        <div className="card-text">
                            <a href="https://peaceful-atoll-45768.herokuapp.com/" target="_blank"><h4 className="card-title"><strong>Shopping Cart</strong></h4></a>
                            <p className="card-text">Built with React, Redux, Bootstrap, HTML, and CSS to add, remove, increase quantity in the cart, search products, calculate total</p>
                        </div>
                    </div>

                    <div className="card-footer card-footer">
                        <a href="https://peaceful-atoll-45768.herokuapp.com/">
                            <button type="button" className="btn btn-secondary center">View Project</button>
                        </a>
                        <h6 className="card-text">React,Redux,Bootstrap,HTML,CSS</h6>
                    </div>
                </div>
				
          </div>

          <div className="project-card">
                <div className="card-container h-100 card">
                    <div className="card-body card-body">
                        <div className="card-image">
                            <a><img className="card-img" src={resume_project} alt=""></img></a>
                        </div>
                        <div className="card-text">
                            <a href="https://peaceful-atoll-45768.herokuapp.com/" target="_blank"><h4 className="card-title"><strong>Movie Database Management</strong></h4></a>
                            <p className="card-text">Built the frontend with features including pagination, sorting, searching, login, register, authorization, etc. using React and Bootstrap. Connected to a MongoDB database and built RESTful APIs for CRUD operations using Node.js and Express.js</p>
                        </div>
                    </div>

                    <div className="card-footer card-footer">
                        <a href="https://peaceful-atoll-45768.herokuapp.com/">
                            <button type="button" className="btn btn-secondary center">View Project</button>
                        </a>
                        <h6 className="card-text">React,Node.js,Express.js,MongoDB,Bootstrap,HTML,CSS</h6>
                    </div>
                </div>
				
          </div>

          <div className="project-card">
                <div className="card-container h-100 card">
                    <div className="card-body card-body">
                        <div className="card-image">
                            <a><img className="card-img" src={movie_database_project} alt=""></img></a>
                        </div>
                        <div className="card-text">
                            <a href="https://peaceful-atoll-45768.herokuapp.com/" target="_blank"><h4 className="card-title"><strong>Resume Builder</strong></h4></a>
                            <p className="card-text">Built the frontend with features including login, register, authorization, etc. using HTML and Bootstrap. Added the feature to create a custom number of fields of each section in the resume using jQuery and Django formset. Connected to SQLite database and built RESTful APIs for CRUD operations using Django</p>
                        </div>
                    </div>

                    <div className="card-footer card-footer">
                        <a href="https://peaceful-atoll-45768.herokuapp.com/">
                            <button type="button" className="btn btn-secondary center">View Project</button>
                        </a>
                        <h6 className="card-text">React,Django,SQLite,Bootstrap,HTML,CSS</h6>
                    </div>
                </div>
				
          </div>
        

        </div>
        </div>
    )
}
export default Portfolio;


