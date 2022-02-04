import './Skill.css';
import React from 'react';

// Assets
import { useInView } from 'react-intersection-observer';

function Skill({ name, year, icon, color }) {
	const [currentYear, setCurrentYear] = React.useState(
		new Date().getFullYear()
	);

	let years = currentYear - year;
	let max = currentYear - 2017;

	const calcPercent = () => {
		let yearTemp = years <= 0 ? 0.6 : years;

		return Math.round((yearTemp / max) * 100);
	};

	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	return (
		<div className='Skill' ref={ref}>
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
								animation: inView ? 'none' : 'none',
							}}
						/>
						<circle
							cx='70'
							cy='70'
							r='70'
							style={{
								'--stroke': color,
								'--percent': calcPercent(),
								animation: inView
									? 'startTransition 2.5s'
									: 'none',
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
