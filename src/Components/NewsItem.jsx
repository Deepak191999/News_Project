import React from "react";

function NewsItem({ title, description, src, url }) {
  return (
 

            <div className=" card bg-dark text-light d-inline-block mx-4 my-3 px-2 py-2" style={{maxWidth:"250px"}}>
      <img
        src={src? src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBklIH_bc4iNW5jpGlvistxWkvVRadtJwrg&usqp=CAU'}
        style={{ height: "120px", width: "100%" }}
        className="card-img-top img-fluid  d-block "
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 40)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 60) : "Description"}
        </p>
        <a href={url} className="btn btn-primary w-100">
          Read More
        </a>
      </div>
    </div>
            


    
  );
}

export default NewsItem;
