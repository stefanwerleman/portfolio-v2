import './App.css';

// Router
import { BrowserRouter } from 'react-router-dom';

// Child Components
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<Home />
				<About />
				<Projects />
			</BrowserRouter>
		</div>
	);
}

export default App;
