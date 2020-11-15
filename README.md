# TEST FOR GJ

app available at https://trusting-wing-003bc6.netlify.app/

## problems encountered :
CORS on APIS feels quiet random,I had to setup a proxy server to be able to see data on development. Somehow had still some inconscistant problems in production (and not much time to do this). delt with it by handeling error on fetch and displaying data when available.

## What I used
 * Typescript
 * Create react app
 * React Context for sharing state between components
 * Tailwindcss for style and responsiveness with default settings

## What could be improved

Apart from the CORS pb, type and interfaces are a bit all over the place. thats the main thing. Maybe a bit of hierarchie between Atoms and molecules in the components folder wouldn't hurt. Other than that considering the small amount of time I had to put into this, it's quiet alright I think.

## dev environment

`yarn start` for starting dev server
