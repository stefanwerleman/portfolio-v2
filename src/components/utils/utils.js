import {
	SiCodio,
	SiCplusplus,
	SiJava,
	SiJavascript,
	SiPython,
	SiHtml5,
	SiCss3,
	SiNodeDotJs,
	SiReact,
	SiLinux,
	SiJest,
	SiMongodb,
	SiMocha,
	SiWindows,
	SiRuby,
	SiTypescript,
	SiMysql,
	SiDjango,
	SiElectron,
	SiFirebase,
	SiGit,
	SiGithub,
} from 'react-icons/si';

import { VscJson } from 'react-icons/vsc';

export const icons = {
	c: <SiCodio className='SkillIcon' style={{ color: '#5c6bc0' }} />,
	'c++': <SiCplusplus className='SkillIcon' style={{ color: '#649ad2' }} />,
	java: <SiJava className='SkillIcon' style={{ color: '#ec2025' }} />,
	javascript: (
		<SiJavascript
			className='SkillIcon'
			style={{ color: '#f7e018', backgroundColor: 'black' }}
		/>
	),
	html5: <SiHtml5 className='SkillIcon' style={{ color: '#e44d26' }} />,
	css3: <SiCss3 className='SkillIcon' style={{ color: '#379ad6' }} />,
	python: <SiPython className='SkillIcon' style={{ color: '#008397' }} />,
	sql: (
		<SiMysql
			className='SkillIcon'
			style={{ color: '#00608c', fontSize: '2.8em' }}
		/>
	),
	typescript: (
		<SiTypescript className='SkillIcon' style={{ color: '#2f74c0' }} />
	),
	ruby: <SiRuby className='SkillIcon' style={{ color: '#e51f49' }} />,
	reactjs: <SiReact className='SkillIcon' style={{ color: '#7ddfff' }} />,
	nodejs: <SiNodeDotJs className='SkillIcon' style={{ color: '#689f63' }} />,
	mongodb: <SiMongodb className='SkillIcon' style={{ color: '#50aa4c' }} />,
	'react native': (
		<SiReact className='SkillIcon' style={{ color: '#7ddfff' }} />
	),
	mocha: <SiMocha className='SkillIcon' style={{ color: '#8d6748' }} />,
	jest: <SiJest className='SkillIcon' style={{ color: '#99425b' }} />,
	django: <SiDjango className='SkillIcon' style={{ color: '#1d7254' }} />,
	mysql: (
		<SiMysql
			className='SkillIcon'
			style={{ color: '#00608c', fontSize: '2.8em' }}
		/>
	),
	electronjs: (
		<SiElectron className='SkillIcon' style={{ color: '#7ddfff' }} />
	),
	linux: <SiLinux className='SkillIcon' style={{ color: '#747c92' }} />,
	git: <SiGit className='SkillIcon' style={{ color: '#f05033' }} />,
	github: <SiGithub className='SkillIcon' style={{ color: '#747c92' }} />,
	json: <VscJson className='SkillIcon' style={{ color: '#f7e018' }} />,
	firebase: <SiFirebase className='SkillIcon' style={{ color: '#f7a213' }} />,
	windows: <SiWindows className='SkillIcon' style={{ color: '#00bdf6' }} />,
};

export const langauges = [
	{ name: 'C', years: 4, color: '#5c6bc0' },
	{ name: 'Java', years: 4, color: '#ec2025' },
	{ name: 'C++', years: 3, color: '#649ad2' },
	{ name: 'JavaScript', years: 3, color: '#f7e018' },
	{ name: 'HTML5', years: 3, color: '#e44d26' },
	{ name: 'CSS3', years: 3, color: '#379ad6' },
	{ name: 'Python', years: 2, max: 4, color: '#008397' },
	{ name: 'SQL', years: 0, color: '#00608c' },
	{ name: 'TypeScript', years: 0, color: '#2f74c0' },
	{ name: 'Ruby', years: 1, color: '#2f74c0' },
];

export const frameworks = [
	{ name: 'ReactJS', years: 3, color: '#7ddfff' },
	{ name: 'NodeJS', years: 3, color: '#689f63' },
	{ name: 'MongoDB', years: 2, color: '#50aa4c' },
	{ name: 'React Native', years: 2, color: '#7ddfff' },
	{ name: 'Mocha', years: 1, color: '#8d6748' },
	{ name: 'Jest', years: 1, color: '#99425b' },
	{ name: 'Django', years: 1, color: '#1d7254' },
	{ name: 'MySQL', years: 0, color: '#00608c' },
	{ name: 'ElectronJS', years: 0, color: '#7ddfff' },
];

export const technologies = [
	{ name: 'Linux', years: 4, color: '#747c92' },
	{ name: 'Git', years: 4, color: '#f05033' },
	{ name: 'GitHub', years: 4, color: '#747c92' },
	{ name: 'Windows', years: 4, color: '#00bdf6' },
	{ name: 'JSON', years: 3, color: '#f7e018' },
	{ name: 'Firebase', years: 1, color: '#f7a213' },
];
