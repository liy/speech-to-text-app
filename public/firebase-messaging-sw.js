// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize Firebase
var config = {
  // You can get the sender id from: https://console.firebase.google.com/u/2/project/speech-to-text-236211/settings/cloudmessaging/
  // Used to validate the sender by firebase cloud messaging lib.
  messagingSenderId: "190734931135"

  // Also note that, gcm_sender_id is added into the manifest.json file
  // It is completely different from messagingSenderId.
  // I imagine it is identifier for the whole firebase cloud messaging service.
  // You can read more about it here
  // https://firebase.google.com/docs/cloud-messaging/js/client#configure_the_browser_to_receive_messages
  // https://developer.clevertap.com/docs/find-your-gcm-sender-id-gcm-api-server-key
};
firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
