import React from 'react';
import CardImage from './CardImage';

export default function Card(props) {
	const { img, name, text, type, set } = props.info;
	return (
		<div className='card h-100'>
			<div className='card-header'>{set}</div>
			<CardImage img={img} name={name} />
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<h6 className='card-subtitle'>{type}</h6>
				<p className='card-text'>{text}</p>
			</div>
		</div>
	);
}
