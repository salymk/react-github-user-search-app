# Frontend Mentor - GitHub user search app solution

![Design preview for the GitHub user search app coding challenge](./preview.jpg)

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

My challenge was to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user) and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

### Links

- Solution URL: [frontendmentor.io](https://www.frontendmentor.io/solutions/handled-data-fetching-with-react-query-iYzh20gQX)
- Live Site URL: [react-github-user-search-app.vercel.app](https://react-github-user-search-app.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React-Query](https://react-query.tanstack.com/) - Data fetching library
- [luxon](https://moment.github.io/luxon/#/) - Luxon is a library for dealing with dates and times in JavaScript
- [what-input](https://github.com/ten1seven/what-input) - A global utility for tracking the current input method (mouse/pointer, keyboard or touch)

### What I learned

In this project I learned how to implement dark mode using React's Context API.

What is the Context API?

The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

So how do we use it to implement dark mode?

First, create a new file called theme.js, inside that file we have to create a new theme context:

```js
const ThemeContext = React.createContext();
```

This ThemeContext gives us two properties, which are React components, Provider and Consumer.

<!-- theme.js file -->

```js
const ThemeContext = React.createContext();

export default ThemeContext;

export const ThemeConsumer = ThemeContext.Consumer;
export const ThemeProvider = ThemeContext.Provider;
```

Provider => Allows us to declare what data we want available throughout our component tree. It accepts a value prop which is the data that you want available to any of its children who need to consume it.

Consumer => Allows any component in the component tree that needs that data to be able to subscribe to it. You can either use the render props pattern to consume that data or you can use the useContext hook... In this example I will show the hooks version.

Now that we have our ThemeContext created, let's jump into our App component and use it.

<!-- App.js file -->

```js
function App() {
  // State to hold our current theme
  // its default value is 'light'
  const [theme, setTheme] = React.useState("light");

  // A toggle function to change our theme based on our state
  // if the theme state is 'light' then change it to 'dark'
  // else change it to 'light'
  const toggleTheme = () =>
    setTheme(() => (theme === "light" ? "dark" : "light"));

  // This effect runs when our theme state changes
  // and it checks to see if theme is 'dark' if so
  // then it adds the 'dark-mode' class to the body
  React.useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      // Wrap our ThemeProvider around all of our components that need to use
      the theme value and pass the toggleTheme function to the toggleTheme prop
      on the Header component
      <ThemeProvider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <main>...</main>
      </ThemeProvider>
    </>
  );
}
```

I have our toggle button in our Header component, so lets jump in there and configure it to use the toggleTheme fuction and the theme variable.

<!-- Header.js file -->

```js
import React from "react";
import ThemeContext from "../contexts/theme";
import MoonIcon from "../icon-components/MoonIcon";
import SunIcon from "../icon-components/SunIcon";

const Header = ({ toggleTheme }) => {
  // Just pass in the ThemeContext to this useContext hook and you get access to the theme variable
  const theme = React.useContext(ThemeContext);

  return (
    <header className="container header">
      <nav>
        // If the value of theme is 'dark', then add the 'dark-mode' className
        to this h1 to change the color to dark mode.
        <h1 className={theme === "dark" ? "dark-mode" : ""}>devfinder</h1>
        // Toggle button
        <button
          onClick={toggleTheme}
          className={`toggle-btn ${theme === "dark" ? "dark-mode" : ""}`}
          type="button"
          aria-label="Toggle button to change light and dark themes"
        >
          // Here we're using a ternary operator to check the value of the theme
          variable. If its 'light' then render the MoonIcon, otherwise render
          the SunIcon
          {theme === "light" ? (
            <div className="dark-icon">
              <p>Dark</p>
              <MoonIcon />
            </div>
          ) : (
            <div className="light-icon">
              <p>Light</p>
              <SunIcon />
            </div>
          )}
        </button>
      </nav>
    </header>
  );
};
```

You can see how simple that was, all we had to do was import ThemeContext, pass it into our useContext hook to get the theme value and then use it to check its value, if the value is 'dark' change the theme of the app to dark mode.

You just have to repeat this pattern anywhere you need to pass dark mode colors in your app.

Now that we have everything set up, the next thing to do is to actually create the dark-mode className with our dark mode styles.

<!-- App.scss file -->

```css
h1 {
  font-size: 1.625rem;
  color: var(--clr-primary-400);
  font-weight: var(--fw-500);
}

/* If this h1 has a dark-mode class in it, then add that color to it */
h1.dark-mode {
  color: var(--clr-dark-mode-100);
}
```

The pattern I followed was quite simple, first I create my default styles, then I add my dark mode styles.

Anyways, I had a blast creating this project, on to the next one!

### Continued development

Since writing about what I learned, I have come across a better, more organized way to use the Context API, so in the near future I will refactor my ThemeContext, and you already know this, I will write about that aswell.

I also want to have the correct color scheme chosen for the users based on their computer preferences.

## Author

- Portfolio Site - [Salym Akhmedov](https://www.salymakhmedov.dev/)
- LinkedIn - [@salym-akhmedov](https://www.linkedin.com/in/salym-akhmedov/)
- Frontend Mentor - [@salymk](https://www.frontendmentor.io/profile/salymk)
