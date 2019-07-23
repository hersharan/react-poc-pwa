export function getCacheMatch(request) {
  return caches.match(request).then((response) => {
    if (!response) {
      return fetch(request)
        .then(res => {
          return res.arrayBuffer();
        });
    }
    return response.arrayBuffer();
  });
}

export function cacheAdd(cacheName,url){
  caches.open(cacheName).then(cache => {
    cache.add(url).then(() => {
      //done!
      console.log('added');
    }).catch((error)=>{
      console.log('Error');
    })
  })
}

export function cacheAddAll(cacheName,urls){
  caches.open(cacheName).then(cache => {
    cache.addAll(urls).then(() => {
      //all requests were cached
      console.log('all added');
    })
  })
}