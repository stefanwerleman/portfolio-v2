import './App.css';

// Router
import { BrowserRouter } from 'react-router-dom';

// Child Components
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<Home />
				<About />
				<Projects />
				<Skills />
				<Education />
				<Contact />
			</BrowserRouter>
		</div>
	);
}

export default App;
