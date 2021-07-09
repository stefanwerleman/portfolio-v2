import './Projects.css';
import React from 'react';

// Child Component
import Project from '../project/Project';

// Assets 
import { websites, mobiles, algorithms, desktop, others } from '../utils/utils';


function Projects() {
	const [section, setSection] = React.useState(0);

	const websiteSection = () => {
		return (<div className='SubSection'><p className='SubSectionHeader' >Websites</p></div>)
	}

	const mobileSection = () => {
                return (<div className='SubSection'><p className='SubSectionHeader' >Mobile Applications</p></div>)
        }

	const algorithmsSection = () => {
                return (<div className='SubSection'><p className='SubSectionHeader' >Algorithms and Data Structures</p></div>)
        }

	const desktopSection = () => {
                return (<div className='SubSection'><p className='SubSectionHeader' >Desktop Applications</p></div>)
        }

	const otherSection = () => {
                return (<div className='SubSection'><p className='SubSectionHeader' >Other Projects</p></div>)
        }


	const toggleSection = () => {
		if (section === 0) {} 
		else if (section === 1) {}
		else if (section === 2) {}
		else if (section === 3) {}
		else if (section === 4) {}
		else {}
	};

	return (
		<div className='Projects' id='projects'>
			<div className='ProjectsBody'>
				<p className='SectionHeader'>Projects</p>

				{websiteSection()}
				{mobileSection()}
				{algorithmsSection()}
				{desktopSection()}
				{otherSection()}
				{websites.map((website) => (<Project name={website.name} url={website.url} github={website.github} description={website.description} tools={website.tools} image={website.image}/>))}	
			</div>
		</div>
	);
}

export default Projects;
