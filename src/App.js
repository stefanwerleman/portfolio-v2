import './App.css';

// Router
import { BrowserRouter } from 'react-router-dom';

// Child Components
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
// import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<Home />
				<About />
				<Education />
				<Contact />
			</BrowserRouter>
		</div>
	);
}

export default App;
