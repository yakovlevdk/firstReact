import logo from './logo.svg';
import './App.css';

// Всё декларативный

import { createElement } from 'react';

export const App = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', {
				className: 'App-logo',
				src: logo,
				alt: 'logo',
			}),
			createElement('p', null, 'Edit src/App.js and save to reload.'),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, currentYear),
		),
	);
};
