Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  },
  records : function(){
    return Records.find();
  }

});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    // Session.set('counter', Session.get('counter') + 1);
    Meteor.call('data');
  }
});
