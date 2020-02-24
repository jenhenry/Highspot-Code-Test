<h1>Highspot Front End Dev Code Test</h1>
      <h3>Technology used:</h3>
      <ul>
          <li>React (create-react-app and react-infinite-scroll-component)</li>
          <li>Bootstrap 4</li>
          <li>Axios</li>
      </ul>
   <h3>Notes:</h3>
<h4>Deployment</h4>
<p>This app can be deployed on an application server, or to deploy on a static server, use npm run build. To run the app locally, use npm start. You can also view this app from my Heroku account, at <a href="https://highspot-code-test.herokuapp.com/" target="_blank">https://highspot-code-test.herokuapp.com/</a></p>

<h4>Visuals</h4>
<p>The font for the app is Ubuntu, which is the font used on the Highspot company web page. The Highspot logo and icon are also pulled from the Highspot company web page.</p>
<p>The card images appear to come in three visual types, with two different dimensions. Cards like "Raise Dead" are 350px across, with very narrow margins. The more common cards are 409px across with wide margins. The third type is 409px across but with narrower margins (see the card "J'Zargo"). The CardImage component applies different styles for the two widths, which tweaks the image size and margins to make the display of the images more visually consistent.</p>

<h4>Functionality and Structure</h4>
<p>The display of the search results are wrapped in a separate component in order to reduce the number of queries to the API. If the user clears the search, the app displays the cards that were loaded before the search, and does not need to communicate with the API until the infinite scroll is triggered, or another search is made.</p>
<p>Since the app is so small, I chose to keep the structure relatively flat. I decided not to break the javascript out into a separate "helper" file, to make review of the code easier.</p>

<h4>Misc.</h4>
<p>Some cards have a "|" at the end of their descriptive text. This is removed when the app parses the data returned from the API.</p>
<p>I was able to test in Chrome and Firefox on a Windows Surface, and in Chrome on an Android phone.</p>

<h4>Possible future enhancements:</h4>
<ul>
  <li>Store loaded cards in localStorage</li>
  <li>Allow user to sort and filter loaded cards - by set, alphabetically, action, etc.</li>
  <li>Allow user to "save" cards returned from the search to the previously loaded cards list.</li>
</ul>
