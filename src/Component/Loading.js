import React from 'react';

import loadingBar from '../images/Loading.gif';

export default function Loading() {
	return (
		<div className="loading-container">
			<img alt="" src={loadingBar} />
		</div>
	);
}
