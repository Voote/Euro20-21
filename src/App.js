import './assets/styles.scss';
import Fixtures from './components/fixtures';

const App = () => (
  <div className="App">
    <header>
      <h1>Euro 20/21 fixtures</h1>
    </header>
    <section>
      <Fixtures />
    </section>
  </div>
);

export default App;
