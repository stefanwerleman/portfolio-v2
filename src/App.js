import './App.css';

// Router
import { BrowserRouter, Route } from 'react-router-dom';

// Child Components
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<Route path='/'>
					<Home />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
