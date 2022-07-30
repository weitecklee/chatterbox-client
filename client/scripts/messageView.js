// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"><%- username %></div>
        <div><%- text %></div>
        <div class="meta">Roomname: <%- roomname %></div>
        <div class="meta">Github: <%- github_handle %></div>
        <div class="meta"><%- moment(created_at).format("dddd, MMMM Do YYYY, HH:mm:ss") %></div>
      </div>
    `)

};