import './Project.css'
import React from 'react';

// Assets
import {icons} from '../utils/utils';

function Project({ name, url, github, description, tools, image }) {
	return <div className='Project'>{name}{url}{github}{description}{tools.map((tool) => icons[tool])}


	<img src={image} alt='project image'/>

		</div>;
}

export default Project;
