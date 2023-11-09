import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import About from './routes/about/About';
import NotFound from './routes/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='/' element={<Home />} />  
          <Route path='/about' element={<About />} />  
          <Route path='/about/:id' element={<About />} />  
          <Route path='*' element={<NotFound />} />        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
