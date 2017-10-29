var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents()
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false)
        // document.addEventListener('resume', this.onResume, false);
    },
    // deviceready Event Handler
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //console.log('Received Device Ready Event')
        //console.log('calling setup push')

        // dont setup push notification when app is ready, do it only after user accepts EULA
        // app.setupPush()

        window.prefix = window.cordova ? window.cordova.file.applicationDirectory + '/www/': ''
        // $.getScript('bundle.js',function(){
        //   var imported = document.createElement('script');
        //   imported.src = 'bundle.js';
        //   document.body.appendChild(imported);
        // })
        // $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBUmOq5vIrtMPY-8-Zv4eRotDAENgdmlQk&language=tr',function(){
        //   var imported = document.createElement('script');
        //   imported.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBUmOq5vIrtMPY-8-Zv4eRotDAENgdmlQk&language=tr';
        //   document.body.appendChild(imported);
        // })
    },
    alertDismissed(data) {
      console.log("alertDismissed",date);
      window.location.href = "/"
    },
    // setupPush: function() {
    //     //console.log('calling push init')
    //     var push = PushNotification.init({
    //         android: {
    //          senderID: "12345679"
    //         },
    //         browser: {
    //          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    //         },
    //         ios: {
    //          alert: "true",
    //          badge: "true",
    //          sound: "true",
    //          clearBadge: "true",
    //         },
    //         windows: {}
    //     });
    //     // console.log('after init')
    //     window.push = push
    //     push.on('registration', function(data) {
    //         //console.log('registration event: ' + data.registrationId)
    //         window.registerID = data.registrationId
    //
    //     });
    //
    //     push.on('error', function(e) {
    //         // console.log("push error = " + e.message)
    //     });
    //
    //   //   push.on('notification', function(data) {
    //   //       console.log('notification event')
    //   //       navigator.notification.alert(
    //   //           data.message,         // message
    //   //           () => alertDismissed(data),       // callback
    //   //           data.title,           // title
    //   //           'Ok'                  // buttonName
    //   //       );
    //   //  });
    // }
};

app.initialize();
