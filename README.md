# Good Place To Start

My default boiler for making a React App with Google Firebase managing the db. All webpack configs were setup by Create-React-App. There have been added dependancies (listed below) commonly used in my
projects as well as my defualt styling system.

## Will need more for advanced or very large projects

This boiler being public is intended to help beginners or those new to React get a feel for how one can architect a project with this tech stack; or just anybody who wants to hit the ground running
with tools setup to start building within minutes of setup. That being said, there are more advanced tools, libraries, etc that one would likely add as a project becomes advanced. Also, as of the
publishing date of this, there is nothing to do with testing written into this boiler. I recommend if your project gets large or complicated that you install tools such as Log Rocket to help stay on
top of errors, and study up on writing tests in React apps.

## QUICK OVERVIEW

### Intended Architecture Use

-   This project is ready to go. If you aren't removing any packages just run 'npm install' or 'yarn install' and get to creating components inside your components folder; stay organized by way of
    sub-directories. As you add components, export their default from the index.js inside of the Components folder.

-   The Pages folder is intended to serve as a place to hold "views" for pages, you may be interested in making another folder for containers that will exist between the components and page views; I
    don't do this, so that will be up to you to add to the project pattern and should not have any negative effects.

-   You have access to Bootstrap, FontAwesome, and ReactStrap; all custom styles included in this starter reside in the root directory inside of global.css; this will override Bootstrap styles as well
    as any component scoped styles, so if your styles are getting overritten look there, however I recommend leveraging this file for your design.

-   As mentioned above, the project's webpack was configured by Create-React-App. These should be good for most projects but if you are advanced and want to change them, that is your starting point.

### If you ARE NOT using Google Firebase SDK

This starter includes some files that are consistently needed to setup Google Firebase SDK. If you are not going to be using Google Firebase you should REMOVE the following files:

-   /src/hooks/use-auth-listener.js
-   /src/contexts/firebaseContext.js
-   /src/lib/firebase.prod.js

You should also:

-   REMOVE -- import { FirebaseContentProvider } from './firebaseContext'; -- FROM /src/context/AllContentProvider.js
-   REMOVE -- export { FirebaseContext, FirebaseContentProvider } from './firebaseContext'; -- FROM /src/contexts/index.js.js
-   REMOVE firebase FROM package.json before running 'npm install' or 'yarn install'.

If you are using Google Firebase, see directions further below in this README to get going easily.

### If you ARE NOT using ReactStrap

Some of this boiler uses this out the gate. Adjustments need to be made if you are going to remove the package from the project. Before deleting, explore the layoutComponents folder and see if any of
those are worth keeping for your project, they use modified ReactStrap components. If you want to use those, ignore this section and leave the package setup for those components. If you are still not
going to use it, you should REMOVE the following directory entirely:

-   /src/components/layoutComponents

And you should also:

-   REMOVE -- export { default as LayoutSection } from './layoutComponents/layoutSection/LayoutSection' -- FROM the index.js file that is located inside of the components folder.
-   REMOVE 'reactstrap' FROM the project's package.json file running 'npm install' or 'yarn install'.

# Dependancies

All the following dependancies will install by default. You may want to review them to ensure you need them all and the version numbers are what you want to work with as this may not have the latest
(compatibility/deprication issues may arise upon changing). Packages with \*\*\* should be removed FROM package.json before running 'npm install' or 'yarn install' if you don't plan on using them.

### `Font Awesome`

-   v5.15.1 \*\*\*

### `Google Firebase SDK`

-   v7.23 \*\*\*

### `React Packages`

-   React (v16.13.1)
-   React Dom (v16.13.1)
-   React Popper (v1.3.6) \*\*\*
-   React Redux (v7.2.0) \*\*\*
-   React Redux Form (v1.16.14) \*\*\*
-   React Router (v5.2.0)
-   React Router Dom (v5.2.0)
-   React Scripts (v3.4.3)

### `Redux`

-   Redux (v4.0.5)
-   Redux Logger (v3.0.6) \*\*\*
-   Redux Thunk (v2.3.0) \*\*\*

### `Styled Components`

-   v5.2.0 \*\*\*

### `Fonts`

-   Typeface Lobster
-   Typeface Open-Sans

### `Bootstrap`

-   Bootstrap (v4.5.2) \*\*\*
-   Reactstrap (v8.5.1) \*\*\*

# Styling

### Bootstrap

This project comes with Bootstrap and Reactstrap included, so importing Reactstrap components and using Bootstrap classes are optional.

### Global

All Bootstrap classes are subject to override by the projects global.css file located in the root directory. There you will find all the project's global css variables as well as global css classes
and an area carved out to include Bootstrap Overrides.

### Pages

Inside the pages folder, you will find a styles folder to compartmentalize css files for specific page views. These page css files will overwrite the component scoped css but not the global.css
located in the root directory.

### Components

Any included components should have locally scoped styles for reusability. These styles may get overridden by page views and global.css, so if you have styles that must be exactly what is scoped, I
recoomend using css modules to protect them (supported by included react-scripts package).

# State, Forms, and Contexts

## React Redux Suggestions

React Redux is included in this architecture however is not intended to maintain app state or manage data. It has been included to increase dev efficiency with forms and is a dependancy for React
Redux Form. That being said, the Redux Store architecture is set up if you would prefer to use the redux store for all state management, however if you do I would recommend not using any hooks to
manage state as this mix of concerns may get combersome to manage and lead to bugs as the project grows.

## React Redux Forms

React Redux Forms is intended to manage all FORM states and input data. In order to leverage this you must create a form reducer in the redux folder as well as add that reducer to the
configureStore.js combined reducer inside of the redux store. Explort the contents of the formComponents folder to get an idea on how to use the custom Input component build using 'react-redux-form'
Control and Error components. If you are not going to use Redux Forms you should remove the package from the paackage.json and also remove the deirectory '/src/components//formComponents/' entirely.

## React Contexts

As mentioned above, 'react-redux' and 'react-redux-forms' are included to make forms easier. There is a contexts folder in the root directory that is intended to hold all React Context files for
managing app state as well as incoming and outgoing data. Write all action handlers in those context files unless you are going to use React-Redux redux store for all state managament; in which case I
suggest only using useState for local management inside of a functional component.

## Combined Providers

Use the existing context files as examples for creating your context and provider in the same file and exporting both. After you have made a new context file, you must add the provider to the
AllContentProvider.js file. Insert the new provider wrapped around the children prop. It won't matter where you nest it as long as it is above the children and BELOW the Firebase provider. This
AllContentProvider is wrapped around the entire app in index.js.

### Using Contexts

If you are familiar with hooks this will be common knowledge. To use the state outlined in one of your context files, import the context you want from the contexts folder into your file where the
state is needed (not the provider), then inside a functional component, access it by creating a const using the useContext hook provided by React then pass in the context you imported for access. That
const will now let you access state in the context file.
