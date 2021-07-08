import './Skills.css';
import React from 'react';

// Child Component
import Skill from '../skill/Skill';

// Tools
import { langauges, frameworks, technologies, icons } from '../utils/tools';

function Skills() {
	return (
		<div className='Skills'>
			<div className='Bookmark'>
				<p>03</p>
				<hr />
			</div>
			<div className='SkillsBody'>
				<p className='SectionHeader'>Skills</p>
				<div className='SubSection'>
					<p>Languages</p>
					{langauges.map((lang) => (
						<Skill
							key={lang.name}
							name={lang.name}
							years={lang.years}
							max={lang.max}
							icon={icons[lang.name.toLowerCase()]}
						/>
					))}
				</div>
				<div className='SubSection'>
					<p>Frameworks</p>
					{frameworks.map((frame) => (
						<Skill
							key={frame.name}
							name={frame.name}
							years={frame.years}
							max={frame.max}
							icon={icons[frame.name.toLowerCase()]}
						/>
					))}
				</div>
				<div className='SubSection'>
					<p>Technologies</p>
					{technologies.map((tech) => (
						<Skill
							key={tech.name}
							name={tech.name}
							years={tech.years}
							max={tech.max}
							icon={icons[tech.name.toLowerCase()]}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Skills;
