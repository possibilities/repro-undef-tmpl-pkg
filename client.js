console.log('Reference to Template', Template);

Meteor.startup(function() {
  console.log('Reference to Template inside Meteor.startup', Template);
});
