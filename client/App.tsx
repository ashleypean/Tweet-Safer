import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Menu from './components/Menu';
import 'antd/dist/antd.css';
import './App.css';
import Modal from './components/Modals/Modal';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Header from './components/Header';

const App: React.FC = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Modal 
        isOpen={modalOpen} 
        modalType={modalType} 
        setModalOpen={setModalOpen} 
      />
      <Header />

      <div className="App">
        <Menu />
        <div style={{width: '80%'}}>
          <Switch>
            {isLoggedIn && (
              <>
                <Route path="/" component={Home} />
                <Route component={Home} />
              </>
            )}
            <Route render={() => 
            <Auth setIsLoggedIn={setIsLoggedIn} />} />
          </Switch>
        </div>
      </div>

     
    </Router>
  )
};

export default App;