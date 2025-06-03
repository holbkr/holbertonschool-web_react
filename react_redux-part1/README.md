## Resources

****Read or watch:****

*   [Redux](/rltoken/Yd9gOVf8dlCViUZFilvDMw "Redux")
*   [Create Slice](/rltoken/ooeD3LckPHBmgogu7lEqkQ "Create Slice")
*   [Extra reducers](/rltoken/VAdgWlGruL-Pblt6A5Y6iw "Extra reducers")
*   [Root reducer](/rltoken/PHZHwM7Rig8lmConVHWWog "Root reducer")
*   [Mock Axios](/rltoken/rMAjjz9lOfb_-AXkEe9REQ "Mock Axios")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/YWniKf3iaJwqGkGNcBBZWg "explain to anyone"), **without the help of Google**:

*   Why Redux is Awesome
*   How to manage state through redux slices
*   What Happens When You Dispatch an Action in Redux
*   What is a Redux Store
*   How to Access State using useSelector
*   How to dispatch actions using useDispatch

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
*   Install Jest globally: `npm install -g jest`

## Tasks

### 1.

In this task you’ll update your project structure, and to achieve that update your `src` to the one below:
```
src/
│
├── app/
│   ├── store.js
│   └── rootReducer.js
│
├── features/
│   ├── auth/
│   │   └── authSlice.js
│   ├── notifications/
│   │   └── notificationsSlice.js
│   └── courses/
│       └── coursesSlice.js
│
├── components/
│   ├── Header/
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   └── Header.spec.js
│   ├── Footer/
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   └── Footer.spec.js
│   ├── BodySection/
│   │   ├── BodySection.jsx
│   │   └── BodySection.spec.js
│   ├── BodySectionWithMarginBottom/
│   │   ├── BodySectionWithMarginBottom.css
│   │   ├── BodySectionWithMarginBottom.jsx
│   │   └── BodySectionWithMarginBottom.spec.js
│   ├── HOC/
│   │   ├── WithLogging.jsx
│   │   └── WithLogging.spec.js
│   ├── NotificationItem/
│   │   ├── NotificationItem.jsx
│   │   └── NotificationItem.spec.js
│   └── Notifications/
│        ├── Notifications.css
│        ├── Notifications.jsx
│        └── Notifications.spec.js
│
├── pages/
│   ├── CourseList/
│   │   ├── CourseList.css
│   │   ├── CourseList.jsx
│   │   ├── CourseList.spec.js
│   │   └── CourseListRow/
│   │       ├── CourseListRow.jsx
│   │       └── CourseListRow.spec.js
│   └── Login/
│        ├── Login.css
│        ├── Login.jsx
│        └── Login.spec.js
│
├── hooks/
│   └──  useLogin.jsx
│
├── utils/
│   ├── utils.js
│   └── utils.spec.js
│
├── assets/
│   ├── close-icon.png
│   └── holberton-logo.jpg
│
├── tests/
│   └── App.spec.js
│
├── App.css
├── App.jsx
├──appReducer.js
└── main.jsx
```


**Package to install:**

*   reduxjs/toolkit
*   react-redux



**Requirements:**

Your `src` folder must follow the above structure (and even empty the new files must be included in your project structure)

Your React application works as expected

All your unit tests PASS



### 2.

In this task, you will create a Redux slice called authSlice to manage the authentication state of a React application. This slice will handle user login and logout functionality, storing the user’s email, password, and authentication status.

In the `authSlice.js` file:

Create an `initialState` object to represent the initial authentication state. This object should include:

*   A user object with the following properties:
    *   email: Initialized as an empty string
    *   password: Initialized as an empty string
    *   An isLoggedIn property: Initialized as false

Create the `authSlice` object using the Redux Toolkit `createSlice` function to create the slice, and ensure that:

*   The slice is named `auth`
*   The `initialState` object is passed as the default state of the slice
*   The slice includes the following reducers:

    *   `login` Reducer:
        *   Updates the state with the user’s email and password from the action payload
        *   Sets isLoggedIn to true
    *   `logout` Reducer:
        *   Resets the user object’s email and password to their initial values
        *   Sets isLoggedIn to false

Don’t forget to export the authSlice `reducer` as default export and the `actions` as named exports



**Tip:**

The logout action is always a state reset, there’s no need for any payload



**Tests:**

You need to install the package [axios-mock-adapter](/rltoken/03-ZHNLuGVkhrX_CCY-CPg "axios-mock-adapter") to simulate mocking requests

Check that the `authSlice`:

