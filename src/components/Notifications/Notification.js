import React from 'react';
// import styled from 'styled-components';

const Notification = ({ notif }) => {
  return (
    <p>{notif.user} {notif.content}</p>
  );
}

export default Notification;