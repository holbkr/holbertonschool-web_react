import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
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
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <Header />
            {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
          </div>
          <div className="w-full lg:w-80">
            <Notifications notifications={notificationsList} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
