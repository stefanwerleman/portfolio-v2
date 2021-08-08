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
							<span>Stefan Werleman</span> and I am an incoming
							graduate student at the University of Central
							Florida majoring in Computer Science. I am currently
							seeking a Software Engineering entry-level or
							internship position. I enjoy solving complex
							problems and turning them into software that can
							help others. I am always striving to stay on the
							cutting-edge of technology to solve new problems.
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