*   Returns the correct initial state by default
*   Updates the state correctly when the login action is dispatched:
    *   The user object’s email and password should match the values from the action payload
    *   The isLoggedIn property should be set to true.
*   Resets the state correctly when the logout action is dispatched:
    *   The user object’s email and password should be reset to empty string
    *   The isLoggedIn property should be set to false.



**Requirements:**

Your React application core features and state follow remains intact and works as expected

Your new unit tests PASS

No console warns or errors

No lint errors



### 3.

In this task, you will create a Redux slice called `notificationsSlice` to manage the notifications state of a React application.

This slice will handle fetching notifications, marking notifications as read, and controlling the visibility of the notifications drawer.

In the `notificationsSlice.js` file:

Create an `initialState` object to represent the initial notifications state. This object should include:

*   A `notifications` array: Initialized as an empty array.
*   A `displayDrawer` boolean: Initialized as true.

Set Up the API Configuration:

*   Define a constant `API_BASE_URL` to store the base URL of your API (e.g., `http://localhost:5173`)
*   Create an `ENDPOINTS` object to store the API endpoints. For this task, include:
    *   notifications: The endpoint to fetch notifications (e.g., `${API_BASE_URL}/notifications.json`)

Create and export the `fetchNotifications` Async Thunk:

*   Use the `createAsyncThunk` function to handle fetching notifications from the API
*   Provide the action type string `'notifications/fetchNotifications'` as the first argument to createAsyncThunk
*   The thunk should:
    *   Fetch the notifications from the ENDPOINTS.notifications endpoint
    *   Update the notification with id `3` to include the latest notification from the `getLatestNotification` utility function
    *   Return the updated notifications array.

Create the `notificationsSlice` object using the Redux Toolkit `createSlice` function, and ensure that:

*   The slice is named `notifications`
*   The `initialState` object is passed as the default state of the slice
*   The slice includes the following reducers:

    *   `markNotificationAsRead` Reducer:
        *   Removes a notification from the notifications array based on its id
        *   Log to console the removed notification id (the same you applied in the `markNotificationAsRead` handler before)
    *   `showDrawer` Reducer:
        *   Sets displayDrawer to true
    *   `hideDrawer` Reducer:
        *   Sets displayDrawer to false.
*   The slice includes an `extraReducers` section to handle the `fetchNotifications` async thunk:

    *   Updates the notifications array with the fetched data when the fetchNotifications thunk is fulfilled.
*   Don’t forget to export the `notificationsSlice` reducer as the default export and the actions (`markNotificationAsRead`, `showDrawer`, `hideDrawer`) as named exports.




**Tip:**

*   The `showDrawer` and `hideDrawer` actions are simple state updates, so there’s no need for a payload.



**Tests:**

Check that the `notificationsSlice`:

*   Returns the correct initial state by default
*   fetches notifications data correctly
*   Removes a notification correctly when the `markNotificationAsRead` action is dispatched
*   Toggles the `displayDrawer` state correctly when the `showDrawer` and `hideDrawer` actions are dispatched



**Requirements:**

Your React application’s core features and state management remain intact and work as expected

Your new unit tests PASS

No console warnings or errors

No lint errors.



### 4.

In this task, you will create a Redux slice called `coursesSlice` to manage the courses state of a React application.

This slice will handle fetching courses from an API and resetting the courses state when the user logs out.

Create an `initialState` object to represent the initial courses state. This object should include:

*   A courses array: Initialized as an empty array
*   Set Up the API Configuration:

Define a constant `API_BASE_URL` to store the base URL of your API (e.g., `http://localhost:5173`) Create an ENDPOINTS object to store the API endpoints. For this task, include:

*   courses: The endpoint to fetch courses (e.g., `${API_BASE_URL}/courses.json`)

Create and export the `fetchCourses` Async Thunk:

*   Use the `createAsyncThunk` function to handle fetching courses from the API
*   Provide the action type string `'courses/fetchCourses'` as the first argument to createAsyncThunk
*   The thunk should:

    *   Fetch the courses from the ENDPOINTS.courses endpoint
    *   Return the fetched courses data.

Create the `coursesSlice`:

*   Use the Redux Toolkit `createSlice` function to create the slice. Ensure that:

    *   The slice is named `courses`
    *   The `initialState` object is passed as the default state of the slice
    *   The slice includes an `extraReducers` section to handle the fetchCourses async thunk:

        *   Updates the courses array with the fetched data when the fetchCourses thunk is fulfilled

The slice listens for the `logout` action from the `authSlice` and resets the courses state to its initial value

Export the `coursesSlice` reducer as the default export



**Tests:**

Check that the `coursesSlice`:

