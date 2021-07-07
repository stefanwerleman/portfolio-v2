import './About.css';
import React from 'react';

// Router
import { Link } from 'react-router-dom';

import Img from './profile-pic.png';

function About() {
	return (
		<div className='About'>
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
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the
							release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<Link to='/contact'>
						<button className='ContactMeButton'>CONTACT ME</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
