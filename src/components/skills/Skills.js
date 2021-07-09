import './Skills.css';
import React from 'react';

// Child Component
import Skill from '../skill/Skill';

// Tools
import { langauges, frameworks, technologies, icons } from '../utils/tools';

function Skills() {
	const totalYears = 4;

	const languageSection = () => {
		return (
			<div className='SubSection' id='languages'>
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
		);
	};

	const frameworksSection = () => {
		return (
			<div className='SubSection' id='frameworks'>
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
		);
	};

	const technologiesSection = () => {
		return (
			<div className='SubSection' id='technologies'>
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
		);
	};

	const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
	React.useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	});

	const [section, setSection] = React.useState(0);

	const toggleSections = () => {
		if (section === 0) {
			return languageSection();
		} else if (section === 1) {
			return frameworksSection();
		} else if (section === 2) {
			return technologiesSection();
		} else {
			return languageSection();
		}
	};

	return (
		<div className='Skills' id='skills'>
			<div className='Bookmark'>
				<p>03</p>
				<hr />
			</div>
			<div className='SkillsBody'>
				<p className='SectionHeader'>Skills</p>
				<div className='ButtonGroup'>
					<button
						onClick={() => {
							setSection(0);
						}}>
						LANGUAGES
					</button>
					<button
						onClick={() => {
							setSection(1);
						}}>
						FRAMEWORKS
					</button>
					<button
						onClick={() => {
							setSection(2);
						}}>
						TECHNOLOGIES
					</button>
				</div>

				{screenWidth > 768 ? (
					<div>
						{languageSection()}
						{frameworksSection()}
						{technologiesSection()}
					</div>
				) : (
					toggleSections()
				)}
			</div>
		</div>
	);
}

export default Skills;
