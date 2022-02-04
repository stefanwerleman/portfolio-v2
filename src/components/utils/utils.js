// Icons
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
	SiDocker,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { IoTerminal } from 'react-icons/all';

// Images
import ADVweb from './images/adv-web.png';
import ADVdesktop from './images/adv-desktop.png';
import detector from './images/detector.png';
import facebook from './images/facebook-chat.png';
import paktrak from './images/paktrak.png';
import portfoliov1 from './images/portfolio-v1.png';
import portfoliov2 from './images/home.png';
import allthingsbooks from './images/allthingsbooks.png';
import omdb from './images/omdb.png';
import cloudflare from './images/cloudflare.png';
import skiplist from './images/skiplist.gif';
import knights from './images/knights.png';
import rooks from './images/rooks.png';
import trie from './images/trie.png';
import lpa from './images/lpa.png';
import kindred from './images/kindred.png';
import listystring from './images/listystring.png';
import toposort from './images/toposort.png';

// JSX for project descriptions
import {
	AlgoVisionKnightsWeb,
	DocumentDrop,
	FacebookChat,
	PlagiarismDetector,
	PortfolioV1,
	PortfolioV2,
	AllThingsBooks,
	PakTrak,
	ConstrainedTopoSort,
	KindredSpirits,
	ListyStrings,
	LonelyPartyArray,
	SkipList,
	SneakyKnights,
	SneakyRooks,
	AlgoVisionKnightsDesktop,
	Cloudflare,
	TrieClass,
} from './project_utils/project_utils';

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
	docker: <SiDocker className='SkillIcon' style={{ color: '#2391e6' }} />,
	'shell scripting': (
		<IoTerminal className='SkillIcon' style={{ color: '#1d7254' }} />
	),
};

export const langauges = [
	{ name: 'C', year: 2017, color: '#5c6bc0' },
	{ name: 'Java', year: 2017, color: '#ec2025' },
	{ name: 'C++', year: 2018, color: '#649ad2' },
	{ name: 'JavaScript', year: 2018, color: '#f7e018' },
	{ name: 'HTML5', year: 2018, color: '#e44d26' },
	{ name: 'CSS3', year: 2018, color: '#379ad6' },
	{ name: 'Python', year: 2019, color: '#008397' },
	{ name: 'Shell Scripting', year: 2020, color: '#1d7254' },
	{ name: 'Ruby', year: 2020, color: '#e51f49' },
	{ name: 'SQL', year: 2021, color: '#00608c' },
	{ name: 'TypeScript', year: 2021, color: '#2f74c0' },
];

export const frameworks = [
	{ name: 'ReactJS', year: 2018, color: '#7ddfff' },
	{ name: 'NodeJS', year: 2018, color: '#689f63' },
	{ name: 'MongoDB', year: 2019, color: '#50aa4c' },
	{ name: 'React Native', year: 2019, color: '#7ddfff' },
	{ name: 'Mocha', year: 2020, color: '#8d6748' },
	{ name: 'Jest', year: 2020, color: '#99425b' },
	{ name: 'Django', year: 2020, color: '#1d7254' },
	{ name: 'MySQL', year: 2021, color: '#00608c' },
	{ name: 'ElectronJS', year: 2021, color: '#7ddfff' },
];

export const technologies = [
	{ name: 'Linux', year: 2017, color: '#747c92' },
	{ name: 'Git', year: 2017, color: '#f05033' },
	{ name: 'GitHub', year: 2017, color: '#747c92' },
	{ name: 'Windows', year: 2017, color: '#00bdf6' },
	{ name: 'JSON', year: 2018, color: '#f7e018' },
	{ name: 'Firebase', year: 2020, color: '#f7a213' },
	{ name: 'Docker', year: 2021, color: '#2391e6' },
];

