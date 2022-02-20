// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/abduls20/pinboard1/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}
