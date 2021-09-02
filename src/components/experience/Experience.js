import './Experience.css';
import React from 'react';

import Img from './siemens.png';

function Experience() {
	return (
		<div className='Experience' id='experience'>
			<div className='Bookmark'>
				<p>04</p>
				<hr />
			</div>
			<div className='ExperienceBody'>
				<p className='SectionHeader'>Experience</p>
				<div className='Company'>
					<img src={Img} alt='siemens-logo' />
					<div className='CompanyBody'>
						<p className='CompanyName'>Software Engineer Intern</p>
						<div className='CompanyInfo'>
							<p>Siemens</p>
							<p>August 2021 - Present</p>
						</div>
						<p className='Description'>
							Developing a job listing platform exclusively for
							job seekers and employers within the energy
							industry.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
