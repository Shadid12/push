const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/f_jbUmv1h9s:APA91bFRlZru7qXQKMPwuJO6xRNkfHcxRx1R0pn6eNt9qDf9PBR1F43UF9xxROct19p3AeMKRN4P7-DUlE3IzZISlio64VnU_L8yfHHbRPa5yoeRHNhSH7hgMWNb1SGhwO7LQmC4n24n',
  keys: {
    auth: 'hLP8wu7qsdcALj6Q8qX2lg',
    p256dh: 'BBMIL5LY5heFDsUpZwFVCbUEvdVL1kat0FyskEp5s6vtYQ77wtljgcPqURGcuTLkHkz3nL18DJ_OmMb7mBGlB0c'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
