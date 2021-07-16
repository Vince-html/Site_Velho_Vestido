import GlobalStyle from './globalStyles';
import Routes from './Routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </>
  );
}
export default App;
