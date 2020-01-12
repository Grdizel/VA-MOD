chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 285,
      'height': 820
    },alwaysOnTop: true
  });

});