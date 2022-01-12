# Kings of War Listbuilder

This app lets you create lists for Kings of War version 3, with Clash of Kings 2022 and FAQ 1.14 updates.

Functionality:
- Warns you if your list doesn't conform to the list building rules around unlocks
- Warns you if you have too many duplicate Heroes/Monsters/Titans/War Engines for the points size
- Warns you if you have too many unique units or upgrades
- Warns you if you have any duplicate artefacts
- Doesn't let you add more than one formation with the same name
- Doesn't let you add heroic artefacts to non-hero units
- Adds in-built options to units in formations, and updates the statline accordingly (and says it has done so in the unit profile)
- For all other options/artefacts, the unit's stats are not updated.

What this listbuilder doesn't do is let you save lists, take allies, or give you a rules reference sheet. I don't intend to add these pieces of functionality to the app.

## TODOS:

### Functionality
- legendary upgrade with choice of different types of upgrade/effect, eg. varangur devoted icon ('sharesLimitWith')
- required upgrade
- non-formation upgrade changes stat line
- things where an option disallows a particular other option/options
- things where an option disallows artefacts
- things where an option on one unit is an upgrade for another unit (including making them not irregular / removing their limit)
- limits other than [1] eg. night raiders upgrade, thunderseers upgrade
- exchange things for other things
- artefact limitations eg. taken on individuals only


## Dev stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
