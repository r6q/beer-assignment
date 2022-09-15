Run `npm start` command to start the local server:

## Task: 
Display all the beers from the Brewdog Api in a card format. If you click on a beer card, you will be taken to a further details page, which displays more detail around the ingredients in the beer.

API: `https://api.punkapi.com/v2/beers` - returns all beers

- Each beer card should display the name and description, and on hover show the tagline.
- A button to toggle show/hide beers that are brewed before or on 2010
- Use React router to click on a beer card and then display the following further information on a separate page: 'ph', 'food_pairing', 'brewers_tips', and the 'method' - the method includes child elements, so make sure they're displayed too.

## Tech:
- JS/React/React router (2 pages: home & further details)

> Note: No design systems such as material, bootstrap, etc should be used.

In terms of styling, generic card styling will work, Bootstrap have a good example: https://getbootstrap.com/docs/4.0/components/card/ - where the image is first, then the title, then the description and a button (which can be hooked up to navigate to the further details). When it comes to styling the further details page, don't go too heavy on styling, just showing the details is more important, a generic box will work for styling.

Nice to have but not necessary: further filtering options on the homepage.

Please don't spend more than 2 hours on this task.
