import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, Switch} from 'react-router-dom';
import App from './App';
import FullPost from './components/posts/FullPost';
import Dashboard from './components/dashboard/Dashboard';
import SearchResult from './components/SearchResult';
import registerServiceWorker from './registerServiceWorker';


const routs = (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/article/:slug" component={FullPost}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/SearchResult" component={SearchResult}/>
            <Route path="/article:/:slug/dashboard" component={Dashboard}/>
        </Switch>
    </HashRouter>
);

ReactDOM.render(routs, document.getElementById('root'));
registerServiceWorker();
