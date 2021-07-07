import './Navigation.css';
import { React } from 'react';

// Icons
import { HiMenu } from 'react-icons/hi';

function Navigation() {
	const getList = () => {
		return (
			<div className='NavList'>
				<button className='NavLink'>
					<p>ABOUT ME</p>
				</button>
				<button className='NavLink'>
					<p>PROJECTS</p>
				</button>
				<button className='NavLink'>
					<p>SKILLS</p>
				</button>
				<button className='NavLink'>
					<p>EDUCATION</p>
				</button>
				<button className='NavLink'>
					<p>CONTACT</p>
				</button>
				<button className='ResumeButton'>
					<p>RESUME</p>
				</button>
			</div>
		);
	};

	return (
		<div className='Navigation'>
			<span className='NavHeader'>Stefan</span>
			<span className='Menu'>{getList()}</span>
			<span className='MobileMenu'>
				<HiMenu id='menu-icon' />
				{getList()}
			</span>
		</div>
	);
}

export default Navigation;
