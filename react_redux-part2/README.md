## Resources

****Read or watch:****

*   [understanding re-renders in React](/rltoken/J6BNtXJR1_L8fI7JCSnInQ "understanding re-renders in React")
*   [Memoized Selectors](/rltoken/VSwjigrcaBM8Ihzb6Kw0hQ "Memoized Selectors")

## Learning Objectives

At the end of this project, you should be able to [explain to anyone](/rltoken/fVm4QhOu3iH5NhYKF2E3Cg "explain to anyone"), **without the help of Google**:

*   Understanding React performance issues
*   Memoized Redux selectors

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
*   Install Jest globally: `npm install -g jest`

## Tasks

### 1.

In this task you’ll manage to fix an issue that affects your React Application performance.

This issue is unnecessary re renders in the `Notifications` component



To visualize this performance issue:

*   Go to the Notifications component and place a console log with any text of your choice and try to toggle the notifications items on our browser and you’ll see the number of logs increases with the number of clicks

The issue that `displayDrawer` state in Redux triggers re-renders of the Notifications component even when the underlying `notifications data` hasn’t changed. This happens because (the short story):

*   UI visibility toggles (show/hide) are mixed with API data in the same `state slice` which forcing a full re-render with every drawer toggle action dispatched



To address the issue (there are plenty ways to achieve that but we’ll stick to the following):

In the `notificationsSlice`:

*   Starting by removing the `displayDrawer` from the initial state
*   Remove the `showDrawer` & `hideDrawer` reducers
*   Update exports to exclude visibility-related actions

In the `Notifications` component:

*   Remove any logic related to the displayDrawer state (state access, handlers, etc)
*   Create a reference to the notifications items’ container using `useRef` hook
*   Create a new handler `handleToggleDrawer` that adds/removes the CSS class `visible` replace the old handlers
*   Inject a new class `visible` along with the `Notifications` one

For CSS:

*   Add styles in the CSS rule the `Notifications` class and make sure the `opacity` is equal to 1 and the `visibility` is set to visible
*   Add new CSS rule for the `visible` class and add styles and make sure the opacity is equal to 0 and the `visibility` is set to invisible
*   You can add some animations to toggle the notification items (optional)



**Tests:**

Clean up your unit tests relies on the actions `hideDrawer` & `showDrawer` Update your unit tests to rely on CSS `visible` class to toggle to display/hide the notification items



**Requirements:**

The `Notifications` component should not be rendered when the show/hide events are triggered

ALL your new unit tests PASS

No console warns or errors

No lint errors



### 2.

Implement a loading state in the `Notifications` component to provide feedback during data fetching

This improvement will result in a better user experience and will display a loading indicator when notifications are fetched

In the `notificationsSlice`:

*   Add a new state property `loading` and set it default value to `false`
*   Modify the `extraReducers` to handle the pending, fulfilled, and rejected states of the `fetchNotifications` thunk:
    *   Set `loading` to true when the request is `pending`
    *   Set `loading` to false when the request is `fulfilled` or `rejected`



In the `Notifications`:

Render Conditionally the notifications UI based on the loading state:

*   display a loading indicator (`Loading...`) while data is being fetched, and render the notifications list only after the data has been successfully fetched



**Requirements:**

ALL your new unit tests PASS

No console warns or errors

No lint errors



![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/77fd94ddba51bce5c92d3aa793001be700cf0830.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250610%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250610T083250Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c86ef517db988dedc801a06e0e2f08e29a0ba9ebc76f4c7e454db5d9cb526568)



### 3.

In this task you’ll improve the user experience by enable the user to select/deselect a course(s) among the courses displayed on the courses table once logged in

In the `coursesSlice`:

*   Add a new state `isSelected` defaulting to `false` to the courses state once the API call is `fulfilled`
*   Create 2 new actions `selectCourse`, and `unSelectCourse`:
    *   `selectCourse`: Takes a course id and sets `isSelected` to `true` for the corresponding course
    *   `unSelectCourse`: Takes a course id and sets `isSelected` to `false` for the corresponding course

In the `CourseList`:

*   Create a new function `onChangeRow`:
    *   It takes 2 arguments `id` (string), and `checked` (boolean)
    *   When `checked` is `true` dispatch the `selectCourse`, otherwise `unSelectCourse`

In the `courseListRow`:

*   Each course row should include a new `input` element of type `checkbox`
*   Call the `changeRow` function with course `id` and the new `checked` state whenever the checkbox is `checked`



**Tips:**

Use the Redux DevTools to verify that the state updates correctly when checkboxes are clicked



**Requirements:**

