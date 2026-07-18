import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';

function App() {
  const isLoggedIn = false;

  const notificationsList = [
    { id: 1, type: 'urgent', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];

  const coursesList = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <Header />
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList courses={coursesList} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores
                architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium,
                impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?
              </p>
            </BodySection>
          </div>
          <div className="w-full lg:w-80">
            <Notifications notifications={notificationsList} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
