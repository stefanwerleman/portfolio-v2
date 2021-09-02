import './project_utils.css';
import MathJax from 'react-mathjax';

const constant = `O(1)`;
const logarithmic = `O(log \\ n)`;
const linear = `O(n)`;
const nlogn = `O(n \\ log \\ n)`;
const n = `n`;
const str = `str`;
const key = `key`;

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
						<td>Search</td>
						<td>
							<MathJax.Node formula={logarithmic} />
						</td>
						<td>
							<MathJax.Node formula={linear} />
						</td>
					</tr>
					<tr>
						<td>Insertion</td>
						<td>
							<MathJax.Node formula={logarithmic} />
						</td>
						<td>
							<MathJax.Node formula={linear} />
						</td>
					</tr>

					<tr>
						<td>Deletion</td>
						<td>
							<MathJax.Node formula={logarithmic} />
						</td>
						<td>
							<MathJax.Node formula={linear} />
						</td>
					</tr>
				</table>
				<p>Space Complexity</p>
				<table>
					<tr>
						<th>Average Case</th>
						<th>Worst Case</th>
					</tr>
					<tr>
						<td>
							<MathJax.Node formula={linear} />
						</td>
						<td>
							<MathJax.Node formula={nlogn} />
						</td>
					</tr>
				</table>
			</MathJax.Provider>
		</div>
	);
}

export function SneakyKnights() {
	return (
		<div className='Description'>
			<MathJax.Provider>
				Developed two functions in Java and Python that receives a list
				of coordinates for knights on a chess board an and determines
				whether any of the knights can attack one another.
				<br />
				<br />
				The method runs with an average runtime of{' '}
				<MathJax.Node inline formula={linear} /> time where{' '}
				<MathJax.Node inline formula={n} /> is the number of knights on
				the chess board.
			</MathJax.Provider>
		</div>
	);
}

export function ListyStrings() {
	return (
		<div className='Description'>
			<MathJax.Provider>
				Made two parsers in C and C++ that parses any string from an
				input file and produces a linked list of the characters in the
				string.
				<br />
				<br />
				This container includes the following operations:
				<ul>
					<li>
						<span className='Function'>replace(key, str)</span>
						<ul className='NestedUL'>
							<li>
								Replaces all instances of{' '}
								<MathJax.Node inline formula={key} /> with{' '}
								<MathJax.Node inline formula={str} /> in the
								working lisy string.
							</li>
						</ul>
					</li>
					<li>
						<span className='Function'>append(str)</span>
						<ul className='NestedUL'>
							<li>
								Converts <MathJax.Node inline formula={str} />{' '}
								into a listy string and then appends it to the
								main working listy string.
							</li>
						</ul>
					</li>
					<li>
						<span className='Function'>delete(key)</span>
						<ul className='NestedUL'>
							<li>
								Deletes all instances of{' '}
								<MathJax.Node inline formula={key} /> in the
								working listy string.
							</li>
						</ul>
					</li>
					<li>
						<span className='Function'>reverse()</span>
						<ul className='NestedUL'>
							<li>Reverses the working listy string.</li>
						</ul>
					</li>
					<li>
						<span className='Function'>size()</span>
						<ul className='NestedUL'>
							<li>
								Returns the number of nodes in the listy string.
							</li>
						</ul>
					</li>
					<li>
						<span className='Function'>print()</span>
						<ul className='NestedUL'>
							<li>Prints the listy string.</li>
						</ul>
					</li>
				</ul>
			</MathJax.Provider>
		</div>
	);
}

export function ConstrainedTopoSort() {
	return (
		<div className='Description'>
			Implemented a Java method that verifies whether an arbitrary
			directed graph has a valid topological ordering. This method can
			make comparisons between any datatype or defined comparable
			structure.
		</div>
	);
}

export function LonelyPartyArray() {
	return (
		<div className='Description'>
			Developed two dynamic array-like data structure containers in C and
			C++ that limits any unused and wasted space like a typical array
			does.
			<br />
			<br />
			Utilized GCC's -print-memory-usage flags to compare the memory usage
			between this data structure and normal arrays as well as Valgrind to
			check for any memory leaks in a Linux environment.
		</div>
	);
}

export function KindredSpirits() {
	return (
		<div className='Description'>
			Built a C++ program that checks if two binary trees are reflections
			of each other.
			<br />
			<br />
			Created a Binary Tree container class from scratch to utilize as
			inputs. Utilized recursion and pointer arithmetic to verify each
			node at their respective positions.
		</div>
	);
}

export function SneakyRooks() {
	return (
		<div className='Description'>
			<MathJax.Provider>
				Built a C++ program that receives coordinates of rooks on a
				chess board and determine if all the rooks on the board cannot
				attack each other.
				<br />
				<br />
				The method runs with an average runtime of{' '}
				<MathJax.Node inline formula={linear} /> time where{' '}
				<MathJax.Node inline formula={n} /> is the number of rooks on
				the chess board.
			</MathJax.Provider>
		</div>
	);
}

export function TrieClass() {
	return (
		<div className='Description'>
			<MathJax.Provider>
				Developed a Ruby container class that implements the trie data
				structure.
				<p>Time Complexity for a Trie</p>
				<table>
					<tr>
						<th>Operation</th>
						<th>Best Case</th>
						<th>Worst Case</th>
					</tr>
					<tr>
						<td>Search</td>
						<td>
							<MathJax.Node formula={constant} />
						</td>
						<td>
							<MathJax.Node formula={linear} />
						</td>
					</tr>
					<tr>
						<td>Insertion</td>
						<td>
							<MathJax.Node formula={linear} />
						</td>
						<td>
							<MathJax.Node formula={linear} />
						</td>
					</tr>

					<tr>
						<td>Deletion</td>
						<td>
							<MathJax.Node formula={constant} />
						</td>
						<td>
							<MathJax.Node formula={linear} />
						</td>
					</tr>
				</table>
			</MathJax.Provider>
		</div>
	);
}

// Desktop
export function AlgoVisionKnightsDesktop() {
	return (
		<div className='Description'>
			This is the desktop version of the AlgoVisionKnights application.
			The purpose for this desktop application is to give the user the
			freedom to download use the visualizers in an offline setting.
			<br />
			<br />
			Once you enter the site the download button should be on the
			top-right with the correct operating system.
		</div>
	);
}

// Others
export function Cloudflare() {
	return (
		<div className='Description'>
			Developed a JavaScript application that randomly opens one of two
			pages whenever a user enters the site. Click on the link to see the
			site and try to refresh the page multiple times to see it switch
			contents. Both pages have a 50% chance of being loaded.
			<br />
			<br />
			This application was for an internship challenge with Cloudflare
			that allowed applications to demonstrate their technical skills with
			Cloudflare technologies.
		</div>
	);
}
