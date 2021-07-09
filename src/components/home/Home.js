import './Home.css';
import React from 'react';

import Img from './self_image.png';

function Home() {
	return (
		<div className='Home' id='/#'>
			<div className='FrontHeader'>
				<img className='FrontImage' src={Img} alt='self_image' />
				<div className='FrontBody'>
					<p className='HeaderName'>Stefan Werleman</p>
					<p className='SubName'>Full Stack Developer</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
