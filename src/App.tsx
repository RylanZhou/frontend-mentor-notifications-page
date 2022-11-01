import React, { useEffect, useMemo, useState } from 'react';
import NotificationItem from './NotificationItem';
import { data, NotificationData } from './static';
import styles from './styles.module.scss';

function App() {
  const [notifications, setNotifications] = useState<NotificationData[]>(data);

  useEffect(() => {
    const resize = () => {
      document.documentElement.style.setProperty('--height', window.innerHeight + 'px');
    };

    resize();
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((each) => {
        if (!each.hasRead) {
          each.hasRead = true;
        }

        return each;
      }),
    );
  };

  const unreadCount = useMemo(() => data.filter((each) => !each.hasRead).length, [notifications]);

  return (
    <div className={styles.App}>
      <section className={styles.header}>
        <h1>
          Notifications
          {unreadCount ? <span className={styles.badge}>{unreadCount}</span> : null}
        </h1>

        <button onClick={() => markAllRead()}>Mark all as read</button>
      </section>

      <ul className={styles.notifications}>
        {notifications.map((each) => (
          <NotificationItem key={each.id} {...each} />
        ))}
      </ul>

      <footer className={styles.footer}>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/rylanzhou" target="_blank" rel="noreferrer">
          Rylan Zhou
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
