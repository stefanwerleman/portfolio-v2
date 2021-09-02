import './Contact.css';
import React from 'react';

// Assets
import { MdEmail } from 'react-icons/md';
import { SiLinkedin, SiGithub } from 'react-icons/si';

function Contact() {
	return (
		<div className='Contact' id='contact'>
			<div className='Bookmark'>
				<p>06</p>
				<hr />
			</div>
			<div className='ContactContainer'>
				<p className='SectionHeader'>Contact Me</p>
				<div className='ContactLinks'>
					<a href='mailto:stefanfwerleman@gmail.com' rel='noreferrer'>
						<button className='LinkButton'>
							<MdEmail className='ContactIcon' />
							<p className='Label'>Email</p>
							<p className='ContactLink'>
								stefanfwerleman@gmail.com
							</p>
						</button>
					</a>
					<a
						href='https://www.linkedin.com/in/stefanwerleman/'
						target='_blank'
						rel='noreferrer'>
						<button className='LinkButton'>
							<SiLinkedin />
							<p className='Label'>LinkedIn</p>
							<p className='ContactLink'>
								linkedin.com/in/stefanwerleman
							</p>
						</button>
					</a>
					<a
						href='https://github.com/stefanwerleman'
						target='_blank'
						rel='noreferrer'>
						<button className='LinkButton'>
							<SiGithub />
							<p className='Label'>GitHub</p>
							<p className='ContactLink'>
								github.com/stefanwerleman
							</p>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
