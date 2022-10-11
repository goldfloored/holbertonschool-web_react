// eslint-disable-next-line
export const getFullYear = () => {
  const year = new Date().getFullYear();
  return (year);
};

// eslint-disable-next-line
export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    const MySchool = 'Holberton School';
    return (MySchool);
  } else {
    const dash = 'Holberton School main dashboard';
    return (dash);
  }
};

export const getLatestNotification = () => {
  const urgentMessage = '<strong>Urgent requirement</strong> - complete by EOD';
  return (urgentMessage);
};
