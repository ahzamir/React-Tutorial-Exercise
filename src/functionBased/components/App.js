import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import TodoContainer from './TodoContainer';
import NotMatch from '../pages/NotMatch';

const App = () => (
  <Routes>
    <Route exact path="/" element={<TodoContainer />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotMatch />} />
  </Routes>
);

export default App;
