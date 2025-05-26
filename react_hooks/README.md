## Resources:

**Read or watch**:

*   [Import React Simplified](/rltoken/5HsdAgWd0t1toIf-rdK4Og "Import React Simplified")
*   [React Hooks Docs](/rltoken/tr36sehQOre_J9nfIkh27g "React Hooks Docs")
*   [Why react doesn’t update state immediately](/rltoken/KvLuXR5zREN05S4LgaNQOg "Why react doesn't update state immediately")
*   [State mutation](/rltoken/y8xx3AxMBW3lqVkuDdtG0g "State mutation")
*   [Rules of Hooks](/rltoken/u9OHnGhiLm_ypM0Nyc0JuA "Rules of Hooks")
*   [React memo](/rltoken/89DxdOtLcCHUwWmYePqN8g "React memo")
*   [useCallback-use case](/rltoken/H-9RxrGUsJIZe-kL18Hl7A "useCallback-use case")
*   [use-effect](/rltoken/M5AT3yCT2nDItWlKLuVdwQ "use-effect")
*   [useReducer](/rltoken/EoDh5RUwY3w4c4TD1x7Tbg "useReducer")
*   [Testing userEvent actions](/rltoken/hJ9GFegTHy2tpGz0jRhJvg "Testing userEvent actions")
*   [Mocking Axios](/rltoken/ALqCe2a1sqQw7pU-8dZ81g "Mocking Axios")
*   [Mocking Axios - another example](/rltoken/Vd2PpViceUacwWJGfCv46Q "Mocking Axios - another example")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/2UXoDbSMXVo-iZLOKYzWKQ "explain to anyone"), **without the help of Google**:

*   Understanding the transition from class to functional components and maintain same functionality while modernizing code
*   Learning different React hooks (useState, useContext, useEffect…)
*   Understanding component optimization
*   Understanding and build custom React hooks
*   Developing testing strategies for hooks
*   Understanding reducer pattern before Redux

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   Import React only in the main.jsx file, and avoid importing it in individual component files.
*   All your files should end with a new line
*   A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
*   Install Jest globally: `npm install -g jest`

## Tasks

### 1.

From now on, you’ll be using modern React with functional components and hooks, instead of ES6 classes and React lifecycle methods.

Re-use the codebase from the `react_state` project for the previous task and let’s begin modernizing the React code.

**Instructions**:

*   Transform the Header.jsx class component into a functional component.
*   Implement context consumption using the appropriate hook (useContext).
*   Ensure all existing functionalities are preserved.



**Requirements:**

*   You must use the appropriate hook for context consumption (e.g., useContext).
*   The exact same JSX structure should be maintained.
*   Handle the context values properly with no errors or warnings.
*   Once the user is logged in, a welcome message and a logout link should be displayed.
*   The logout link must function as expected (e.g., logging out the user).
*   Ensure that there are no console errors or warnings.
*   The code should have no lint errors



### 2.

Update the `Footer.jsx` component to use the appropriate React hook to enable context consumption properly.

**Requirements:**

*   You must use the appropriate hook for context consumption.
*   The exact same JSX structure should be maintained.
*   Handle the context values properly with no errors or warnings.
*   Once the user is logged in, a welcome message and a logout link should be displayed.
*   The logout link must function as expected (e.g., logging out the user).
*   Ensure there are no console errors or warnings.
*   The code should have no lint errors.



### 3.

Copy the content of `task_0` into a new folder called`task_1`, and apply the following changes:

**Instructions**:

*   Convert the Login class component to a functional component.

Initialize state using React hooks:

*   Create a state variable `enableSubmit` and its setter function `setEnableSubmit` with an initial value of false.
*   Create a state variable `formData` and its setter function`setFormData` with an initial value of`{ email: '', password: '' }`.

Update the class methods `handleChangeEmail` and `handleChangePassword` to functions:

*   Extract the email and password from the event target.
*   Use `setFormData` to update the`formData` state, keeping the existing email and password.
*   Update the `enableSubmit` state based on email and password validation rules, and the password length.

Update the class method`handleLoginSubmit` to a function:

*   Always prevent the default behavior of the form submission.
*   Call the login prop method with the current email and password.

**Requirements:**

*   Keep the same structure of the component and update the state and methods.
*   Preserve the existing validation logic for email, password, and the submit button enabling/disabling.
*   Keep the `WithLogging` HOC wrapper class usage as it is.
*   Ensure that there are no console errors or warnings.
*   The code should have no lint errors.



### 4.

Memoization has been part of React’s optimization tools since the introduction of PureComponent in 2016 and has evolved to support functional components.



In this task and the one that follows, you’ll transform the notification system from a class-based implementation to modern functional components while maintaining performance optimizations.

**Instructions:**

