import React, { ReactElement } from 'react';
import { NotificationData, NotificationType } from './static';
import styles from './styles.module.scss';

export default function NotificationItem({ time, data, hasRead, user }: NotificationData) {
  const renderContent = () => (
    <>
      {renderText()}
      {hasRead ? <i className={styles.dot}></i> : null}

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
            <strong>{user.name}</strong> reacted to your recent post{' '}
            <span className={styles.post}>{data.postTitle}</span>
            {hasRead ? <i className={styles.dot}></i> : null}
          </>
        );
      case NotificationType.NEW_FOLLOW:
        return (
          <>
            <strong>{user.name}</strong> followed you
          </>
        );
      case NotificationType.JOIN_GROUP:
        return (
          <>
            <strong>{user.name}</strong> has joined your group{' '}
            <span className={styles.group}>{data.group}</span>
          </>
        );
      case NotificationType.LEAVE_GROUP:
        return (
          <>
            <strong>{user.name}</strong> left the group{' '}
            <span className={styles.group}>{data.group}</span>
          </>
        );
      case NotificationType.PICTURE:
        return (
          <>
            <strong>{user.name}</strong> commented on your picture{' '}
            <span className={styles.group}>{data.group}</span>
            <img src={data.pictureUrl} alt={data.pictureUrl} />
          </>
        );
      case NotificationType.PRIVATE_MESSAGE:
        return (
          <>
            <strong>{user.name}</strong> sent you a private message{' '}
            <span className={styles.group}>{data.group}</span>
          </>
        );
      default:
    }
  };

  return (
    <div className={styles.notification}>
      <img src={user.avatar} alt="Avatar" />

      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
}