export const websites = [
	{
		name: 'AlgoVisionKnights',
		url: 'https://algovisionknights.com',
		github: 'https://github.com/AlgoVisionKnights',
		description: <AlgoVisionKnightsWeb />,
		tools: ['javascript', 'nodejs', 'reactjs', 'css3', 'jest'],
		image: ADVweb,
	},
	{
		name: 'Plagiarism Detector',
		url: null,
		github: 'https://github.com/stefanwerleman/plagiarismdetector',
		description: <PlagiarismDetector />,
		tools: ['python', 'django', 'html5', 'css3'],
		image: detector,
	},
	{
		name: 'Portfolio Version 2',
		url: null,
		github: 'https://github.com/stefanwerleman/portfolio-v2',
		description: <PortfolioV2 />,
		tools: ['javascript', 'nodejs', 'css3', 'jest'],
		image: portfoliov2,
	},
	{
		name: 'Portfolio Version 1',
		url: null,
		github: 'https://github.com/stefanwerleman/portfolio-v1',
		description: <PortfolioV1 />,
		tools: ['javascript', 'nodejs', 'css3', 'jest'],
		image: portfoliov1,
	},
	{
		name: 'Facebook Chat',
		url: null,
		github: 'https://github.com/stefanwerleman/facebook-clone',
		description: <FacebookChat />,
		tools: ['javascript', 'nodejs', 'mongodb', 'html5', 'css3', 'mocha'],
		image: facebook,
	},
	{
		name: 'Document Drop Application',
		url: null,
		github: 'https://github.com/chrisfeltner/over-my-dead-body',
		description: <DocumentDrop />,
		tools: ['javascript', 'nodejs', 'reactjs', 'css3', 'jest'],
		image: omdb,
	},
];

export const mobiles = [
	{
		name: 'All Things Books',
		url: null,
		github: 'https://github.com/KnightHacks-GMSJ/AllThingsBooks',
		description: <AllThingsBooks />,
		tools: ['javascript', 'nodejs', 'react native', 'jest'],
		image: allthingsbooks,
	},
	{
		name: 'PakTrak',
		url: null,
		github: 'https://github.com/stefanwerleman/paktrak',
		description: <PakTrak />,
		tools: ['javascript', 'nodejs', 'react native', 'sql', 'jest'],
		image: paktrak,
	},
];

export const algorithms = [
	{
		name: 'SkipList',
		url: null,
		github: null,
		description: <SkipList />,
		tools: ['java'],
		image: skiplist,
	},
	{
		name: 'Sneaky Knights',
		url: null,
		github: null,
		description: <SneakyKnights />,
		tools: ['java', 'python'],
		image: knights,
	},
	{
		name: 'Listy Strings',
		url: null,
		github: null,
		description: <ListyStrings />,
		tools: ['c', 'c++'],
		image: listystring,
	},
	{
		name: 'Constrained TopoSort',
		url: null,
		github: null,
		description: <ConstrainedTopoSort />,
		tools: ['java'],
		image: toposort,
	},
	{
		name: 'Lonely Party Array',
		url: null,
		github: null,
		description: <LonelyPartyArray />,
		tools: ['c', 'c++'],
		image: lpa,
	},
	{
		name: 'Kindred Spirits',
		url: null,
		github: null,
		description: <KindredSpirits />,
		tools: ['c++'],
		image: kindred,
	},
	{
		name: 'SneakyRooks',
		url: null,
		github: null,
		description: <SneakyRooks />,
		tools: ['c++'],
		image: rooks,
	},
	{
		name: 'Trie Class',
		url: null,
		github: 'https://github.com/stefanwerleman/trie-container',
		description: <TrieClass />,
		tools: ['ruby'],
		image: trie,
	},
];

export const desktop = [
	{
		name: 'AlgoVisionKnights',
		url: 'https://algovisionknights.com',
		github: 'https://github.com/AlgoVisionKnights',
		description: <AlgoVisionKnightsDesktop />,
		tools: ['javascript', 'nodejs', 'electronjs', 'reactjs', 'jest'],
		image: ADVdesktop,
	},
];

export const others = [
	{
		name: "Cloudflare's Workers Full Stack App",
		url: 'https://stefanwerleman-full-stack-app.stefanwerleman.workers.dev/',
		github: 'https://github.com/stefanwerleman/full-stack-app',
		description: <Cloudflare />,
		tools: ['javascript', 'nodejs'],
		image: cloudflare,
	},
];
