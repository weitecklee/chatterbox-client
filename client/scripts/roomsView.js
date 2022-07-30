// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (let i = 0; i < Messages._data.length; i++) {
      if (Messages._data[i].roomname && Messages._data[i].roomname.length) {
        Rooms.add(Messages._data[i].roomname);
      }
    }
    Rooms._data.forEach(RoomsView.renderRoom);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append(`<option value="${roomname}">${roomname}</option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.selected = event.target.value;
    MessagesView.render();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = window.prompt('Enter room name:', 'room name');
    if (roomname) {
      RoomsView.$select.append(`<option value="${roomname}">${roomname}</option>`);
      Rooms.add(roomname);
    }
  }

};
