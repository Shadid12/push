self.addEventListener('push', event => {
  const payload = event.data ? event.data.text() : 'no payload';
  console.log('SHOW PAYLOAD', payload);
  const { icon, message, data } = JSON.parse(payload);
  self.registration.showNotification('', {
    lang: 'la',
    body: message,
    icon,
    data,
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  console.log('Notification Clicked', event.notification);
  const { data } = event.notification;
  
  event.waitUntil(
    clients.openWindow(data.url)
  );
});
