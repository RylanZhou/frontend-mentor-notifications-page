export enum NotificationType {
  REACT_POST,
  NEW_FOLLOW,
  JOIN_GROUP,
  LEAVE_GROUP,
  PRIVATE_MESSAGE,
  PICTURE,
}

export interface NotificationData {
  id: string;
  hasRead: boolean;
  user: {
    avatar: string;
    name: string;
  };
  time: string;
  data: {
    type: NotificationType;
    message?: string; // For NotificationType.PRIVATE_MESSAGE
    group?: string; // For NotificationType.JOIN_GROUP and LEAVE_GROUP
    pictureUrl?: string; // For NotificationType.PICTURE
    postTitle?: string; // For NotificationType.REACT_POST
  };
}

export const data: NotificationData[] = [
  {
    id: '1',
    hasRead: false,
    user: {
      avatar: '/assets/images/avatar-mark-webber.webp',
      name: 'Mark Webber',
    },
    time: '1m ago',
    data: {
      type: NotificationType.REACT_POST,
      postTitle: 'My first tournament today!',
    },
  },
  {
    id: '2',
    hasRead: false,
    user: {
      avatar: '/assets/images/avatar-angela-gray.webp',
      name: 'Angela Gray',
    },
    time: '5m ago',
    data: {
      type: NotificationType.NEW_FOLLOW,
    },
  },
  {
    id: '3',
    hasRead: false,
    user: {
      avatar: '/assets/images/avatar-jacob-thompson.webp',
      name: 'Jacob Thompson',
    },
    time: '1 day ago',
    data: {
      type: NotificationType.JOIN_GROUP,
      group: 'Chess Club',
    },
  },
  {
    id: '4',
    hasRead: true,
    user: {
      avatar: '/assets/images/avatar-rizky-hasanuddin.webp',
      name: 'Rizky Hasanuddin',
    },
    time: '5 days ago',
    data: {
      type: NotificationType.PRIVATE_MESSAGE,
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
  },
  {
    id: '5',
    hasRead: true,
    user: {
      avatar: '/assets/images/avatar-kimberly-smith.webp',
      name: 'Kimberly Smith',
    },
    time: '1 week ago',
    data: {
      type: NotificationType.PICTURE,
      pictureUrl: '/assets/images/image-chess.webp',
    },
  },
  {
    id: '6',
    hasRead: true,
    user: {
      avatar: '/assets/images/avatar-nathan-peterson.webp',
      name: 'Nathan Peterson',
    },
    time: '2 weeks ago',
    data: {
      type: NotificationType.REACT_POST,
      postTitle: '5 end-game strategies to increase your win rate',
    },
  },
  {
    id: '7',
    hasRead: true,
    user: {
      avatar: '/assets/images/avatar-anna-kim.webp',
      name: 'Anna Kim',
    },
    time: '2 weeks ago',
    data: {
      type: NotificationType.LEAVE_GROUP,
      group: 'Chess Club',
    },
  },
];
