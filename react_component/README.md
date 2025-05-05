## Resources

**Read or watch**:

*   [React components](/rltoken/E9WYeBgsG0CL4gM6K9NeNg "React components")
*   [React Developer Tools](/rltoken/cYOQ91eTl7FdNCqPRuKDUw "React Developer Tools")
*   [React Pure components](/rltoken/-HSHX-vFfOEkflmqt697QQ "React Pure components")
*   [React Higher Order Components](/rltoken/T026FQniFMxPHvqftCqgIw "React Higher Order Components")
*   [Class Component](/rltoken/amDJ74wRxqcgthtWEXHL-Q "Class Component")
*   [Implement a pure component](/rltoken/eHptBvLo7VwoIA0aSZDhDw "Implement a pure component")
*   [Passing children props](/rltoken/yHFzvoUFZFMTMmiDZLON8A "Passing children props")
*   [Jest Mock Functions](/rltoken/ySvnGtq27zn0BY4bJCprMA "Jest Mock Functions")
*   [Jest Matchers](/rltoken/_NqCYSI9gMu_2zx0XFdPAQ "Jest Matchers")
*   [Check for props changes](/rltoken/TitVtPwU50LwYwi7dRFs5Q "Check for props changes")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/Xw-423x8IbbWM7na9p7ncA "explain to anyone"), **without the help of Google**:

*   When to use a Class or a function to create a component
*   The lifecycle of a Class component
*   How to test a component
*   How to use a Jest spy to verify that a function is being called correctly.
*   What an HOC is and how to use it
*   How to optimize performance and control which components to render

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
*   Install Jest globally: `npm install -g jest`

## Tasks

### 1.

Start this project with the files from the last task of the `React Props` project:

**Convert the App function into a React Class:**

*   Convert the `App` component from `functional` to a `class` component
*   All your tests should still pass.

**Requirements:**

*   Reloading your React application should display the exact same page.
*   The console in your browser should not show any errors or warnings.
*   No lint errors should be present.



### 2.

**Add Lifecycle Methods to a Component**

In the `App` Class component:

*   Add a prop named `logOut` with a default value of an empty function.
*   Add an event listener when the component is `mounted` to detect when the user presses the keyboard keys.
*   If the user presses the `control` and the `h` keys simultaneously, display an alert with the message `Logging you out` and call the `logOut` function.

**Add the tests**

In the `App.spec.js` test file:

*   Create a test to verify that when the `control` and `h` keys are pressed, the `logOut` function, passed as a prop, is called once.
*   Create a second test to ensure that the alert function is called with the string `Logging you out`.

**Tips:**

*   It’s a good practice to check if a key exists in an object before using its value.
*   Consider mocking the `window.alert` function to use the appropriate Jest Matcher and ensure your test passes.

**Requirements:**

*   Make sure the event listener is removed when the component is unmounted.
*   Restore the alert function in the test file after mocking it.
*   Reloading the App component should still display the same page as in the last task.
*   No lint errors should be present.



### 3.

**Create a new Event Handler**

In the `Notifications` component:

*   Convert the `functional component` into a React `Class component`
*   Make sure that the tests are still passing
*   Create a new `markAsRead` method within the Notifications class. It should accept one argument: id (number)
*   When the function is called, it logs the message `Notification {id} has been marked as read` to the console.
*   Pass the `markAsRead` function to the `NotificationItem` component as a prop

In the `NotificationItem` Class:

*   Convert the `functional component` into a React `Class component`
*   Make sure that the tests are still passing
*   Modify the `li` element to call the new `markAsRead` function in response to the `onClick` event .


**Add the tests**

In the `Notifications.spec.js` test file:

*   Check that when simulating a click on a notification item, it logs to the console the string `Notification {id} has been marked as read`, where the id corresponds to the item clicked. (The notification id should not be zero- based)



In the `NotificationItem.spec.js` test file:

*   Pass the `markAsRead` prop to the `NotificationItem` and check that this prop is called whenever the click event is triggered.

**Requirements:**

*   In the test file, make sure that the console function you mocked is restored.
*   At this point, reloading the application should display the exact same page as in the last task. Use the React Chrome Extension to make sure that the Notifications component displays correctly.
*   The console in your browser should not show any errors or warnings.



### 4.

**Containment**

Create a new component named `BodySection`. The component does not know its children and should render the following:

*   A div with the class `bodySection` containing:

    *   An `h2` element displaying a title passed as a prop.
    *   The children of the component.

Create a new component named `BodySectionWithMarginBottom.jsx`, which does not know its children and should render the following:

*   A `div` with the class `bodySectionWithMargin` , that contains:

    *   The BodySection component, passing the prop into it.

