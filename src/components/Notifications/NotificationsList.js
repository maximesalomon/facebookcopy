import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Notification from './Notification'

class Notifications extends Component {
  render() {
    const { notifications } = this.props;
    console.log(notifications);
    return (
        <>
            {
                notifications && notifications.map(notif => {
                    return <Notification key={notif.id} notif={notif}/>
                })
            }
       </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      notifications: state.firestore.ordered.notifications
     }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Notifications);