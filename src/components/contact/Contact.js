import './Contact.css';
import React from 'react';

// Assets
import { MdEmail } from 'react-icons/md';
import { SiLinkedin, SiGithub } from 'react-icons/si';

function Contact() {
	return (
		<div className='Contact' id='contact'>
			<div className='Bookmark'>
				<p>05</p>
				<hr />
			</div>
			<div className='ContactContainer'>
				<p className='SectionHeader'>Contact Me</p>
				<div className='ContactLinks'>
					<a href='mailto:stefanfwerleman@gmail.com' rel='noreferrer'>
						<button className='LinkButton'>
							<MdEmail className='ContactIcon' />
							<p>Email</p>
						</button>
					</a>
					<a
						href='https://www.linkedin.com/in/stefanwerleman/'
						target='_blank'
						rel='noreferrer'>
						<button className='LinkButton'>
							<SiLinkedin />
							<p>LinkedIn</p>
						</button>
					</a>
					<a
						href='https://github.com/stefanwerleman'
						target='_blank'
						rel='noreferrer'>
						<button className='LinkButton'>
							<SiGithub />
							<p>GitHub</p>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
