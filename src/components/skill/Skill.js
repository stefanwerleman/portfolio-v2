import './Skill.css';
import React from 'react';

function Skill({ name, years, max, icon }) {
	return (
		<div className='Skill'>
			{icon}
			<span>{name}</span>
			<progress
				className='Progress'
				min='0'
				max={max}
				value={years <= 0 ? 1 : years}
				label={`${years} years`}
			/>
		</div>
	);
}
export default Skill;
