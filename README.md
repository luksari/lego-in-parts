# Lego minifigs for Tivix

# Setup

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
   1. Axios ✅
   2. React-query ✅
   3. Vite ✅
   4. React-router ✅
2. Create Routing for homepage ✅
3. Install Mantine to use components ✅
4. Install styling library (emotion/styled-components)
5. Set up a theme
6. Get the homepage done
   1. Redirection to the catalog page
   2. Animation of the button to provide nice look
7. Get the Catalog page done
   1. Fetch 3 random figures
   2. Set styles for hover & focus
   3. Make it accessible by tab & enter
   4. On choice redirect with passed state containing all the details about the model
8. Get the summary page done
   1. Obtain data from the state or api call to url
   2. Display right side with animation
   3. Display form with React hook form
   4. Implement yup validation