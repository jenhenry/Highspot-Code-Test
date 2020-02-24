Technology used:
React (create-react-app and react-infinite-scroll-component)
Bootstrap
Axios

This app can be deployed on an application server, or to deploy on a static server, use npm run build. To run the app locally, use npm start. You can also view this app from my Heroku account, at 

The font for the app is Ubuntu, which is the font used on the Highspot company web page. The Highspot logo and icon are also pulled from the Highspot company web page.

The display of the search results are wrapped in a separate component in order to reduce the number of queries to the API. If the user clears the search, the app displays the cards that were loaded before the search, and does not need to communicate with the API until the infinite scroll is triggered, or another search is made.

Some cards have a "|" at the end of their descriptive text. This is removed when the app parses the data returned from the API.

The card images appear to come in three visual types, with two different dimensions. Cards like "Raise Dead" are 350px across, with very narrow margins. The more common cards are 409px across with wide margins. The third type is 409px across but with narrower margins (see the card "J'Zargo"). The CardImage component applies different styles for the two widths, which tweaks the image size and margins to make the display of the images more visually consistent.

Since the app is so small, I chose to keep the structure relatively flat. I decided not to break the javascript out into a separate "helper" file, to make review of the code easier.

I was able to test in Chrome and Firefox on a Windows Surface, and in Chrome on an Android phone.

Possible future enhancements:
Store loaded cards in localStorage
Allow user to sort and filter loaded cards - by set, alphabetically, action, etc.
Allow user to "save" cards returned from the search to the previously loaded cards list.
