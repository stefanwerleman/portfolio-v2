import './App.css';

// Router
import { BrowserRouter } from 'react-router-dom';

// Child Components
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<Home />
				<About />
			</BrowserRouter>
		</div>
	);
}

export default App;
