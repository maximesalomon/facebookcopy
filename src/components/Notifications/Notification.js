import React from "react";
import styled from "styled-components";

const NotificationStyle = styled.p`
  padding: 16px;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-family: "Lato";
`;

const Notification = ({ notif }) => {
  return (
    <NotificationStyle>
      {notif.user} {notif.content}
    </NotificationStyle>
  );
};

export default Notification;
