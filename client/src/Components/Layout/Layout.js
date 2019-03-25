import React, {Fragment} from 'react';
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import Toolbar from "../UI/Toolbar/Toolbar";

const Layout = props =>{
    return(
        <Fragment>
            <Header>
                <Toolbar/>
            </Header>
            <main className='Layout-Content'>
                {props.children}
            </main>
            <Footer>Here will be footer</Footer>
        </Fragment>
    );
};

export default Layout;