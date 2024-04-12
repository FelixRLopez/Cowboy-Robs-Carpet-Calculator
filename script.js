/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇

  const room1SqFt = getRoomWidth(1) * getRoomLength(1);
  const room2SqFt = getRoomWidth(2) * getRoomLength(2);
  const totalRoomSqFt = room1SqFt + room2SqFt;
  const carpetSqFt = totalRoomSqFt * 1.1;
  showResult(carpetSqFt);
  // console.log("click");

}
calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations: 

  getRoomWidth/Length validates the room number and returns the width/length of the room if it's valid and if it's not valid it returns 0. It gets the value from html using getElementById.

  showResult takes the result, fixes it to 2 decimal places, and then assigns it to the html using getElementById.

	2. Custom styles added: 

  I added the following:

    button {
      background-color: #0d4c2a;
      transform: scale(0.9);
      transition: all 0.3s ease-in-out;
    }

    button:hover {
      background-color: #229956;
      transform: scale(1.0);
    }

    button:active {
      transform: scale(0.8);
    }
*/