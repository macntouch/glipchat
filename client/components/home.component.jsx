// Dependencies
var RoomStore   = null;
var RoomActions = null;

Dependency.autorun(()=> {
  RoomStore   = Dependency.get('RoomStore');
  RoomActions = Dependency.get('RoomActions');
});

HomeComponent = React.createClass({
  createRoom() {
    RoomActions.createRoom();
  },

  render() {
    return (
      <div>
        <HeaderComponent />
        <div>
          <p>welcome to meteor react webrtc</p>
          <button onClick={this.createRoom}>start room</button>
        </div>
        <FooterComponent />
      </div>
    );
  },
});
