export const deleteNotification = notificationId => {
    return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore();
      firestore
        .collection("notifications")
        .doc(notificationId)
        .delete()
        .then(() =>
          dispatch({
            type: "DELETE_NOTIFICATION", notificationId
          })
        )
        .catch(err =>
          dispatch({
            type: "DELETE_NOTIFICATION_ERROR", err
          })
        );
    };
  };