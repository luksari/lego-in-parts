# Lego minifigs

# Live version of project
[Visit it here](https://lego-in-parts-4202137.netlify.app)
## Setup

1. Copy environmental variables file for each environment and pass necessary values to envs
```shell
cp .env.dist .env.development
cp .env.dist .env.production
```
2. Start project

```shell
npm run dev
```

## Plan

1. Create basic configuration with the following:
   1. `axios` ✅
   2. `react-query` ✅
   3. `vite` ✅
   4. `react-router` ✅
2. Create Routing for homepage ✅
3. Install Mantine to use components ✅
4. Install styling library (`emotion/styled-components`) ❌ Went for styling with `createStyles`
5. Get the homepage done ✅
   1. Fetch 3 random figures ✅
   2. Redirection to the catalog page ✅
   3. Animation of the button to provide nice look 🔜
6. Get the Catalog page done ✅
   1. Set styles for hover & focus ✅
   2. Make it accessible by tab & enter 🔜
   3. On choice redirect with passed state containing all the details about the model ✅
7. Get the summary page done
   1. Obtain data from the state or api call to url ✅
   2. Display right side with animation ✅
   3. Display form with `react-hook-form` 
   4. Implement `yup` validation schema ✅
   5. Fake api with `mswjs` ✅
   6. Redirect to home✅

## Not done but could be great to add if more time 
1. Animations with Framer motion
2. RWD
3. Revalidate UI/UX
4. Accessibility
5. Better validation rules
6. Make some common components e.g. input with mask, buttons, titles
7. Set up theme with correct colors used in application
8. E2E tests in Playwright/Cypress
9. Unit tests in `vitest`
10. Vite chunks splitting