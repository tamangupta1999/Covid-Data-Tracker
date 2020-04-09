import React,{useState} from 'react'
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Sidebar from './../../components/Navigation/Sidebar/Sidebar';
import classes from './AppLayout.module.css';

const  AppLayout = (props) =>{
    const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
    
    const sidebarClosedHandler = () => {
        setSidebarIsVisible(false);
    }

    const sidebarToggleHandler = () => {
        setSidebarIsVisible(!sidebarIsVisible);
    }
    return (
        <React.Fragment>
        <Toolbar toggle={sidebarToggleHandler} />
        <Sidebar
            open={sidebarIsVisible} closed={sidebarClosedHandler} />
        <main className={classes.Content}>
            {props.children}
        </main>
    </React.Fragment>
    )
}

export default AppLayout;

