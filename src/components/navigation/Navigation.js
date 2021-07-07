import './Navigation.css';
import { React } from 'react';

// Icons
import { HiMenu } from 'react-icons/hi';

function Navigation() {
	const getNavList = () => {
		return (
			<div className='NavList'>
				<button className='NavLink'>
					<p>01.</p>
					<p>ABOUT ME</p>
				</button>
				<button className='NavLink'>
					<p>02.</p>
					<p>PROJECTS</p>
				</button>
				<button className='NavLink'>
					<p>03.</p>
					<p>SKILLS</p>
				</button>
				<button className='NavLink'>
					<p>04.</p>
					<p>EDUCATION</p>
				</button>
				<button className='NavLink'>
					<p>05.</p>
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
			<span className='Menu'>{getNavList()}</span>
			<span className='MobileMenu'>
				<HiMenu id='menu-icon' />
				{getNavList()}
			</span>
		</div>
	);
}

export default Navigation;
