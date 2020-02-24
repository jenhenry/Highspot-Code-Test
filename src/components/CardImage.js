import React from 'react';

// the cards come in two (approximately) different sizes, with three different
// margin sizes, making the layout look awkward. To counter that, this component
// resizes the image based on its naturalWidth, and adjusts the margins to
// create a more consistent visual style

class CardImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { card_class: 'img-type-1' };
		this.onImgLoad = this.onImgLoad.bind(this);
	}
	onImgLoad({ target: img }) {
		if (img.naturalWidth === 350) {
			this.setState({ card_class: 'img-type-2' });
		}
	}

	render() {
		const { img, name } = this.props;
		const { card_class } = this.state;
		return (
			<React.Fragment>
				<img
					src={img}
					className={`card-img-top align-self-center ${card_class}`}
					alt={`card for ${name}`}
					onLoad={this.onImgLoad}
				/>
			</React.Fragment>
		);
	}
}

export default CardImage;
