import React from 'react';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = { search_for: this.props.search_value };
		this.doSearch = this.doSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(evt) {
		if (evt.target.value === '') {
			this.props.clearSearch();
		}
		this.setState({ search_for: evt.target.value });
	}
	doSearch(evt) {
		evt.preventDefault();
		this.setState({ search_for: evt.target.search.value });
		this.props.doSearch(evt.target.search.value);
	}
	render() {
		return (
			<nav className='navbar sticky-top navbar-light'>
				<a className='navbar-brand' href='#'>
					<svg
						className='logo'
						version='1.1'
						id='Layer_1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						x='0px'
						y='0px'
						viewBox='0 0 530 107.8'
						enableBackground='new 0 0 530 107.8'
						xmlSpace='preserve'
					>
						<circle className='logo__circle' cx='53.9' cy='53.9' r='53.9' />
						<path
							className='logo__hourglass'
							d='M53.9,0C24.1,0,0,24.1,0,53.9s24.1,53.9,53.9,53.9s53.9-24.1,53.9-53.9S83.7,0,53.9,0z M53.9,8.9
 c24.8,0,45,20.2,45,45s-20.2,45-45,45c-12,0-23.3-4.7-31.8-13.2c-1.8-1.8-1.8-4.6,0-6.3L35.4,66c-2.3-3.5-3.6-7.6-3.6-12.1
 c0-12.2,9.9-22.1,22.1-22.1S76,41.7,76,53.9S66.1,76,53.9,76c-4.5,0-8.6-1.3-12.1-3.6l-9.9,9.9c6.3,4.9,14.1,7.6,22,7.6
 c19.8,0,36-16.1,36-36c0-19.8-16.1-36-36-36s-36,16.1-36,36c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5C8.9,29.1,29.1,8.9,53.9,8.9
 L53.9,8.9z M53.9,40.9c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S61.1,40.9,53.9,40.9L53.9,40.9z'
						/>
						<path
							className='logo__text'
							d='M166.7,27.1c-2.5,0-4.5,1.9-4.5,4.2v18.1h-27.8V31.3c0-2.3-1.9-4.2-4.2-4.2c-2.5,0-4.5,1.9-4.5,4.2v45.3
 c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.4-1.9,4.4-4.3V57.2h27.8v19.5c0,2.4,2,4.3,4.4,4.3s4.4-1.9,4.4-4.3V31.3
 C170.9,29,169,27.1,166.7,27.1L166.7,27.1z M186,27.1c-2.5,0-4.5,1.9-4.5,4.2v45.4c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.4-1.9,4.4-4.3
 V31.3C190.3,29,188.3,27.1,186,27.1L186,27.1z M242,49.5h-16.5c-2.2,0-3.9,1.7-3.9,3.8c0,2.2,1.7,3.8,3.9,3.8h13.4v11.3
 c-2.5,2.3-7.2,4.9-12.7,4.9c-10.8,0-18.6-8.1-18.6-19.3c0-11.1,7.8-19.2,18.6-19.2c4.7,0,9.4,1.9,12.6,5.1c0.8,0.8,1.8,1.3,2.9,1.3
 c2.2,0,4-1.8,4-4c0-1.2-0.4-2.2-1.1-2.8c-4.8-4.8-11.1-7.3-18.4-7.3c-16,0-27.6,11.3-27.6,26.9s11.6,27,27.6,27
 c13.3,0,21.5-7.1,21.5-13.6V55C247.6,52,245.1,49.5,242,49.5L242,49.5z M297.6,27.1c-2.5,0-4.5,1.9-4.5,4.2v18.1h-27.8V31.3
 c0-2.3-1.9-4.2-4.2-4.2c-2.5,0-4.5,1.9-4.5,4.2v45.3c0,2.4,1.9,4.3,4.3,4.3s4.4-1.9,4.4-4.3V57.2h27.8v19.5c0,2.4,2,4.3,4.4,4.3
 s4.4-1.9,4.4-4.3V31.3C301.9,29,299.9,27.1,297.6,27.1L297.6,27.1z M331.3,48.8c-6.2-1.6-11.5-3-11.5-7.2c0-4.1,3.7-6.9,9.3-6.9
 c4.6,0,8.9,1.4,12.5,4c0.7,0.5,1.5,0.8,2.4,0.8c2.2,0,4.1-1.8,4.1-4c0-1.1-0.4-2.1-1.2-2.7c-3.8-3.5-10.4-5.7-17.2-5.7
 c-10.8,0-18.7,6.3-18.7,15.1c0,10.6,9.5,13.1,17.9,15.3c6.7,1.8,12.4,3.3,12.4,8.3c0,3.5-2.8,7.5-10.8,7.5c-6.3,0-10.9-2.8-13.7-5.1
 c-0.7-0.5-1.6-0.8-2.5-0.8c-2.5,0-4,2.2-4,4.2c0,1,0.4,1.9,1.1,2.7c4.2,4.1,11.3,6.6,18.8,6.6c14.7,0,20-8.2,20-15.9
 C350.1,53.7,339.7,51,331.3,48.8z M380.7,27.1h-16.6c-3,0-5.5,2.5-5.5,5.6v44c0,2.4,1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3V60.3h13.5
 c11.6,0,16.9-8.6,16.9-16.6C397.7,33.9,390.7,27.1,380.7,27.1z M367.2,34.8h12.5c5.4,0,9.1,3.7,9.1,8.9c0,5.1-3.7,8.9-9.1,8.9h-12.5
 V34.8z M492.4,27.1H458c-2.2,0-3.9,1.7-3.9,3.9c0,2.3,1.7,4,3.9,4h12.8v41.7c0,2.4,1.9,4.3,4.3,4.3s4.4-1.9,4.4-4.3V35h12.8
 c2.1,0,3.9-1.7,3.9-3.9C496.2,28.8,494.6,27.1,492.4,27.1L492.4,27.1z M429.4,27.1c-14.9,0-27,12.1-27,27s12.1,27,27,27
 s27-12.1,27-27C456.3,39.2,444.2,27.1,429.4,27.1L429.4,27.1z M448.6,54c0,10.6-8.6,19.2-19.2,19.2s-19.2-8.6-19.2-19.2
 s8.6-19.2,19.2-19.2S448.6,43.4,448.6,54z'
						/>
					</svg>
				</a>
				<form className='form-inline' onSubmit={this.doSearch}>
					<div className='input-group'>
						<input
							className='form-control'
							type='search'
							placeholder='Search by Name'
							aria-label='Search'
							id='search'
							name='search'
							value={this.state.search_for}
							onChange={this.handleChange}
						/>
						<div className='input-group-append'>
							<button className='btn btn-outline' type='submit'>
								<i className='fas fa-search' />
							</button>
						</div>
					</div>
				</form>
			</nav>
		);
	}
}

export default Nav;
