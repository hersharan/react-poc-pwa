export function getCacheMatch(request){
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