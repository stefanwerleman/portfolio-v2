import './About.css';
import React from 'react';

// Router
import { HashLink } from 'react-router-hash-link';

// Assets
import Img from './profile-pic.png';

function About() {
	return (
		<div className='About' id='about'>
			<div className='Bookmark'>
				<p>01</p>
				<hr />
			</div>
			<div className='AboutBody'>
				<img className='AboutImage' src={Img} alt='profile-pic' />
				<div className='AboutDescription'>
					<div className='SectionText'>
						<p className='SectionHeader'>About Me</p>
						<p className='SectionBody'>
							Hello, friend! My name is{' '}
							<span>Stefan Werleman</span> and I am a software
							engineer at <span>Qorvo</span> with a master's
							degree in Computer Science from the University of
							Central Florida. I love to read, write, and sleep
							code. I enjoy solving problems ranging from simple
							puzzle problems to real-world problems and love
							turning those solutions into usable software to help
							others. So if you have project idea or a problem,
							don't hesitate to contact me!
						</p>
					</div>
					<HashLink to='/#contact' smooth>
						<button className='ContactMeButton'>CONTACT ME</button>
					</HashLink>
				</div>
			</div>
		</div>
	);
}

export default About;
