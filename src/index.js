import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter, Switch} from 'react-router-dom';
import App from './App';
import FullPost from './components/pages/FullPost';
import registerServiceWorker from './registerServiceWorker';


const routs = (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/:slug" component={FullPost}/>
        </Switch>
    </HashRouter>
);

ReactDOM.render(routs, document.getElementById('root'));
registerServiceWorker();
