
import './App.css'
import React,{Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Route} from "react-router-dom";

 export default class App extends Component{
  pageSize=10;
  render(){
    return(
      <div>
          <Router>
           <Navbar/>
           <Routes>
            <Route excat path="/" element={<News key='Home' pageSize={this.pageSize} country="us" category="Home" />}> </Route>
            <Route excat path="Business" element={<News key='Business' pageSize={this.pageSize} country="us" category="Business" />}> </Route>
            <Route excat path="Entertainment" element={<News key='Entertainment' pageSize={this.pageSize} country="us" category="Entertainment" />}> </Route>
            <Route excat path="General" element={<News key='General' pageSize={this.pageSize} country="us" category="General" />}> </Route>
            <Route excat path="Health" element={<News key='Health' pageSize={this.pageSize} country="us" category="Health" />}> </Route>
            <Route excat path="Science" element={<News key='Science' pageSize={this.pageSize} country="us" category="Science" />}> </Route>
            <Route excat path="Sports" element={<News key='Sports' pageSize={this.pageSize} country="us" category="Sports" />}> </Route>
            <Route excat path="Technology" element={<News key='Technology' pageSize={this.pageSize} country="us" category="Technology" />}> </Route>
          </Routes>
          <News/>
           
          </Router>
      </div>
    )
  }
 }


