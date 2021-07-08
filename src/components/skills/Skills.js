import './Skills.css';
import React from 'react';

// Child Component
import Skill from '../skill/Skill';

// Tools
import { langauges, frameworks, technologies, icons } from '../utils/tools';

function Skills() {
	const totalYears = 4;

	return (
		<div className='Skills'>
			<div className='Bookmark'>
				<p>03</p>
				<hr />
			</div>
			<div className='SkillsBody'>
				<p className='SectionHeader'>Skills</p>
				<div className='SubSection'>
					<p className='SubSectionHeader'>Languages</p>
					<div className='SkillsContainer'>
						{langauges.map((lang) => (
							<Skill
								key={lang.name}
								name={lang.name}
								years={lang.years}
								max={totalYears}
								icon={icons[lang.name.toLowerCase()]}
								color={lang.color}
							/>
						))}
					</div>
				</div>
				<div className='SubSection'>
					<p className='SubSectionHeader'>Frameworks</p>
					<div className='SkillsContainer'>
						{frameworks.map((frame) => (
							<Skill
								key={frame.name}
								name={frame.name}
								years={frame.years}
								max={totalYears}
								icon={icons[frame.name.toLowerCase()]}
								color={frame.color}
							/>
						))}
					</div>
				</div>
				<div className='SubSection'>
					<p className='SubSectionHeader'>Technologies</p>
					<div className='SkillsContainer'>
						{technologies.map((tech) => (
							<Skill
								key={tech.name}
								name={tech.name}
								years={tech.years}
								max={totalYears}
								icon={icons[tech.name.toLowerCase()]}
								color={tech.color}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
