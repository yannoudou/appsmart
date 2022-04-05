#Hello,
I submitted the .env file, it's not a mistake, it's just so you have a better understanding on my path to work.

#Even though it's just a test to try to bring some good default practices.

-image NextJS
-Image cache
-Some SEO optimizations.

And I deployed unter https://appsmart.noudou.com subdomain, you can review it here.

I used class components and also functional components.

############## FOLDER/FILE STRUCTURE ######

I mainly create a folder with :

- index.tsx (export everything)
- Folder.tsx (with mainly the user interface)
- Folder.styled.ts/tsx for styling with styled components
- Folder.types.tsx\* (if at some point we have a lot of types but most of the time not).
- Folder.hooks.ts\* (Hooks, and some func)

############### API REQUEST REQUEST #################

\***\* NOTE \*\*\***
There are other libraries for this, like swr, but I'm just going to create a little hooks library for this (useFetch).
But actually, I prefer this and you can add logic and methods like

- check the accessToken on every request, (I use mainly 15 min accessToken and refreshToken (mainly 10 days server side))
  So, at each request, if the user is logged in, I check the validity of the accessToken, if not, I get a new one, or if an error occurs, I disconnect the user.
  All this is done before the request is even made
  Another advantage is the frontend caching, (I use the redux store most of the time and I persist the data on the locastorage, this data is persisted for 20 minutes, depending on the given times), so it doesn't even reach the backend.
  This turned out to be a very good solution for performance.

IT ALSO GIVES YOU INFORMATION ABOUT THE TYPES OF REQUESTS AND RESPONSES, so we only have to import them once, and that's it.
Just pass the name of the endpoints and you get all the types and it forces you to send only the requested types.

############# FONT-FAMILY ###########

License: this is a free version for personal use.

The big problem with the fonts is the loading time.

- I have to preload them first
  - Then, if they take too long to load, I still want the content to be visible with default font types that are available on most browsers in native mode. available on most browsers in native mode
- this is important to avoid Cumulative Layout Shift, First Contentful Paint, (which google is starting to take into consideration for its Ranking)
  So we can still use nice font families (which are really important for the identity of a product) and not have any performance problem.

######### TESTING ########

I use JEST for testing
business logic in most cases are hooks,
I just test them.
I could have added tests for the user interface but it's a matter of time.
