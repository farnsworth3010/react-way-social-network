import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";
import UsersContainer from "./components/Pages/Users/UsersContainer"
import { Redirect, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from 'react-redux'
import { compose } from "redux";
import {initializeApp} from "./redux/app-reducer";
import { withRouter } from "react-router";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.initializeApp()
	}
	render(){
		if(!this.props.initialized){
			return <Preloader/>
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper__content">
					<Route exact path="/">
						<Redirect to="/profile"/>
					</Route>
					<Route path="/dialogs">f
						<DialogsContainer
						/>
					</Route>
					<Route path="/login" render={()=> <Login />}/>
					<Route path="/profile/:userId" render={()=> <ProfileContainer />} />
					<Route exact path="/profile" render={()=> <ProfileContainer />} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
					<Route path="/users" >
						<UsersContainer/>
					</Route>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})


export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
