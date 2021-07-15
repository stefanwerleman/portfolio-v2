import './project_utils.css';
import MathJax from 'react-mathjax';

// Websites
export function AlgoVisionKnightsWeb() {
	return (
		<div className='Description'>
			This website is an algorithms and data structures visualizer and
			encyclopedia. This resource is meant to help beginners learn the
			core Computer Science fundamentals. It shows the following:
			<ul>
				<li>
					Interactive visualizers for the users to use to understand
					how the specific algorithm or data structure works
				</li>
				<li>
					Paired with each visualizer is an encyclopedia that gives a
					detailed explanation on the algorithm or data structure.
				</li>
			</ul>
		</div>
	);
}

export function PlagiarismDetector() {
	return (
		<div className='Description'>
			This application is a plagiarism detector that takes raw text, pdfs,
			and word documents as input and scans the contents for plagiarism.
			This is a free tool for students use when writing papers for class
			assignmnents.
			<br />
			<br />
			The API I used to scan the inputs is the{' '}
			<a href='https://copyleaks.com/' target='_blank' rel='noreferrer'>
				CopyLeaks
			</a>{' '}
			API.
		</div>
	);
}

export function PortfolioV2() {
	return (
		<div className='Description'>
			This is the second iteration of my portfolio. This is one is more
			vibrant than my first iteration and contains more visuals to relay
			more information about me. Feel free to check the github link if you
			want to use this as a template.
		</div>
	);
}

export function PortfolioV1() {
	return (
		<div className='Description'>
			This was the first iteration of my portfolio. Feel free to check the
			github link if you want to use it as a template.
		</div>
	);
}

export function FacebookChat() {
	return (
		<div className='Description'>
			This full stack application is an open chat box for any user to use.
			Every night at midnight the chat box is cleared to save space in the
			database.
		</div>
	);
}

export function DocumentDrop() {
	return (
		<div className='Description'>
			This is a platform for users to store sensitive information and have
			them sent to specified individuals if an untimely death occurs.
		</div>
	);
}

// Mobile Apps
export function AllThingsBooks() {
	return (
		<div className='Description'>
			This mobile application is a search engine but for books. Here a
			user can search for a list of books by entering any of the
			following:
			<ul>
				<li>Title</li>
				<li>Author name</li>
				<li>Publisher</li>
				<li>Genre</li>
			</ul>
		</div>
	);
}

export function PakTrak() {
	return (
		<div className='Description'>
			This is a package tracking application that allows user check the
			status of their packages and keep their previous orders in history
			records. To find a package, the user has to submit the tracking
			number with its respective carrier.
			<br />
			<br />
			Used the{' '}
			<a
				href='https://www.shipengine.com/'
				target='_blank'
				rel='noreferrer'>
				ShipEngine
			</a>{' '}
			API to query shipping information.
		</div>
	);
}

// Algorithms and Data Structures
export function SkipList() {
	const logn = `O(log n)`;

	return (
		<div className='Description'>
			<MathJax.Provider>
				A Java container class for the Skip List data structure. Search,
				insertion, and deletion are implemented by using a linked
				hierarchy that allows the operation to skip elements instead of
				doing a linear search.
				<p>Time Complexity</p>
				<table>
					<tr>
						<th>Operation</th>
						<th>Average Case</th>
						<th>Worst Case</th>
					</tr>
					<tr>
						<MathJax.Node formula={logn} />
						<MathJax.Node formula={logn} />
					</tr>
				</table>
			</MathJax.Provider>
		</div>
	);
}

export function SneakyKnights() {
	return <div className='Description'>SneakyKnights</div>;
}

export function ListyStrings() {
	return <div className='Description'>ListyStrings</div>;
}

export function ConstrainedTopoSort() {
	return <div className='Description'>ConstrainedTopoSort</div>;
}

export function LonelyPartyArray() {
	return <div className='Description'>LonelyPartyArray</div>;
}

export function KindredSpirits() {
	return <div className='Description'>KindredSpirits</div>;
}

export function SneakyRooks() {
	return <div className='Description'>SneakyRooks</div>;
}

// Desktop
export function AlgoVisionKnightsDesktop() {
	return (
		<div className='Description'>
			This is the desktop version of the AlgoVisionKnights application.
			The purpose for this desktop application is to give the user the
			freedom to download use the visualizers in an offline setting.
		</div>
	);
}

// Others
export function Cloudflare() {
	return <div className='Description'>Cloudflare</div>;
}

export function TrieClass() {
	return <div className='Description'>TrieClass</div>;
}
