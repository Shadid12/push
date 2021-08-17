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
  endpoint: 'https://fcm.googleapis.com/fcm/send/cCO9LK34Dcc:APA91bFZfM6SHLBN_mbfGCLNCUtkNhAcdGUn8wS31xq5ITMM40uOP_J8YAoD4oblMX7-fBkv3QiXczBXK2VAbvNvW7n96UWAcn0wkuOspCnZGqPjAyuOrA1V6zoUJ7LRUH7xkcc-pNw9',
  keys: {
    auth: 'qg-6MjYS-9U0Zsc7eYlTSw',
    p256dh: 'BOiIddco3SPyXmYGrpPo6wmi65ztvpcPWRqkRViMKS5NCZpKayecME8nfqocdHMNFqZSJWktFYvKwaZ4-bCaVmo'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
