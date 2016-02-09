if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.buttons.helpers({
    counter: function () {
      return Session.get('counter');
    },
    choices: [
      { text: "Yes" },
      { text: "No" }]
  });

  Template.buttons.events({
    'click': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
