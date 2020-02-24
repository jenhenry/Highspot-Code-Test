import React from 'react';

export default function Loader() {
	return (
		<div className='container loader'>
			<div className='circle lg'>
				<div className='circle md'>
					<div className='circle sm'>
						<div className='circle smlr' />
					</div>
				</div>
			</div>
			<span id='loading'>Loading...</span>
		</div>
	);
}
