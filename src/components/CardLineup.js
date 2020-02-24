import React from 'react';
import Card from './Card';

class CardLineup extends React.Component {
	constructor(props) {
		super(props);
		this.generateCards = this.generateCards.bind(this);
	}

	generateCards() {
		let col_class = 'norm';
		if (this.props.cards.length === 1) {
			col_class = 'result_single';
		}

		return this.props.cards.map((card) => {
			return (
				<div className={`col col-sm-6 col-lg-4 ${col_class}`} key={card.id}>
					<Card key={card.id} info={card} />
				</div>
			);
		});
	}

	render() {
		return (
			<div className='CardLineup container'>
				<div className='row'>
					<div className='card-deck'>{this.generateCards()}</div>
				</div>
			</div>
		);
	}
}

export default CardLineup;
