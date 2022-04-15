import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from 'redux/store';
import Routing from 'routes/Routing';
import { MyThemeProvider } from 'common/components';

import 'common/styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ReduxProvider store={store}>
      <MyThemeProvider>
        <Router>
          <CssBaseline />
          <Routing />
        </Router>
      </MyThemeProvider>
    </ReduxProvider>
  );
}

export default App;
