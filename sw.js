self.addEventListener('push', () => {
  self.registration.showNotification('Hello world!', {
    lang: 'la',
    body: 'Alea iacta est',
    icon: 'https://images.unsplash.com/photo-1445400729573-1f666abb9447',
    vibrate: [500, 100, 500],
  });
});
