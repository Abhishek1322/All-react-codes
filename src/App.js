import logo from './logo.svg';
// import './App.css';
import NewsApp from './components/NewsApp';
import NewsPagination from './components/NewsPagination';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotePad from './components/NotePad';
import TabApi from './components/TabApi'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<NewsPagination />} />
          <Route path='notepad' element={<NotePad />} />
        </Routes>
      </Router>
      {/* <NewsApp /> */}
      {/* <TabApi /> */}
    </div>
  );
}

export default App;
