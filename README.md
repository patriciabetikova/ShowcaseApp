# Showcase App

Showcase app for keeping track of events.

This app was created using [create-react-app](https://github.com/facebook/create-react-app "Github page").

## See it in action!

Login form is pre-filled with valid login data, but feel free to create your own account to try it out

Backend is deployed to heroku, where with no traffic in 1 hour is set automatically to sleep, therefore **first HTTP request might take noticeably long**, but afterwards will run quick and smooth.

[Showcase App](https://patriciabetikova.github.io/)

## How to run locally

1. Clone the repository
2. Create `.env` based on `.env-example` or just rename it to `.env`
3. Run in terminal:

```
npm install
npm start
```

## Code quality

Using ESLint, prettier, EditorConfig to ensure code consistency.

## Code style

Functional style, using techniques such as currying, partial application, point-free style, higher order components.

## Modern React

Using Portals, Context and hooks.

## Folder structure

Code is written in the functional way, meaning small blocks of code, organised in `src` folder containing smaller folders divided by the use.

- App: top level component, includes global styles, and routes, and global components such as toast notifications.
- assets: for assests, such as images, fonts, icons. Currently only contains icons, which are react svg (minimized) components.
- common: utility functions shared across the app.
- components: consists of small reusable and shared components, that are easily modified via props. In general each folder includes `index.js` for functionality and `styled.js` styling.
- data: contains a folder for every data entity, each folder contains data related stuff, such as api calls, enums, formatters etc.
- hoc: folder consisting of higher order components. The ones including styles are wrapped in own folders similar to normal components.
- inputs: input components used in forms, they always accept value and onChange prop.
- pages: contains top level pages in their folders. Components that are used exclusively on this page reside in the folder.

  There is also `urls` file that holds all the links, so they do not need to be hardcoded in the app, which has the risk of having dead links.

- styled: styled-components that do not need to be a react component, grouped in files by category, reused across the app.
- validators: contains form validators.

Others than folders, `src` contains a few files, such as `config.js` that contains global configuration of app, `theme.js` that holds global style related data such as colors, z-indices and breakpoints needed for responsive design, and `index.js` that renders the whole app.

## Libraries used

Used as little of them as possible for security, bundle size and consistency reasons.

- [axios](https://github.com/axios/axios "Github page") : For handling HTTP requests and parsing response body. Fetch could be used instead to save bundle size, but at 4.3kB gzipped it's not too heavy.
- [formik](https://github.com/jaredpalmer/formik "Github page") : For handling form state, thin abstraction layer is used(withForm higher order component) to allow easy migration, should we decide to save 12.6kB of bundle size.
- [moment](https://momentjs.com/ "Homepage") : Very heavy library for datetime with mutable structures, so not ideal by any stretch of the imagination. Though, no alternative with immutable functional API was found, so moment was used, because chances are, most devs are already familiar with it.
- [ramda](https://ramdajs.com/ "Homepage") : Functional utility library providing general use functions supporting currying and point-free style.
- [react-router](https://github.com/ReactTraining/react-router "Github page"): Industry standard.
- [rxjs](https://github.com/ReactiveX/rxjs "Github page") : Library for FRP (functional reactive programming). Used to model parts of the application state as streams.
- [styled-components](https://www.styled-components.com/ "Homepage") : Industry leading CSS-in-JS.
- [yup](https://github.com/jquense/yup "Github page") : Formik's prefered way to handle form validators.

## No Redux? 😱

Global state is used as little as possible.
Given the volatile nature of data in this particular app, we are working under the assumption, that data can change frequently, which could lead to stale data, if not refreshed.
For this purpose, we are using `withData` HoC, which stores the data in local state. This has the effect of data being refetched on leaving and re-entering pages, but this is very much intentional behavior in this application. Should we decide to cache the results to avoid refetching, we would implement the caching mechanism using rxjs subjects, to be able to rerender every component using the same data source, upon data change.

Using redux requires a lot of boilerplate and additional packages to handle basic stuff. Because we are using HoCs to handle data, we greatly reduce the amount of boilerplate required.

The only usecase remaining to cover, is being able to handle state, that is inherently global.
Thats is the auth state (user is logged in or not) and toast notifications state (we need to be able to show notification from everywhere).

RxJS does this perfectly. For the simpler usecase, (notifications), we simply define a Subject. Which is an observable, which can multicast the stream to multiple subscribers (we do not care about this property here), but can be also pushed **next value** into. Which is what we are looking for. To be able to push new value (new notification) from wherever we please.

The other, more complex use-case, is the auth stream. Here we chose to utilize Behavior subject. It acts the same as a normal subject, but also has an initial value. That value we retrieve from local storage, and also serialize new values (new tokens) upon emitting new values.

## Bundle

![image](https://user-images.githubusercontent.com/38330269/62037775-ba76df80-b1f4-11e9-9037-036906a9b019.png)
node_modules gzipped have 120kB, `moment`(almost 17kB) could be replaced by a smaller library, `formik`(8kB), `yup`(10kB) and their peer depencency `lodash`(9kb) could save us another 27kB in total.

## Lighthouse score

Fast as 🏎️

![image](https://user-images.githubusercontent.com/38330269/62038997-180c2b80-b1f7-11e9-9a03-fc3d768ab8d0.png)

## Plans to furher improve the project

-replace `formik` and `yup` with custom withForm HoC using ramda lenses

## Hire me

[LinkedIn](https://www.linkedin.com/in/patr%C3%ADcia-bet%C3%ADkov%C3%A1-1a6072158/)
