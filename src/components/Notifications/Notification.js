import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { deleteNotification } from "../../store/actions/notificationActions";

const Notification = (props) => {
  const { id, user, content } = props.notif;
  const deleteNotif = (notifId) => {
    console.log(notifId);
    props.deleteNotification(notifId);
  }
  return (
    <NotificationStyle>
      <p>{user} {content}</p>
      <DeleteNotification onClick={() => deleteNotif(id)}>X</DeleteNotification>
    </NotificationStyle>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNotification: notificationId => dispatch(deleteNotification(notificationId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Notification);

const NotificationStyle = styled.div`
  position: relative;
  display: flex;
  padding: 16px;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-family: "Lato";
`;

const DeleteNotification = styled.p`
  position: absolute;
  right: 16px;
`;
