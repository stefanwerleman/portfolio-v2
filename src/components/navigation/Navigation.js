import './Navigation.css';
import { React } from 'react';

// Router
import { Link } from 'react-router-dom';

// Assets
import { HiMenu } from 'react-icons/hi';
import Resume from './swresume.pdf';

function Navigation() {
	const getNavList = () => {
		return (
			<div className='NavList'>
				<Link to='/about'>
					<button className='NavLink'>
						<p>01.</p>
						<p>ABOUT ME</p>
					</button>
				</Link>
				<Link to='/projects'>
					<button className='NavLink'>
						<p>02.</p>
						<p>PROJECTS</p>
					</button>
				</Link>
				<Link to='/skills'>
					<button className='NavLink'>
						<p>03.</p>
						<p>SKILLS</p>
					</button>
				</Link>
				<Link to='/education'>
					<button className='NavLink'>
						<p>04.</p>
						<p>EDUCATION</p>
					</button>
				</Link>
				<Link to='/contact'>
					<button className='NavLink'>
						<p>05.</p>
						<p>CONTACT</p>
					</button>
				</Link>
				<a href={Resume} target='_blank' rel='noreferrer'>
					<button className='ResumeButton'>
						<p>RESUME</p>
					</button>
				</a>
			</div>
		);
	};

	return (
		<div className='Navigation'>
			<Link to='/'>
				<span className='NavHeader'>Stefan</span>
			</Link>
			<span className='Menu'>{getNavList()}</span>
			<span className='MobileMenu'>
				<HiMenu id='menu-icon' />
				{getNavList()}
			</span>
		</div>
	);
}

export default Navigation;
