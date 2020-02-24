import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchResults from './components/SearchResults';
import CardLineup from './components/CardLineup';
import Nav from './components/Nav';
import Loader from './components/Loader';
import './styles/App.css';
import './styles/loading.css';

// API pattern: pageSize=20&page=1&name=redoran
const url_base = 'https://api.elderscrollslegends.io/v1/cards';
const num_cards_to_fetch = 20;
const initial_url = `${url_base}?pageSize=${num_cards_to_fetch}&page=1`;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			cards: [],
			search_cards: [],
			cards_url: initial_url,
			searching: false,
			search_value: ''
		};

		this.parseCards = this.parseCards.bind(this);
		this.getCards = this.getCards.bind(this);
		this.doSearch = this.doSearch.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
	}

	componentDidMount() {
		// If there are not already cards in the state, load the first set
		if (!this.state.cards.length) {
			this.setState({ loading: true });
			this.getCards();
		}
	}

	// Fetch the specified cards, parse out required data
	// add the card records to the state.
	// For the infinite scroll, use the _links.next data
	// that gets returned with each request.
	async getCards() {
		try {
			const response = await axios(this.state.cards_url);
			const card_set = this.parseCards(response.data.cards);

			this.setState({
				cards_url: response.data._links.next,
				cards: [ ...this.state.cards, ...card_set ],
				loading: false
			});
		} catch (e) {
			console.log(`Error returned when trying to get cards: ${e}`);
		}
	}

	async getSearchCards(str) {
		const response = await axios(`${url_base}?name=${str}`);
		const card_set = this.parseCards(response.data.cards);
		this.setState({ searching: true, search_cards: [ ...card_set ], loading: false });
	}

	// Extract needed data only
	parseCards(data) {
		let arr = [];
		for (let i = 0; i < data.length; i++) {
			// Some cards have a rogue | at the end of the text, remove it!
			let data_text = data[i].text;
			if (data_text) {
				if (data_text[data_text.length - 1] === '|') {
					data_text = data_text.slice(0, -1);
				}
			}

			let card_record = {
				id: data[i].id,
				img: data[i].imageUrl,
				name: data[i].name,
				text: data_text,
				type: data[i].type,
				set: data[i].set.name
			};

			arr.push(card_record);
		}
		return arr;
	}

	doSearch(str) {
		// If the search string is empty, we're not actually searching!
		// Revert to already accumulated cards.
		if (str !== '') {
			this.setState(
				(st) => ({ searching: true, loading: true, search_value: str }),
				() => {
					this.getSearchCards(str);
				}
			);
		} else {
			this.clearSearch();
		}
	}

	clearSearch() {
		this.setState({ searching: false, search_cards: [], search_value: '' });
	}

	// If we're displaying search results, swap in the SearchResults component.
	// This removes the need to call the API again if the search is cleared.
	displayCardSection() {
		const { cards, search_cards, searching } = this.state;
		if (searching) {
			return <SearchResults cards={search_cards} />;
		} else {
			return (
				<InfiniteScroll dataLength={cards.length} next={this.getCards} hasMore={true} loader={<Loader />}>
					<CardLineup cards={cards} />
				</InfiniteScroll>
			);
		}
	}

	render() {
		if (this.state.loading) {
			return <Loader />;
		}

		return (
			<div className='App'>
				<Nav doSearch={this.doSearch} clearSearch={this.clearSearch} search_value={this.state.search_value} />
				{this.displayCardSection()}
			</div>
		);
	}
}

export default App;