*   Convert the `NotificationItem` component from class syntax to function syntax.
    *   Consider replacing the functionality of PureComponent with React’s memo for memoization.
*   Maintain existing prop structures as they are.
*   Preserve current rendering behavior:
*   Ensure the component only re-renders when notification items update.
*   Maintain existing click handlers by keeping the notification “mark as read” functionality intact.



**Requirements:**

*   Maintain performance characteristics of the original implementation.
*   All existing tests should PASS.
*   Ensure there are no console errors or warnings.
*   The code should have no lint errors.



### 5.

In this task, you’ll continue working on updating the notification system by modifying the `Notifications.jsx` file.

**Instructions:**

*   Apply the same steps from the previous task to update the `Notifications.jsx` component from a class-based to a functional component.
    *   Use React.memo for memoization to prevent unnecessary re-renders.
*   Ensure that the component triggers a re-render only if the comparison inside memo returns false.
*   All functionalities created previously within the `Notifications` and `NotificationItem` components should continue to work as expected.



**Requirements:**

*   Your Notifications system should trigger a re-render only if the comparison in memo returns false.
*   Ensure all previously implemented functionalities within both the `Notifications` and `NotificationItem` components remain functional.
*   All existing tests must pass.
*   Ensure there are no console errors or warnings.
*   The code should have no lint errors.



### 6.

In this task, you’ll continue modernizing the project components by updating the `App.jsx` file

**Instructions:**

*   Apply the same class-to-function component conversion pattern, focusing on state management in functional components.

Migrate the state management from class-based to functional components by:

*   Converting the class state object into individual hooks using the appropriate React hooks:

    *   Initialize a state variable `displayDrawer` and its setter function`setDisplayDrawer` with an initial value of `true`.
    *   Initialize a state variable `user` and its setter function`setUser` with an initial value of the`context user object`.
    *   Initialize a state variable `notifications` and its setter function `setNotifications` with an initial value of the`notificationsList array`.
    *   Update the rest of the code to reflect the changes mentioned above.



*   Remove the `handleKeydown` function and its associated lifecycle methods.
*   Update the handler functions (`logIn`,`logOut`, and `markNotificationAsRead`) to follow the functional component patterns:
    *   Ensure all functionality remains identical to the previous implementation.
    *   Follow React’s immutability principles for state updates.

**Tip:**

*   Memoize callback functions to maintain reference stability and prevent unnecessary re-renders.

**Requirements:**

*   Ensure all the application’s features work as expected and function correctly.
*   All unit tests must be updated/refactored to reliably test the transition from class-based to functional components.
*   Ensure there are no console errors or warnings.
*   The code should have no lint errors.

**Tests:**

*   Test the functionality of `handleDisplayDrawer` and `handleHideDrawer`.
*   Test user state mutations.





![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/12/a4f2decb045fe60d285da0ef655d7accbf5fcd6d.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250526%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250526T092614Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a59a98bea40ffd47ca65b431d225877e563917d4c98f525bb15f78e9d5eeccbc)



### 7.

In this task, you’ll modify the App component to fetch data dynamically instead of relying on hardcoded data. You’ll learn how to implement data fetching as a side effect in React functional components while maintaining the existing component behavior.

**Install Axios:**
```
npm i axios
```

**Instructions:**

*   Create JSON Files:

    *   Add two JSON files in your project’s `public` folder:
        *   `notifications.json`: Contains the notifications array with the same structure as the current `notificationsList`.
        *   `courses.json`: Contains the courses array with the same structure as the current`coursesList`.
*   Remove Hardcoded Data:

    *   Remove the hardcoded notificationsList and coursesList arrays from the component.
*   State Management for Data:

    *   Initialize a state variable courses and its setter function setCourses using the appropriate React hook with an initial value of an empty array.
*   Implement Data Fetching:

    *   Use the appropriate React hook to fetch data dynamically:
        *   `Notifications`: Fetch notifications data when the component initially renders.
        *   `Courses`: Fetch courses data whenever the user’s state changes (responding to authentication changes).
    *   Ensure proper cleanup of any side effects (if applicable).
*   Fetching Logic:

    *   Use `Axios`to fetch data from the `notifications.json` and `courses.json` files.
    *   Maintain the special handling of the latest notification using `getLatestNotification()`.
*   Error Handling:

    *   Use try/catch blocks to handle potential errors during data fetching.
    *   Log errors to the console in development mode.

**Unit Tests:**

*   Verify Data Fetching Logic:
    *   Use the jest-mock-axios package to simulate API responses for the HTTP requests.
*   Test Cases:
    *   Verify that notifications data is successfully retrieved when the App component loads initially.
    *   Verify that courses data is successfully retrieved whenever the user’s state changes.
*   Ensure all current features of the component work properly after implementing dynamic data fetching.



**Tips:**