*   Returns the correct initial state by default
*   fetches correctly the courses data
*   resets the courses array to empty whenever the `logout` action is dispatched



**Requirements:**

Your React application’s core features and state management remain intact and work as expected

All your new unit tests PASS

No console warnings or errors

No lint errors



### 5.

In this task, you will create a root reducer for a Redux application using the `combineReducers` function from Redux Toolkit.

The root reducer will combine multiple individual reducers (slices) into a single reducer that manages the overall state of the application

Use the `combineReducers` function to combine the following reducers into a single `rootReducer`

The `rootReducer` should structure the state object such that each slice of state is nested under its corresponding key:

*   `auth`: Contains the state managed by authReducer

*   `notifications`: Contains the state managed by notificationsReducer

*   `courses`: Contains the state managed by coursesReducer


Export the `rootReducer` as the default export of the module



**Requirements:**

No console warnings or errors

No lint errors



### 6.

In this task, you will configure a Redux store for a React application using the `configureStore` function from Redux Toolkit

The store will use a root reducer to manage the overall state of the application

Use the `configureStore` function from Redux Toolkit to create the Redux store and pass the `rootReducer` as the reducer property in the store configuration

Export the configured store as the default export of the module.



**Requirements:**

No console warnings or errors.

No lint errors in the code.



### 7.

In this task, you will update the `Header` component to use Redux for managing the authentication state

The updated Header will no longer receive `user` and `logOut` as props but will instead interact with the Redux store to determine the user’s authentication status and handle logout functionality



To achieve this make sure that:

*   You retrieve the `isLoggedIn` and `user` state from the `auth` slice in the Redux store, using the appropriate hook
*   You dispatch the `logout` action when the user clicks the logout link, using the appropriate hook:
    *   Define a `handleLogout` function that triggers the logout action
*   Render conditionally the logout section based on the `isLoggedIn` state
*   Replace the `logOut` prop with the `handleLogout` function in the logout link’s onClick handler



### 8.

The same principle went for the `Header` component, goes here for the `Footer` component

The updated `Footer` will no longer receive `user` as a prop but will instead interact with the Redux `store` to determine the user’s authentication status and conditionally render the `Contact us`ink



To achieve this, make sure that:

*   Use the appropriate hook to retrieve the `isLoggedIn` and `user` state from the `auth` slice in the Redux store
*   Render the `Contact us` link conditionally based on the `isLoggedIn` state
*   Remove the `user` prop from the Footer component and rely on the Redux store for state management
*   Ensure the Footer component continues to display the copyright information and conditionally renders the “Contact us” link when the user is logged in



### 9.

In this task, you will update the `CourseList` component to use Redux for managing the `courses` state.

The updated CourseList will no longer receive courses as a `prop` but will instead interact with the Redux store to retrieve the list of courses



To achieve this, make sure that:

*   Use the appropriate hook to retrieve the courses state from the courses slice in the Redux store
*   Remove the courses prop from the CourseList component and rely on the Redux store for state management
*   Ensure the CourseList component continues to display the `UI`
*   Ensure the CourseList component remains wrapped in the `WithLogging` HOC



### 10.

In this task, you will update the `Login` component to dispatch the login action from the Redux store when the form is submitted.

Your task is to integrate Redux dispatch logic into the `useLogin` hook’s `onLogin` callback function



To achieve this, make sure that:

*   Use the appropriate hook to dispatch the login action from the `auth` slice in the Redux store
*   Pass the `login action` dispatch function to the useLogin hook as the onLogin callback
*   The Login component must continue to use the useLogin hook for form state management and validation
*   Remember that the submit button should start in a disabled state and only become enabled when both the email and the password are valid
*   Remove the `login prop` from the Login component and rely on the Redux store for dispatching the login action



### 11.

In this task, you will update the `Notifications` component to use Redux for managing its state and actions.

The component will no longer rely on props for state and event handlers but will instead use the Redux `store` to manage the `displayDrawer` state, `notifications` list, and the actions `markNotificationAsRead`, `showDrawer`, and `hideDrawer`



To achieve this, make sure that:

*   Remove the props from the Notifications component
*   Use the appropriate hook to access the `notifications` and `displayDrawer` state from the Redux store
*   Move the handlers `handleDisplayDrawer`, `handleHideDrawer`, and `markNotificationAsRead` from the App to Notifications component
*   Replace the prop-based event of these handlers with Redux action dispatchers, and use the appropriate hook to dispatch the corresponding actions
*   Ensure that the `markNotificationAsRead` action is dispatched with the correct notification id



**Requirements:**

