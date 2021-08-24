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
  endpoint: `https://fcm.googleapis.com/fcm/send/ccjKcDh1kmg:APA91bEi-ZxycPsfM2asbowdKPwojpABeOP0LuAm2Rr2896CUGqllIjTjHCD8zZF4NzntVVhiQSYtq-huNpVCsW-3XrEOtgkMPvQvy1qgKjAsRBnWt0dmyneZAuDxKzsHGe121m7fkzf`,
  keys: {
    auth: '1ba4zTUfQ0LHV10FEqz7zQ',
    p256dh: 'BG72YknVFgL5W7e-ry9X6w_Ue4yF-d7CjM8JlDy1V2L-wBljnY1dpwFxC48zfqQuIQEZK69t-abE07m9ChFU4vY'
  }
};

webpush.sendNotification(pushSubscription, JSON.stringify({
  icon: 'https://freeiconshop.com/wp-content/uploads/edd/notification-flat.png',
  message: 'Check Out the New Apple Stocks',
  data: {
    url: 'https://www.youtube.com/'
  }
}));