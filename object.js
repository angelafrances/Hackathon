var hotel = { 
  name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: true,
  pool: false,
  
  roomsAvail: function() {
      
     return this.rooms - this.roomsBooked;
  }};

   function clicked_on(){
        document.getElementById('hotelName').innerHTML = hotel.name;
        document.getElementById('totRooms').innerHTML = hotel.rooms;
        document.getElementById('availRooms').innerHTML = hotel.roomsAvail();
    };

  
