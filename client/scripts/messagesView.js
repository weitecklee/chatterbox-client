// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    // // TODO: Render _all_ the messages.
    roomname = Rooms.selected;
    MessagesView.$chats.empty();
    for (let i = Messages._data.length - 1; i > -1; i--) {
      if (roomname) {
        if (Messages._data[i].roomname === roomname) {
          MessagesView.renderMessage(Messages._data[i]);
        }
      } else {
        MessagesView.renderMessage(Messages._data[i]);
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    message.github_handle = message.github_handle || 'no_github';
    $('#chats').prepend(MessageView.render(message));

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log(event.target.innerHTML);
    Friends.toggleStatus(event.target.innerHTML);
    MessagesView.render();
    console.log(Friends._data);
  }

};