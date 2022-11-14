import React from "react";

const img = "image.jpg";
const myname= "hege@example.com";
function About() {
    return(
        <>
        <img src={img} id="img2"/>
      {/* <p id="p">{myname}</p> */}
      <div className="container-fluid">
        <div className="card">
          <div className="card-header bg-primary">Header</div>
          <div className="card-body">Content</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card">
          <div className="card-header bg-success">Header</div>
          <div className="card-body">Content</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card">
          <div className="card-header bg-info">Header</div>
          <div className="card-body">Content</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card">
          <div className="card-header bg-warning">Header</div>
          <div className="card-body">Content</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card">
          <div className="card-header bg-danger">Header</div>
          <div className="card-body">Content</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card">
          <div className="card-header bg-secondary">Header</div>
          <div className="card-body">Content</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card">
          <div className="card-header bg-dar text-light">Header</div>
          <div className="card-body">Content</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card">
          <div className="card-header bg-danger">Header</div>
          <div className="card-body">Content</div>
          <div className="card-footer">footer</div>
        </div>
      </div>
      <p id="p">{myname}</p>
</>
    )
}
export default About;