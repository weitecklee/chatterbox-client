// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  $message: $('#message'),

  initialize: function() {
    FormView.setStatus(true);
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.on('change keyup', function(e) {
      if (FormView.$message.val()) {
        FormView.setStatus(false);
      } else {
        FormView.setStatus(true);
      }
    });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      username: window.location.search.substring(10),
      text: FormView.$message.val(),
      roomname: RoomsView.$select.val() || 'defaultRoom'
    };

    Parse.create(message);
    MessagesView.renderMessage(message);


    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.



    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};