Create a `BodySectionWithMarginBottom.css` file and set the following styles:

*   Set the `bottom margin` of the `bodySectionWithMargin` div element to `40px`


**Tips:**

Rendering the following
```
<BodySection title="test">
  <p>test</p>
</BodySection>
```
Should generate:
```
<div className="bodySection">
  <h2>test</h2>
  <p>test</p>
</div>
```


**Tests:**

Create a `BodySection.spec.js` file and add the following tests:

*   Test that the BodySection component renders a heading with the title prop value.
*   Test that the BodySection component renders any number of children passed to it.



Create a `BodySectionWithMarginBottom.spec.js` file and add the following tests:

*   Test that the `BodySectionWithMarginBottom` component contains a div with the class bodySectionWithMargin.
*   Test that the `BodySectionWithMarginBottom` component renders the BodySection component.



### 5.

**in `task_3/dashboard/src/App/App.jsx`, modify the `App` component:**

*   Wrap the `CourseList` component with the newly created `BodySectionWithMarginBottom` component. The title should be `Course list`
*   Wrap the `Login` component with the newly created `BodySectionWithMarginBottom` component. The title should be `Log in to continue`
*   Using the `BodySection` component, add a new block with the title `News from the School`. The component should contain a paragraph with the text: `Holberton School News goes here`



in `task_3/dashboard/src/App/App.spec.js`:

*   Check that a title of `Course list` is displayed above the `CourseList` component when the `isLoggedIn` prop is set to true.
*   Check that a title of `Log in to continue` is displayed above the `Login` component when the `isLoggedIn` prop is set to false.
*   Add a test to check that a title with the text `News from the School`, and a paragraph element with the text `Holberton School News goes here` are displayed by default in the `App` component.



**Tips**:

*   You can always use regex to avoid case-sensitive pitfalls and make your tests more robust.

**Requirements**:

*   Make sure that the CSS is correctly applied to your component.
*   The console in your browser should not show any errors or warnings.



### 6.

We would like to add a way to log to the console every time a component is mounted and every time it is about to unmount.

**To avoid repeating the same code everywhere, create a HOC component in `task_4/dashboard/src/HOC/WithLogging.jsx`:**

*   The HOC should log to the console `Component NAME_OF_THE_WRAPPED_COMPONENT is mounted` in `componentDidMount()`
*   The HOC should log to the console `Component NAME_OF_THE_WRAPPED_COMPONENT is going to unmount` in `componentWillUnmount()`
*   Modify the `displayName` of the HOC to always display `WithLogging(NAME_OF_THE_WRAPPED_COMPONENT)` in the React Chrome Extension or for debugging
*   `NAME_OF_THE_WRAPPED_COMPONENT` should be the name of the wrapped component or class. If the wrapped element has no name, it should default to `Component`



*   Wrap the `Login` and `CourseList` components with the new HOC
*   You should see the logs from the HOC on the console whenever the value of the `isLoggedIn` prop changes from false to true or vice versa.



**Add `WithLogging.spec.js`, write some tests for the HOC component:**



You can use this mock class component inside your test file:
```
class MockApp extends React.Component {
  render () {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    )
  }
}
```
*   Add a test to check that the `WithLogging` HOC renders a heading element with the text `Hello from Mock App Component`

**Tips:**

*   Writing a unit test for HOC can be tricky. Create a variable with the HOC wrapping the above class component so you can use it in your test.
*   With `StrictMode`, you’ll notice an extra `mount` and `unmount` cycles which is expected, read more [here](/rltoken/0Osy-Ib-oYpKdqmQOAQdCw "here")

**Requirements:**

*   In the test file, make sure to cleanup after each test execution (you use cleanup from `@testing-library/react`.
*   Ensure your logs are properly displayed.
*   The console in your browser should not show any errors or warnings.



### 7.

In `NotificationItem.jsx`:

Make the component pure, so it only updates with props/state change.



### 8.

**In `task_5/dashboard/src/Notifications/Notifications.jsx`:**

*   Modify the file so that it only updates when the length of the notification list prop changes.
*   You must implement this logic using the `shouldComponentUpdate` lifecycle method to optimize performance.



**In `Notifications.spec.js`, add two checks:**

Although a pure component prevents re-rendering if no props or state are updated, the React Testing Library aims to check the actual rendered content instead.

To achieve this, we will implement two simple tests:

*   Check that the `Notifications` component doesn’t re-render if the length of the `notifications` prop remains the same.
*   Check that the `Notifications` component re-renders whenever the length of the `notifications` prop changes.



**Requirements:**

*   The browser console should not display any errors or warnings.
