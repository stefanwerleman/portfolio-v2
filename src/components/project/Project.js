import './Project.css';
import React from 'react';

// Assets
import { icons } from '../utils/utils';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

// If id is even, float right. Odd float left.
function Project({ id, name, url, github, description, tools, image }) {
	return (
		<div
			className='Project'
			style={{ flexDirection: id % 2 === 0 ? 'row' : 'row-reverse' }}>
			<div
				className='ProjectBody'
				style={{
					'--margin':
						id % 2 === 0 ? '	0px 40px 0px 0px' : '0px 0px 0px 40px',
				}}>
				<div className='ProjectHeading'>
					<span className='ProjectName'>{name}</span>
					<span className='ProjectLinks'>
						<a id='github-link' href={github} target='_blank'>
							<SiGithub />
						</a>
						<a id='url-link' href={url} target='_blank'>
							<FiExternalLink />
						</a>
					</span>
				</div>
				<div className='ProjectDescription'>{description}</div>
				<div className='ProjectFooter'>
					<div className='FooterHeader'>Technologies</div>
					<div>{tools.map((tool) => icons[tool])}</div>
				</div>
			</div>
			<div className='ProjectImage'>
				<img src={image} alt='project' />
			</div>
		</div>
	);
}

export default Project;
