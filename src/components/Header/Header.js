import s from "./Header.module.css";
import {NavLink} from 'react-router-dom'


const Header = (props) => {
    return(
        <header className={s.header}>
            <NavLink to="/" className={s.logoContainer}>
			    <img alt="" src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png" className={s.logo}/>                
                <h1 className={s.logoName}>Logo</h1>
            </NavLink>
            <ul>
                <li>Home</li>
                <li>Messages</li>
                <li>Music</li>
                <li>Notifications</li>
                <li>Exit</li>
                <li>{props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div> : <NavLink to="/login"><div className={s.loginBlock}>Login</div></NavLink>}</li>
            </ul>
		</header>
    );
}

export default Header;