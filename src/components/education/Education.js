import './Education.css';
import React from 'react';

// Assets
import Img from './ucf-logo.png';

function Education() {
	return (
		<div className='Education' id='education'>
			<div className='Bookmark'>
				<p>05</p>
				<hr />
			</div>
			<div className='EducationBody'>
				<p className='SectionHeader'>Education</p>
				<div className='School'>
					<img src={Img} alt='ucf-logo' />
					<div className='SchoolBody'>
						<p className='SchoolName'>
							University of Central Florida
						</p>
						<div className='SchoolInfo'>
							<p>Master of Science in Computer Science </p>
							<p>2021 - 2022</p>
						</div>
						<p className='Description'>
							Coursework: Data Science, Machine Learning,
							Networking, and Computer Vision.
						</p>
					</div>
				</div>
				<hr />
				<div className='School'>
					<img src={Img} alt='ucf-logo' />
					<div className='SchoolBody'>
						<p className='SchoolName'>
							University of Central Florida
						</p>
						<div className='SchoolInfo'>
							<p>Bachelor of Science in Computer Science </p>
							<p>GPA: 3.727</p>
							<p>2018 - 2021</p>
							<p>
								Activities and Societies: NSF FLIT-PATH Scholar,
								KnightHacks 2020
							</p>
						</div>
						<p className='Description'>
							Coursework: Competitive Programming, Functional
							Programming, Game Development, Multicore Processing,
							Software Engineering, Databases, and Web
							Development.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Education;
