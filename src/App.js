
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscontainer from './components/Newscontainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Searchcontainer from './components/Searchcontainer';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
      search: ''
    }
  }
  handleThemeClick = (e) => {
    this.setState({
      theme: e.target.id
    })
    console.log(`hello this theme changer has been called`)
    console.log(e.target.id)
    let bodyColor = 'white'
    if (e.target.id === 'light') {
      bodyColor = 'white'
    } else if (e.target.id === 'dark') {
      bodyColor = 'rgb(30,30,30)'
    } else if (e.target.id === 'success') {
      bodyColor = '#bae6b6f7'
    } else if (e.target.id === 'primary') {
      bodyColor = '#78d6fbf7'
    } else if (e.target.id === 'danger') {
      bodyColor = '#ffb2b2f7'
    }
    document.body.style.background = bodyColor
     
    document.querySelector('.theme-active').classList.remove('theme-active')
    e.target.classList.add('theme-active')
  }


  onSearchChange = (event)=>{
    this.setState({
        search: event.target.value
    })
    console.log(this.state.search)
    console.log('search changes')
    
}

  render() {

    return (
      <BrowserRouter>
        <Navbar theme={this.state.theme} handleThemeClick={this.handleThemeClick} onSearchChange={this.onSearchChange} />

        <Routes>

          <Route  path='/' element={<Newscontainer theme={this.state.theme} key={'/'} category={'general'} />} />
          <Route  path='/general' element={<Newscontainer theme={this.state.theme} key={'general'} category={'general'} />} />
          <Route  path='/sports' element={<Newscontainer theme={this.state.theme} key={'sports'} category={'sports'} />} />
          <Route  path='/entertainment' element={<Newscontainer theme={this.state.theme} key={'entertainment'} category={'entertainment'} />} />
          <Route  path='/technology' element={<Newscontainer theme={this.state.theme} key={'technology'} category={'technology'} />} />
          <Route  path='/health' element={<Newscontainer theme={this.state.theme} key={'health'} category={'health'} />} />
          <Route  path='/science' element={<Newscontainer theme={this.state.theme} key={'science'} category={'science'} />} />
          <Route  path='/business' element={<Newscontainer theme={this.state.theme} key={'business'} category={'business'} />} />
          <Route  path='/search' element={<Searchcontainer theme={this.state.theme} key={'search'} search = {this.state.search} />} />

        </Routes>
        <Footer theme={this.state.theme} />
      </BrowserRouter>


    )
  }
}

