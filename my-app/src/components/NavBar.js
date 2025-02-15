import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const  NavBar =()=> {

            return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{padding: "3px"}}>
                <Link className="nav-link active" aria-current="page" to="/" style={{fontSize: "30px"}}>News Monkey</Link>
                </li>
                <li style={{margin: "15px"}} className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li  style={{margin: "15px"}} className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li  style={{margin: "15px"}} className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li  style={{margin: "15px"}} className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                <li  style={{margin: "15px"}} className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li  style={{margin: "15px"}} className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li  style={{margin: "15px"}} className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li  style={{margin: "15px"}} className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
            
            </div>
        </div>
        </nav>
      </div>
    )
  }


export default NavBar
