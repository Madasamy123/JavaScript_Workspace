import Room from "./Room.js";

class Office {
  constructor() {
    this.rooms = [];
    this.employees = [];
  }

  createRoom(name) {
    const room = new Room(name);
    this.rooms.push(room);
    return room;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  // Delegates to Room's scheduleMeeting
  scheduleMeeting(roomName, startTime, endTime) {
    const room = this.rooms.find(r => r.name === roomName);
    if (!room) return false;
    return room.scheduleMeeting(startTime, endTime);
  }

  showBookings() {
    for (const room of this.rooms) {
      console.log(`\nRoom: ${room.name}`);

      const meetings = room.getMeetings();
      if (meetings.length === 0) {
        console.log("  No bookings.");
      } else {
        for (const meeting of meetings) {
          console.log(`  ${meeting.startTime} - ${meeting.endTime}`);
        }
      }
    }
  }
}

export default Office;