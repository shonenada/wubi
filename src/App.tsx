import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Practice from './pages/Practice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="practice" element={<Practice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
