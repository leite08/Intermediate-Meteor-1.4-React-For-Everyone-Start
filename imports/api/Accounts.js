import React from 'react';

if (Meteor.isServer) {

  Meteor.publish('currentUser', function() {
    return Meteor.users.find({_id:this.userId}, {
      fields: {
        roles: 1
      }
    });
  });
}

export default Accounts;