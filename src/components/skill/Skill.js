import './Skill.css';
import React from 'react';

function Skill({ name, years, max, icon, color }) {
	const calcPercent = () => {
		let yearTemp = years <= 0 ? 0.6 : years;

		return Math.round((yearTemp / max) * 100);
	};

	return (
		<div className='Skill'>
			<div className='Card'>
				<div
					className='ToolTip'
					style={{
						'--stroke': color,
					}}>
					{name}
				</div>
				<div className='Content'>
					<p>{icon}</p>
				</div>
				<div className='Percent'>
					<svg>
						<circle
							cx='70'
							cy='70'
							r='70'
							style={{
								'--stroke': color,
								'--percent': calcPercent(),
							}}
						/>
						<circle
							cx='70'
							cy='70'
							r='70'
							style={{
								'--stroke': color,
								'--percent': calcPercent(),
							}}
						/>
						<text
							className='ContentText'
							x='50%'
							y='50%'
							textAnchor='middle'
							fill='#747c92'
							dy='.9em'>
							{years <= 0 ? '< 1' : years}{' '}
							{years > 1 ? 'years' : 'year'}
						</text>
					</svg>
				</div>
			</div>
		</div>
	);
}
export default Skill;
