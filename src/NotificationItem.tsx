import React from 'react';
import { NotificationData, NotificationType } from './static';
import styles from './styles.module.scss';

export default function NotificationItem({ time, data, hasRead, user }: NotificationData) {
  const renderContent = () => (
    <>
      <p>
        {renderText()}
        {!hasRead ? <i className={styles.dot}></i> : null}
      </p>

      <div className={styles.time}>{time}</div>

      {data.type === NotificationType.PRIVATE_MESSAGE ? (
        <div className={styles.message}>{data.message}</div>
      ) : null}
    </>
  );

  const renderText = () => {
    switch (data.type) {
      case NotificationType.REACT_POST:
        return (
          <>
            <strong className={styles.name}>{user.name}</strong> reacted to your recent post{' '}
            <strong className={styles.post}>{data.postTitle}</strong>
          </>
        );
      case NotificationType.NEW_FOLLOW:
        return (
          <>
            <strong className={styles.name}>{user.name}</strong> followed you
          </>
        );
      case NotificationType.JOIN_GROUP:
        return (
          <>
            <strong className={styles.name}>{user.name}</strong> has joined your group{' '}
            <strong className={styles.group}>{data.group}</strong>
          </>
        );
      case NotificationType.LEAVE_GROUP:
        return (
          <>
            <strong className={styles.name}>{user.name}</strong> left the group{' '}
            <strong className={styles.group}>{data.group}</strong>
          </>
        );
      case NotificationType.PICTURE:
        return (
          <>
            <span className={styles.pic}>
              <strong className={styles.name}>{user.name}</strong> commented on your picture{' '}
            </span>
            <img src={data.pictureUrl} alt={data.pictureUrl} />
          </>
        );
      case NotificationType.PRIVATE_MESSAGE:
        return (
          <>
            <strong className={styles.name}>{user.name}</strong> sent you a private message{' '}
            <span className={styles.group}>{data.group}</span>
          </>
        );
      default:
    }
  };

  return (
    <li className={`${styles.notification} ${!hasRead ? styles.unread : ''}`}>
      <img className={styles.avatar} src={user.avatar} alt="Avatar" />

      <div className={styles.content}>{renderContent()}</div>
    </li>
  );
}
