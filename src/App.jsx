import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Login from './components/Login';
import Feed from './components/Feed';
import About from './components/About';
import appStore from './utils/appStore';
import './App.css';
import './styles.css';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path='/feed' element={<Feed />}/>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;