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
  endpoint: `https://fcm.googleapis.com/fcm/send/cyfKwv7n7Lw:APA91bEP8EDp9-YtWI6ET1c_Jy_svWABR2TeRetQ2LJW0xPVTq4S2i6CdjFVIxjAsO9IUoNnDrqqSxzeYYC6hB-lWOb8iYii_79BwVeRFZZyCM_ycQqAB5qBrTLDBVy-XPxJd-eebsBh`,
  keys: {
    auth: 'FqmtFyAolxlY9TKXKrzCYg',
    p256dh: 'BPRMH6itilnexYPAydgh36MakXhlshQXdNfNZSyFQuyp7C33QoRUf5cabagZVEEQEFVKZn-zLwvzOz6umEdjKlc'
  }
};

webpush.sendNotification(pushSubscription, JSON.stringify({
  icon: 'https://freeiconshop.com/wp-content/uploads/edd/notification-flat.png',
  message: 'Check Out the New Apple Stocks',
  data: {
    url: 'https://www.youtube.com/'
  }
}));