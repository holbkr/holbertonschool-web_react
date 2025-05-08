## Resources

**Read or watch**:

*   [Aphrodite](/rltoken/k6rprQLb4fH_kD4-LEZmrg "Aphrodite")
*   [Inline styling](/rltoken/9cu8pJQ-3OfQdj0QtGCFgw "Inline styling")
*   [Test CSS Style](/rltoken/H1jIojz2NJEvC2CEVxYUpw "Test  CSS Style")
*   [CSS Viewport](/rltoken/sGVmDbdAvFo2Mvb9DDk2bQ "CSS Viewport")
*   [CSS Media queries](/rltoken/LT2jJuMnwB9YYo81wUFjBQ "CSS Media queries")
*   [CSS Animations](/rltoken/gYHUIde3aEjc4AwwCXHZyA "CSS Animations")
*   [Prevent aphrodite styles injection](/rltoken/yed37D3KHZNHdbhGsJhn9g "Prevent aphrodite styles injection")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/9Cig2SRk-Zy2TX5-dksiyg "explain to anyone"), **without the help of Google**:

*   the differences between using a CSS file and inline styling
*   how to use a CSS-in-JS tool like Aphrodite
*   how to use conditions within JS to apply different styles
*   how to use responsive design and make the application show a different UI according to the screen size
*   how to create small animations within the app

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Install Jest globally: `npm install -g jest`

## Tasks

### 1.

*   Copy over the `task_5` directory from the `React components` project (We’ll be using it as the base for this project)
*   Rename the `task_5` directory to `task_0`

**Modify the `CourseListRow` component in `task_0/dashboard/src/CourseList/CourseListRow.jsx`:**

*   Using inline styling, change the background color of a row to `#f5f5f5ab`
*   Using inline styling, change the background color of a header row to `#deb5b545`
*   If needed, modify the test file so every test pass.

**Tests:**

*   Add a test that check when the `isHeader` prop is true, the cell background color is `#deb5b545`.
*   Add a test that check when the `isHeader` prop is true and `secondTextCell` is not null, the cell background color is `#deb5b545`.
*   Add a test that check when the `isHeader` prop is false, the cell background color is `#f5f5f5ab`.

**Tips:**

*   For better performances, never create and pass an object to an element directly. Use a constant instead
*   Use the `isHeader` prop to easily pick the style you want to apply to the `tr` tag
*   You can convert the `Hex` color to `rgb` color in order to PASS your test.

**Requirement:**

*   Even if the modification is small, make sure that your test suites are still passing. Especially the file `CourseListRow.spec.js`



### 2.

Install Aphrodite using npm with:

`npm install --save aphrodite`

**Modify the `App` component in `task_1/dashboard/src/App/App.jsx`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the body and the footer within the file
*   Delete the file `App.css` and the import

**Modify the `BodySectionWithMarginBottom` component in `task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.jsx`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the margin within the file
*   Delete the file `BodySection.css` and the import

**Modify the `CourseList` component in `task_1/dashboard/src/CourseList/CourseList.jsx`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the list within the file
*   Remove the styling for the list within the `CourseList.css` file

**Modify the `Header` component in `task_1/dashboard/src/Header/Header.jsx`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the logo and the header within the file
*   Delete the file `Header.css` and the import

**Modify the `Login` component in `task_1/dashboard/src/Login/Login.jsx`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the margin within the file
*   Delete the file `Login.css` and the import

**Modify the `Notifications` component in `task_1/dashboard/src/Notifications/Notifications.jsx`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the notifications panel within the file
*   Remove the styling for the notifications panel from the `Notifications.css`

**Make sure the test suites are still passing!Tips:**

*   Look into using `StyleSheetTestUtils.suppressStyleInjection` at the top of your test file, to prevent issues with style injections

**Requirements:**

*   At this point, the UI should look exactly the same with the inline styling as it was with the CSS files



**All your tests that check whether the correct color is displayed or not will fail. This is because you have prevented the `Aphrodite` library from injecting CSS styling during testing. Feel free to comment them out in order to pass your tests.**



### 3.

**Modify the `NotificationItem` component in `task_2/dashboard/src/Notifications/NotificationItem.jsx`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the urgent and default items
*   Using condition, apply the styling to the `li` element
*   Delete the `Notifications.css` file and remove any import

**Modify the `NotificationItem.test` suite in `task_2/dashboard/src/Notifications/NotificationItem.spec.js`:**

*   Make sure that tests are still passing

**Modify the `CourseListRow` component in `task_2/dashboard/src/CourseList/CourseListRow.jsx`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the different type of rows (default rows, header rows)
*   Define the styling for the different type of `th` elements
*   Delete the `CourseList.css` file and remove any import

**Modify the `CourseListRow.test` suite in `task_2/dashboard/src/CourseList/CourseListRow.spec.js`:**

*   Make sure that tests are still passing
*   Test properties one by one if easier

**Requirements:**

*   Use conditions as much as you can, do not repeat elements
*   At this point, the UI should look exactly the same with the inline styling as it was with the CSS files

**Tips:**

*   You can either use conditions or use an array to apply the different styling. Conditions are usually more robust



### 4.

Let’s make the application responsive to the screen size using media queries. We are going to only focus on large screen and screens with a width under 900px

**Modify the component `Login` in `task_3/dashboard/src/Login/Login.jsx`:**

*   Make sure that a label and an input are on each line
*   Make sure that the button is on a new line
*   The screen should look like the image below:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/c3ed54e1dba4b232adc1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250508%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250508T070742Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7bb928e49aa7d781029203b25947495d086d75077441dffa5f551690e08b2dcb)

**Modify the component `Notifications` in `task_3/dashboard/src/Notifications/Notifications.jsx`:**

*   When the panel is open, it should take over the entire screen
*   There should be no padding because of the `ul` element
*   The font size of the text should be 20px

**Modify the component `NotificationItem` in `task_3/dashboard/src/Notifications/NotificationItem.jsx`:**

*   The item should take the entire screen width
*   A black border should be displayed at the bottom
*   The font size of the text should be 20px
*   The padding for the item should be `10px 8px`

**Requirements:**

*   When the notifications panel is open, the screen should look like the image below:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/e0d15ee8d2e28be1e130.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250508%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250508T070742Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d65f591c507a4d2eec14fe2df76a718b21c48319922da613747bf6aa0e4707ab)



### 5.

Let’s create an animation that we can display when the user hovers on the `Notifications` menu or when there is a new notification. In `task_4/dashboard/Notifications/Notifications.jsx`:

*   Create one object containing the CSS frames to make the opacity change from `0.5` to `1`
*   Create one object containing the CSS frames to make the element bounce. You can play with translateY and alternate from 0px to -5px and 5px

Modify the styling for the menu item to:

*   Float on the right of the screen over every element
*   The background color should be `#fff8f8`
*   Show the pointer cursor when hovering the element
*   On hover, animate the element with the two new animations. The duration for the opacity change should be 1s, and the duration for the bouncing effect should be 0.5s. The animation should repeat 3 times only
*   When the list of notifications is visible, hide the menu item

**Requirements:**

*   When the notifications panel is hovered or opened, the UI should look like the image below:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/8d302a65b1be36662c54.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250508%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250508T070742Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0ad4837d5f7abbad011681a39e9a366341e635f15a3a6683963f544edcabd2fa)