import './assets/styles.scss';
// import Fixtures from './components/fixtures';
import Group from './components/group';

const App = () => (
  <div className="App">
    <header>
      <h1>Euro 20/21 fixtures</h1>
    </header>
    <section>
      <Group />
    </section>
  </div>
);

export default App;
