import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export class Navbar extends Component {

    constructor(props) {
        super(props)
    }

   
    render() {
        return (
            <>
                <nav className={`navbar navbar-expand-md ${this.props.theme !== 'light' ? 'navbar-dark' : ''} bg-${this.props.theme}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand active" to="/">My News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ms-auto  mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${window.location.pathname === '/' || window.location.pathname === '/general' ? 'active' : ''}`} aria-current="page" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${window.location.pathname === '/business' ? 'active' : ''}`} to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${window.location.pathname === '/entertainment' ? 'active' : ''}`} to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${window.location.pathname === '/health' ? 'active' : ''}`} to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${window.location.pathname === '/science' ? 'active' : ''}`} to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${window.location.pathname === '/sports' ? 'active' : ''}`} to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${window.location.pathname === '/technology' ? 'active' : ''}`} to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="dropdown d-flex justify-content-between mx-1 my-1">

                    <form className="form-inline d-flex">
                        <input onChange={this.props.onSearchChange} value={this.props.search} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link  to="/search"  type='button' className={`btn btn-sm btn-${this.props.theme === 'light' ? 'dark' : this.props.theme}`}> <i className="fa-solid fa-magnifying-glass"></i>  </Link>
                    </form>
                    <button className={`btn btn-sm btn-${this.props.theme === 'light' ? 'dark' : this.props.theme} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Theme
                    </button>
                    <ul className={`dropdown-menu text-bg-${this.props.theme === 'light' ? 'light' : this.props.theme}`}>
                        <li className='theme-container theme-active' onClick={this.props.handleThemeClick} id='light'>
                            <div className='mx-1 theme-box' style={{ backgroundColor: 'white' }}> </div> Light </li>
                        <li onClick={this.props.handleThemeClick} id='dark' className='theme-container'><div className='mx-1 theme-box' style={{ backgroundColor: 'rgb(25,25,25)' }}> </div> Dark </li>
                        <li onClick={this.props.handleThemeClick} id='success' className='theme-container'><div className='mx-1 theme-box' style={{ backgroundColor: 'green' }}> </div> Green </li>
                        <li onClick={this.props.handleThemeClick} id='primary' className='theme-container'><div className='mx-1 theme-box' style={{ backgroundColor: 'blue' }}> </div> Blue </li>
                        <li onClick={this.props.handleThemeClick} id='danger' className='theme-container'><div className='mx-1 theme-box' style={{ backgroundColor: 'red' }}> </div> Red </li>

                    </ul>
                </div>
            </>
            // business entertainment general health science sports technology
        )
    }
}

export default Navbar
