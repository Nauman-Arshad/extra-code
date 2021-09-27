import React from 'react';
import { Route, Switch } from "react-router-dom"

import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import Menu from './Component/Menu';

const App = () => {
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error} />

            </Switch>

            {/* <About />
            <Contact /> */}
        </>
    );
}


function Home() {
    return (
        <div>
            <h1>Welcome Home</h1>
        </div>
    )
}
export default App;