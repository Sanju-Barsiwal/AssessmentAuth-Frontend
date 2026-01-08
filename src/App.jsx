import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import About from './components/About';
import Feed from './components/Feed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="feed" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;