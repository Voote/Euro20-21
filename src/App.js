import './assets/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav';
import Group from './components/group';
import Fixtures from './components/fixtures';
import Tree from './components/tree';

const App = () => (
  <div className="App">
    <Router>
      <nav>
        <Nav />
      </nav>
      <header>
        <h1>Euro 20/21 fixtures</h1>
      </header>
      <Switch>
        <Route path="/group">
          <section>
            <Group />
          </section>
        </Route>
        <Route path="/fixtures">
          <section>
            <Fixtures />
          </section>
        </Route>
        <Route path="/tree">
          <section>
            <Tree />
          </section>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