Ensure the courses state in the Redux store is updated correctly when a course is selected or unselected

ALL your new unit tests PASS

No console warns or errors

No lint errors



### 4.

In this task you’ll enhance the notifications system by allowing users to filter notifications by type (urgent/default) while optimizing performance using Redux memoized selectors and React component state management

For this you’ll the following new notifications JSON data:

Click to show/hide JSON contents
[
  {
    "id": "5debd76480edafc8af244228",
    "author": {
      "id": "5debd764a7c57c7839d722e9",
      "name": {
        "first": "Poole",
        "last": "Sanders"
      },
      "email": "poole.sanders@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      "isRead": true,
      "type": "urgent",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  },
  {
    "id": "5debd764507712e7a1307303",
    "author": {
      "id": "5debd7648ba8641ce0a34ea4",
      "name": {
        "first": "Norton",
        "last": "Grimes"
      },
      "email": "norton.grimes@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 37
    },
    "context": {
      "guid": "cec84b7a-7be4-4af0-b833-f1485433f66e",
      "isRead": false,
      "type": "urgent",
      "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. "
    }
  },
  {
    "id": "5debd76444dd4dafea89d53b",
    "author": {
      "id": "5debd764a7c57c7839d722e9",
      "name": {
        "first": "Poole",
        "last": "Sanders"
      },
      "email": "poole.sanders@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
      "isRead": false,
      "type": "urgent",
      "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
    }
  },
  {
    "id": "5debd76485ee4dfd1284f97b",
    "author": {
      "id": "5debd764f07f50822352e252",
      "name": {
        "first": "Roach",
        "last": "Cameron"
      },
      "email": "roach.cameron@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 26
    },
    "context": {
      "guid": "89906f88-a02d-41ee-b214-daa0c54633e3",
      "isRead": true,
      "type": "urgent",
      "value": "Odio pellentesque diam volutpat commodo sed egestas egestas"
    }
  },
  {
    "id": "5debd7644e561e022d66e61a",
    "author": {
      "id": "5debd764e66586653a8a33f3",
      "name": {
        "first": "Christy",
        "last": "Collier"
      },
      "email": "christy.collier@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 27
    },
    "context": {
      "guid": "f8d66cca-63ec-4f19-a422-a3e1c8f05a36",
      "isRead": false,
      "type": "urgent",
      "value": "In hendrerit gravida rutrum quisque non tellus orci. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lorem mollis aliquam ut porttitor"
    }
  },
  {
    "id": "5debd7644aaed86c97bf9d5e",
    "author": {
      "id": "5debd764f5017139ce541857",
      "name": {
        "first": "Mason",
        "last": "Douglas"
      },
      "email": "mason.douglas@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 31
    },
    "context": {
      "guid": "de55f849-8fca-4ac7-afbb-41751f09d0c6",
      "isRead": false,
      "type": "default",
      "value": "Cursus metus aliquam eleifend mi in nulla posuere. "
    }
  },
  {
    "id": "5debd76413f0d5e5429c28a0",
    "author": {
      "id": "5debd76456a6a030695e6a70",
      "name": {
        "first": "Marshall",
        "last": "Wynn"
      },
      "email": "marshall.wynn@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 26
    },
    "context": {
      "guid": "8094c267-ab84-47e1-8801-58ddd23f3b2a",
      "isRead": false,
      "type": "default",
      "value": "Quam viverra orci sagittis eu volutpat odio facilisis mauris sit"
    }
  },
  {
    "id": "5debd7642e815cd350407777",
    "author": {
      "id": "5debd764f8452ef92346c772",
      "name": {
        "first": "Cherry",
        "last": "Miles"
      },
      "email": "cherry.miles@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "3068c575-d619-40af-bf12-dece1ee18dd3",
      "isRead": true,
      "type": "default",
      "value": "Est ante in nibh mauris cursus mattis molestie a iaculis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim"
    }
  },
  {
    "id": "5debd764c1127bc5a490a4d0",
    "author": {
      "id": "5debd76470dcced4a244fe7f",
      "name": {
        "first": "Sykes",
        "last": "Fulton"
      },
      "email": "sykes.fulton@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 36
    },
    "context": {
      "guid": "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      "isRead": false,
      "type": "default",
      "value": "Cursus risus at ultrices mi."
    }
  },
  {
    "id": "5debd7646ef31e0861ec1cab",
    "author": {
      "id": "5debd7645c8d811b8c6a235d",
      "name": {
        "first": "Valentine",
        "last": "Juarez"
      },
      "email": "valentine.juarez@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "1d3918d0-67e6-44a4-9031-72d7750234de",
      "isRead": true,
      "type": "default",
      "value": "Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing"
    }
  },
  {
    "id": "5debd764a4f11eabef05a81d",
    "author": {
      "id": "5debd764d0b0e7ed3e45ee6d",
      "name": {
        "first": "Maryann",
        "last": "Larson"
      },
      "email": "maryann.larson@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 32
    },
    "context": {
      "guid": "98fe7af4-8300-461f-a376-c147b2987616",
      "isRead": false,
      "type": "default",
      "value": "Ac placerat vestibulum lectus mauris ultrices eros in cursus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Lorem donec massa sapien faucibus et molestie ac"
    }
  },
  {
    "id": "5debd764af0fdd1fc815ad9b",
    "author": {
      "id": "5debd764fb6db3a5c21ce617",
      "name": {
        "first": "Naomi",
        "last": "Hayes"
      },
      "email": "naomi.hayes@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 30
    },
    "context": {
      "guid": "cd1a09cf-ad6e-4478-9662-18a292807e2e",
      "isRead": false,
      "type": "urgent",
      "value": "Nulla malesuada pellentesque elit eget gravida cum sociis"
    }
  },
  {
    "id": "5debd76468cb5b277fd125f4",
    "author": {
      "id": "5debd764f7234e1d44828515",
      "name": {
        "first": "Knowles",
        "last": "Vazquez"
      },
      "email": "knowles.vazquez@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 28
    },
    "context": {
      "guid": "0f446b01-37c3-4884-9dc6-316f23b7711b",
      "isRead": false,
      "type": "urgent",
      "value": "Elit eget gravida cum sociis natoque penatibus et. Congue mauris rhoncus aenean vel"
    }
  },
  {
    "id": "5debd764de9fa684468cdc0b",
    "author": {
      "id": "5debd764ec7c8d21449be7d7",
      "name": {
        "first": "Greta",
        "last": "Benjamin"
      },
      "email": "greta.benjamin@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 23
    },
    "context": {
      "guid": "4cc5bc3a-98fe-4392-b97d-6a41da1d944b",
      "isRead": false,
      "type": "default",
      "value": "Leo vel fringilla est ullamcorper. Volutpat consequat mauris nunc congue"
    }
  }
]



Update the `fetchNotifications` Thunk from the `notificationsSlice`:

*   Map the API response data to extract the unread notification items (e.i conetxt.isRead === false) with the required fields (`id`, `type`, `isRead`, `value`), and return the transformed notifications array

Create a new file `features/selectors/notificationSelector.js`:

*   Retrieve the notifications array from the Redux state
*   Use [createSelector](/rltoken/2Y1SCuNeAmmo7Dnn4dMm3w "createSelector") to create and export a memoized selector `getFilteredNotifications` that filters notifications based on the filter argument:

    *   The selector should accept two inputs:
        *   The notifications array retrieved from the Redux state
        *   A filter argument (e.g., urgent, default, or all)
    *   Filter logic:
        *   If the filter is `all`, return all notifications (no type check needed already handled within the `fetchNotifications` Thunk)
        *   For `urgent`/ `default` filters, return notifications matching the specified type

Update the `Notifications` component:

*   Initialize a state variable `currentFilter` and its setter `setCurrentFilter` with an initial value of `'all'`
*   Replace direct `access`/ `usage` of notifications with a filtered array retrieved using the `getFilteredNotifications` memoized selector store the result in a new variable `filteredNotifications`
*   Added functions `handleSetFilterUrgent` and `handleSetFilterDefault` to toggle the current filter
*   Added buttons (‼️ for urgent and `??` for default) to toggle between filters
*   The buttons should dynamically set the `currentFilter` state, updating the displayed notifications accordingly
*   Adjusted to work with `filteredNotifications` rather than the full `notifications` array
*   Simplified rendering based on the filtered state

Update the `NotificationItem` component:

*   Drop the use of html prop entirely, reducing complexity and improving safety
*   Receive notification data through explicit props: type, value, id
*   Used inline conditional styling for color based on the type (urgent = red, default = blue)
*   Maintain `data-notification-type` for testing/identification
*   Eliminate unnecessary conditionals for type and html
*   Implement click handler that calls `markAsRead(id)`



**Tests:**

Adapt your unit test cases to the new updates



**Requirements:**

Your notifications drawer must correctly toggle between urgent and default states

ALL your new unit tests PASS

No console warns or errors

No lint errors



![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/b0bc4f376e771d7f4eccf7b5a68a1bdbddbe9945.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250610%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250610T083250Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5502b438c16111cf3c6722d607a2093af0c2c48181fc8ce8c6bd284f376869e0)