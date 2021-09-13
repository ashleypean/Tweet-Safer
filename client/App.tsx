import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Menu from './components/Menu';
import 'antd/dist/antd.css';
import './App.css';
import { PageHeader } from 'antd';

const App: React.FC = () => {
  return (
    <Router>
      <div className="header">
        <PageHeader
          className="site-page-header"
          title="TweetSafer"
          subTitle="A Better Way to Tweet"
          backIcon={true}
          onBack={() => window.history.back()}
        />
      </div>
      <div className="App">
        <Menu />

        <div style={{width: '80%'}}>
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </div>

     
    </Router>
  )
};

export default App;