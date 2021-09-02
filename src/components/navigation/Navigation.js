import './Navigation.css';
import { React } from 'react';

// Router
import { HashLink } from 'react-router-hash-link';

// Assets
import { HiMenu } from 'react-icons/hi';
import Resume from './swresume.pdf';

function Navigation() {
	const getNavList = () => {
		return (
			<div className='NavList'>
				<HashLink to='/#about' smooth>
					<button className='NavLink'>
						<p>01.</p>
						<p>ABOUT ME</p>
					</button>
				</HashLink>
				<HashLink to='/#experience' smooth>
					<button className='NavLink'>
						<p>02.</p>
						<p>EXPERIENCE</p>
					</button>
				</HashLink>
				<HashLink to='/#projects' smooth>
					<button className='NavLink'>
						<p>03.</p>
						<p>PROJECTS</p>
					</button>
				</HashLink>
				<HashLink to='/#skills' smooth>
					<button className='NavLink'>
						<p>04.</p>
						<p>SKILLS</p>
					</button>
				</HashLink>
				<HashLink to='/#education' smooth>
					<button className='NavLink'>
						<p>05.</p>
						<p>EDUCATION</p>
					</button>
				</HashLink>
				<HashLink to='/#contact' smooth>
					<button className='NavLink' smooth>
						<p>06.</p>
						<p>CONTACT</p>
					</button>
				</HashLink>
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
			<HashLink to='/#' smooth>
				<span className='NavHeader'>Stefan</span>
			</HashLink>
			<span className='Menu'>{getNavList()}</span>
			<span className='MobileMenu'>
				<HiMenu id='menu-icon' />
				{getNavList()}
			</span>
		</div>
	);
}

export default Navigation;
