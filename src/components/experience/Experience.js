import './Experience.css';
import React from 'react';

import Siemens from './siemens.png';
import Qorvo from './qorvo.jpeg';

function Experience() {
	return (
		<div className='Experience' id='experience'>
			<div className='Bookmark'>
				<p>02</p>
				<hr />
			</div>
			<div className='ExperienceBody'>
				<p className='SectionHeader'>Experience</p>
				<div className='Company'>
					<img src={Qorvo} alt='qorvo-logo' />
					<div className='CompanyBody'>
						<p className='CompanyName'>
							Software Engineer Intern, EDA Automation
						</p>
						<div className='CompanyInfo'>
							<p>Qorvo</p>
							<p>February 2022 - Present</p>
						</div>
						{/* <p className='Description'>
							Developing a job listing platform exclusively for
							job seekers and employers within the energy
							industry.
						</p> */}
					</div>
				</div>
				<div className='Company'>
					<img src={Siemens} alt='siemens-logo' />
					<div className='CompanyBody'>
						<p className='CompanyName'>Software Engineer Intern</p>
						<div className='CompanyInfo'>
							<p>Siemens</p>
							<p>August 2021 - February</p>
						</div>
						<p className='Description'>
							Developed a job listing platform exclusively for job
							seekers and employers within the energy industry.
							Met with talent acquisition executives to promote
							and demo the prototype.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
