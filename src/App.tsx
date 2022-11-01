import React, { useState } from 'react';
import NotificationItem from './NotificationItem';
import { data } from './static';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <section className={styles.header}>
        <h1>
          Notifications
          <div className={styles.badge}>{data.filter((each) => !each.hasRead).length}</div>
        </h1>

        <button>Mark all as read</button>
      </section>

      <ul className={styles.notifications}>
        {data.map((each) => (
          <NotificationItem key={each.id} {...each} />
        ))}
      </ul>
    </div>
  );
}

export default App;
