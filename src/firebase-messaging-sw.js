// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js');

// Initialize the firebase app in the service worker by passing in the messaging senderId


firebase.initializeApp({
  'messagingSenderId':  '10395800507'
});

// Retrieve an instance of Firebase Messaging so that it cab handle background messages.
const messaging  = firebase.messaging();
