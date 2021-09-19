// // chrome.browserAction.onClicked.addListener(function (tab) {
      
// //   })


// //   chrome.runtime.onInstalled.addListener(() => {
// //     chrome.contextMenus.create({
// //       "id": "sampleContextMenu",
// //       "title": "Sample Context Menu",
// //       "contexts": ["selection"]
// //     });
// //   });
// //define vars to hold time values
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// // Special min and sec var for fish func
// let totalMinutes = 0;
// let totalSeconds = 0;

// // Define vars to hold display value
// let displaySeconds = 0;
// let displayMinutes = 0;
// let displayHours = 0;

// // Define variable to hold stopwatch status
// let clockStatus = 'stopped';

// // chrome.runtime.sendMessage({ cmd: 'GET_TIME' }, response => {
// //     if (response.time) {
// //       const time = new Date(response.time);
// //       startTimer(time)
// //     }
// // });

// // Stopwatch function (logic to determine when to increment next value)
// function stopWatch() {

//     seconds++;
//     totalSeconds++;

//     // Logic to determine when to increment next value
//     if (seconds / 60 == 1) {
//         seconds = 0;
//         minutes++;
//         totalMinutes++;
//         if (minutes / 60 == 1) {
//             minutes = 0;
//             hours++;
//         }
//     }

//     changeFishImage(totalMinutes);
    
//     // If seconds/minutes/hours are a single digit then we add a leading 0 to the value
//     if (seconds < 10) {
//         displaySeconds = "0" + seconds.toString();
//     }
//     else {
//         displaySeconds = seconds;
//     }
//     if (minutes < 10) {
//         displayMinutes = "0" + minutes.toString();
//     }
//     else {
//         displayMinutes = minutes;
//     }
//     if (hours < 10) {
//         displayHours = "0" + hours.toString();
//     }
//     else {
//         displayHours = hours;
//     }
//     // Display updated time values to user
//     document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
//     // document.getElementById("totalMinutes").innerHTML = totalMinutes;
// }

// function notification() {
//   chrome.notifications.create('id', {
//       type: 'basic',
//       iconUrl: 'fish_images/fish.png',
//       title: 'Test Message',
//       message: 'pls work',
//       priority: 2
//   });
// }
// function changeFishImage(totalMinutes) {
//   var loc = '';
//   if (totalMinutes < 20) {
//       loc = 'fish_images/fish1.jpg';
//       notification();
//   }
//   else if ( (totalMinutes == 20) && (totalSeconds % 60 == 0) ) {
//       loc = 'fish_images/fish2.jpg';
//   }
//   else if((totalMinutes == 40) && (totalSeconds % 60 == 0)){
      
//       loc = 'fish_images/fish3.jpg';
//   }
//   else if((totalMinutes == 60) && (totalSeconds % 60 == 0)){
//       loc = 'fish_images/fish4.jpg';
//   }
//   else if((totalMinutes == 80) && (totalSeconds % 60 == 0)){

//       loc = 'fish_images/fish5.jpg';
//   }
//   else if((totalMinutes == 100) && (totalSeconds % 60 == 0)) {
      
//       loc = 'fish_images/fish6.jpg';

//   }
//   document.getElementById('im1').src = loc;
// }