import React from 'react';
import './MainLayout.css';
import logo from './images/kuda.svg'
import AppNavbar from './components/layout/AppNavbar'
import Sidebar from './components/layout/Sidebar';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import SidebarMenu from '../data/SidebarMenu'
import {Route, Switch} from 'react-router-dom';
import Counter from '../components/Counter';
import List from '../components/List';
import Todo from '../components/Todo';
import Error404 from '../components/Error404'
import MovieList from './movies/Movies'
import RatingList from './movies/RatingList';
import studentList from './student/studentList';
import ListStudent from './student/ListStudent';
import VoteStudent from './student/VoteStudent'


const MainLayout = () =>{
    return (
        <div className="container">
            <AppNavbar/>
            <Sidebar menus = {SidebarMenu}/>
            <div className="main-content">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/counter" component={Counter} exact />
                    <Route path="/list" component={List} exact />
                    <Route path="/todo" component={Todo} exact />
                    <Route path="/movies" component={MovieList} exact />
                    <Route path="/rating" component={RatingList} exact />
                    <Route path="/student" component={studentList} exact />
                    <Route path="/studentList" exact ><ListStudent /> </Route>
                    <Route path="/voteStudent" exact ><VoteStudent /> </Route>
                    <Route component={Error404} />
                </Switch>

            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;


