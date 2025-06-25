class Room {
  constructor(name) {
    this.name = name;
    this.meetings = [];
  }

  // Check if a time slot is available
  isAvailable(startTime, endTime) {
    return !this.meetings.some(meeting =>
      startTime < meeting.endTime && endTime > meeting.startTime
    );
  }

  // Schedule a meeting (only if available)
  scheduleMeeting(startTime, endTime) {
    if (this.isAvailable(startTime, endTime)) {
      this.meetings.push({ startTime, endTime });
      return true;
    }
    return false;
  }

  getMeetings() {
    return this.meetings;
  }
}

export default Room;