The component should continue to display the list of notifications when the drawer is open

The “Close” button should hide the drawer when clicked

Clicking on a notification should mark it as read

Keep the Notifications component memoized using memo to optimize performance



### 12.

In this task, you will update the `App` component to use Redux for managing its authentication state `isLoggedIn` and dispatching side effects (fetching notifications and courses)

The component will no longer rely on local state or a custom reducer (`appReducer`) but on Redux state instead



To achieve this, make sure that:

*   Delete the `useReducer` hook and the `appReducer` logic (remove the appReducer file too)
*   Remove all prop-based event handlers (`logIn`, `logOut`, `handleDisplayDrawer`, `handleHideDrawer`, `markNotificationAsRead`)
*   Use the appropriate hook to access the `isLoggedIn` state from the `auth` slice
*   Use side effect to dispatch:
    *   `fetchNotifications` when the component mounts
    *   `fetchCourses` only when the user is logged in
*   Conditionally render the `Login` or `CourseList` components based on the isLoggedIn state
*   remove the `appReducer` file, and its related unit tests file

Don’t forget to wrap the App component with Redux `Provider` and pass the store



**Tests:**

Since Redux serves as a single source of truth for your application’s state, you will need to write unit tests for each component in isolation

Install necessary dependencies:

*   Install [axios-mock-adapter](/rltoken/03-ZHNLuGVkhrX_CCY-CPg "axios-mock-adapter"), [redux-mock-store](/rltoken/9cYGHLfxk0Jgqi1T3g8EZQ "redux-mock-store") to mock API requests and redux store

Set Up Test Environment

*   Configure testing setup to include Redux store mocking and API request mocking

*   Import necessary modules like render, screen, userEvent, configureStore, etc…




`App`:

*   Create a mock store with `isLoggedIn` set to `false`, render App with the mock store and verify that the `Login` component is displayed
*   Create a mock store with `isLoggedIn` set to `true`, render App with the mock store and verify that the `CourseList` component is displayed
*   Mock the `fetchNotifications` API call, render App and check that the notification items are displayed on mount

`Login`:

*   Render the `Login` component and verify that the login form is displayed with `email`, `password` fields, and `submit button`
*   Simulate form submission with valid credentials and verify that `isLoggedIn` is set to `true`
*   Simulate form submission with invalid credentials and verify that `isLoggedIn` remains `false`

`Footer`:

*   Render the `Footer` component and verify that the `Copyright {current year} - Holberton School` text is displayed
*   Create a mock store with `isLoggedIn` set to `true`, render the `Footer` component and verify that the “Contact us” link is displayed
*   Create a mock store with `isLoggedIn` set to `false`, render the `Footer` and verify that the “Contact us” link is not displayed

`Header`:

*   Create a mock store with `isLoggedIn` set to `true`, render the `Header` component, and verify that the `logout` link is displayed
*   Create a mock store, dispatch the `login` action, render the `Header` component, and verify that a welcome message is displayed with the entered `email`
*   Simulate a `logout` action and verify that `isLoggedIn` is set to `false`

`CourseList`:

*   Mock the `fetchCourses` API call, render the `CourseList` and verify that the `courses` list is displayed
*   Dispatch the `logout` action, render the `CourseList` component and verify that the courses array is `reset`

`Notifications`:

*   Mock the `fetchNotifications` API call, render the `Notifications` component and verify that the notification items are displayed
*   Simulate `closing` the drawer and verify that the `displayDrawer` state is set to false
*   Simulate `opening` the drawer and verify that the `displayDrawer` state is set to true
*   Simulate `marking` a notification as read and verify that it is removed from the list

`CourseListRow`:

*   Render the `CourseListRow` component as a `header` with one cell and verify that it spans two columns
*   Render the `CourseListRow` component as a `header` with two cells and verify both are displayed
*   Render the `CourseListRow` component as a `regular` row and verify both cells are displayed

`NotificationItem`:

*   Render the `NotificationItem` component with `default` type and verify that it displays the notification text in `blue`
*   Render the `NotificationItem` component with `urgent` type and verify that it displays the notification text in `red`

`BodySection`:

*   Render the `BodySection` component with a title and children, and verify that both are displayed

`BodySectionWithMarginBottom`:

*   Render the `BodySectionWithMarginBottom` component with a title and children, verify that both are displayed



**Requirement:**

No console warnings or errors

No lint errors in the code



![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/fb21e0f72477ef3478c794da0a4e935c80005fbc.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250602%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250602T101940Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5b93db2b0b5fc0bf47fa3be578180c0daba410ef161a75c2ff1bfbb8b04b40f8)
