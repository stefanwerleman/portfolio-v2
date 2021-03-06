import './Projects.css';
import React from 'react';

// Child Component
import Project from '../project/Project';

// Assets
import { websites, mobiles, algorithms, desktop, others } from '../utils/utils';
import { HiMenu } from 'react-icons/hi';

function Projects() {
	const [section, setSection] = React.useState(0);

	const websiteSection = () => {
		return (
			<div id='website' className='SubSection'>
				<p className='SubSectionHeader'>Websites</p>
				<div className='ProjectsContainer'>
					{websites.map((website, i) => (
						<Project
							key={website.name}
							id={i}
							name={website.name}
							url={website.url}
							github={website.github}
							description={website.description}
							tools={website.tools}
							image={website.image}
						/>
					))}
				</div>
			</div>
		);
	};

	const mobileSection = () => {
		return (
			<div id='mobile' className='SubSection'>
				<p className='SubSectionHeader'>Mobile Applications</p>
				<div className='ProjectsContainer'>
					{mobiles.map((mobile, i) => (
						<Project
							key={mobile.name}
							id={i}
							name={mobile.name}
							url={mobile.url}
							github={mobile.github}
							description={mobile.description}
							tools={mobile.tools}
							image={mobile.image}
						/>
					))}
				</div>
			</div>
		);
	};

	const algorithmsSection = () => {
		return (
			<div id='algorithm' className='SubSection'>
				<p className='SubSectionHeader'>
					Algorithms and Data Structures
				</p>
				<div className='ProjectsContainer'>
					{algorithms.map((algorithm, i) => (
						<Project
							key={algorithm.name}
							id={i}
							name={algorithm.name}
							url={algorithm.url}
							github={algorithm.github}
							description={algorithm.description}
							tools={algorithm.tools}
							image={algorithm.image}
						/>
					))}
				</div>
			</div>
		);
	};

	const desktopSection = () => {
		return (
			<div id='desktop' className='SubSection'>
				<p className='SubSectionHeader'>Desktop Applications</p>
				<div className='ProjectsContainer'>
					{desktop.map((desktop, i) => (
						<Project
							key={desktop.name}
							id={i}
							name={desktop.name}
							url={desktop.url}
							github={desktop.github}
							description={desktop.description}
							tools={desktop.tools}
							image={desktop.image}
						/>
					))}
				</div>
			</div>
		);
	};

	const otherSection = () => {
		return (
			<div id='other' className='SubSection'>
				<p className='SubSectionHeader'>Other Projects</p>
				<div className='ProjectsContainer'>
					{others.map((other, i) => (
						<Project
							key={other.name}
							id={i}
							name={other.name}
							url={other.url}
							github={other.github}
							description={other.description}
							tools={other.tools}
							image={other.image}
						/>
					))}
				</div>
			</div>
		);
	};

	const renderSectionButtons = () => {
		return (
			<div className='ProjectGroup'>
				<button
					onClick={() => {
						setSection(0);
					}}>
					WEBSITES
				</button>
				<button
					onClick={() => {
						setSection(1);
					}}>
					MOBILE
				</button>
				<button
					onClick={() => {
						setSection(2);
					}}>
					ALGORITHMS AND DATA STRUCTURES
				</button>
				<button
					onClick={() => {
						setSection(3);
					}}>
					DESKTOP
				</button>
				<button
					onClick={() => {
						setSection(4);
					}}>
					OTHER
				</button>
			</div>
		);
	};

	const toggleSection = () => {
		if (section === 0) {
			return websiteSection();
		} else if (section === 1) {
			return mobileSection();
		} else if (section === 2) {
			return algorithmsSection();
		} else if (section === 3) {
			return desktopSection();
		} else if (section === 4) {
			return otherSection();
		} else {
			return websiteSection();
		}
	};

	return (
		<div className='Projects' id='projects'>
			<div className='Bookmark'>
				<p>03</p>
				<hr />
			</div>
			<div className='ProjectsBody'>
				<p className='SectionHeader'>Projects</p>
				<div className='MobileButtonGroup'>
					<button className='DropdownButton'>
						<HiMenu />
						{renderSectionButtons()}
					</button>
				</div>
				<div className='WebButtonGroup'>{renderSectionButtons()}</div>
				{toggleSection()}
			</div>
		</div>
	);
}

export default Projects;
