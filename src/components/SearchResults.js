import React from 'react';
import CardLineup from './CardLineup';

class SearchResults extends React.Component {
	render() {
		if (this.props.cards.length) {
			return (
				<React.Fragment>
					<CardLineup cards={this.props.cards} />
				</React.Fragment>
			);
		}

		return <div className='result_none'>Oh no! We couldn't find any cards that match your search.</div>;
	}
}

export default SearchResults;