*   Efficiency: API calls consume system resources and time. Implement them efficiently by tying them to appropriate state changes and avoiding unnecessary requests.
*   Trigger-Driven Fetching: Think carefully about the relationship between when data needs to be fetched and what triggers that need:
    *   Notifications are needed immediately when the app loads.
    *   Courses data depends on user authentication changes.
*   Consistency: Keep the data structure consistent with the original implementation to minimize changes to existing logic.



**Requirements:**

*   Properly update or refactor failed unit tests related to notifications and courses data.
*   Ensure no console errors or warnings.
*   Ensure no lint errors.
*   All application features must continue to work as expected.



### 8.

In this task, you’ll refactor the existing Login component to improve code reusability and maintainability by leveraging a custom React hook for managing form state and submission logic.

*   Craft the React custom hook:
    *   Create a new file: `src/hooks/useLogin.jsx`.
    *   The hook should accept a callback function `onLogin` as a parameter and use React hooks to manage the form state.
    *   Move the current validation and submission logic from the`Login` component into the custom hook:
    *   Validate the `email` input format.
    *   Ensure the`password` has a minimum length of 8 characters.
    *   Handle form submission logic.
*   Return an object from the hook that includes:
    *   State values: `email`, `password`, and `enableSubmit` (boolean).
    *   Handlers for managing input changes and form submission.



*   Refactor the Login Component:
    *   Remove all state and handler logic from the Login component.
    *   Use the useLogin hook to manage form inputs and submission.
    *   Pass the login prop as the onLogin callback to the custom hook.
    *   Replace the existing logic with the returned values and handlers from useLogin to:
        *   Validate the inputs.
        *   Enable or disable the submit button based on validation results.
        *   Handle form submission.



**Requirments:**

*   Users must only be able to log in when:
    *   They provide a valid email address.
    *   The password has a minimum length of 8 characters.
*   The submit button (labeled “OK”) must:
    *   Start in a disabled state.
    *   Become enabled when the email and password pass validation.
*   All existing tests must pass as the functionality remains unchanged.
*   Ensure the refactored component has:
    *   No console errors or warnings.
    *   No lint errors.



### 9.

In this task, You will refactor your React School Dashboard application to replace the Context API with the `useReducer` hook for scalable and centralized state management.

*   Create a new file `App/appReducer.js` :
    *   Actions Object (`APP_ACTIONS`)
        Define and export an object containing these action types:
        *   `LOGIN` : Handles user authentication.
        *   `LOGOUT`: Manages user logout.
        *   `TOGGLE_DRAWER`: Controls notification visibility.
        *   `MARK_NOTIFICATION_READ`: Updates the notification status.
        *   `SET_NOTIFICATIONS`: Updates the notifications list.
        *   `SET_COURSES`: Updates the courses list.



*   Initial State (`initialState`)
    Export an object initialized as:
    *   `displayDrawer`: true
    *   `user`: Object with the same structure as your current context.
    *   `notifications`: An empty array.
    *   `courses`: An empty array.



*   Reducer Function (`appReducer`)
    Export a function with two parameters:`state` (defaulting to `initialState)` and`action`.
    *   Use a `switch` statement (or alternatives like `Map` or `function chains`) to handle the defined action types.
    *   Ensure each case updates the state immutably.
    *   Return the current state for unrecognized actions.



Now that you’ve created your appReducer, let’s implement it in your components

*   Update the `App` Component:

    *   Replace `useState` calls with a single `useReducer` hook initialized with `appReducer` and`initialState`.
    *   Dispatch actions for:
        *   Toggling the notification drawer.
        *   Logging in or out users.
        *   Marking notifications as read.
        *   Fetching and updating `notifications` and `courses` data.
    *   Remove the Context Provider wrapping and imports.
    *   Pass state and dispatch functions as props to child components.
*   Update the `Header` Component:

    *   Replace Context-related logic with props.
    *   Maintain all functionality, including displaying the welcome message and handling the logout feature.
*   Update the `Footer` Component:

    *   Replace Context-related logic with props.
    *   Preserve the conditional rendering behavior.
*   Adapt Data Fetching Logic:

    *   Use `dispatch` to update state with fetched notifications and courses.
    *   Refactor data fetching to maintain side-effect isolation and immutability.



**Tests:**

*   Refactor your test suite to validate the transition from the `Context API` to`useReducer`.
    *   Ensure the reducer updates the state correctly based on dispatched actions.
    *   Test UI interactions to confirm state changes reflect accurately in the UI.
*   Use mock implementations for API calls to test dynamic data handling.


**Requirements:**

*   Ensure state updates are immutable.
*   All React Dashboard application features must function as expected.
*   State changes should align with UI interactions, as demonstrated in task 5’s GIF.
*   All unit tests must pass.
*   No console errors, warnings, or lint issues.
