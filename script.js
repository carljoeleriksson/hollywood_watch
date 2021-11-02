// Copy and paste this code into your main script file
// The purpose is to register the service worker
// The browser will load sw.js for us if you do this

if ('serviceWorker' in navigator) {
	// Assumes your service worker has file name "sw.js"
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('Registration succeeded. Scope is ' + reg.scope);
    });
}