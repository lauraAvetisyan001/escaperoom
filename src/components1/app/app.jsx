import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components1/common/common';
import DetailedQuest from 'components1/detailed-quest/detailed-quest';
import Contacts from 'components1/contacts/contacts';
import Home from 'components1/home/home';
import { appTheme } from './common';
import * as S from './app.styled';

const App = () => (
  // <ThemeProvider theme={appTheme}>
  //   <S.GlobalStyle />
  //   <Router>
  //     <Switch>
  //       <Route exact path="/quest">
  //         <DetailedQuest />
  //       </Route>
  //       <Route exact path="/contacts">
  //         <Contacts />
  //       </Route>
  //       <Route path="/">
  //         <Home />
  //       </Route>
  //     </Switch>
  //   </Router>
  // </ThemeProvider>

  <div>Hello</div>

);

export default App;