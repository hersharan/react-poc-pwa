export function getCacheMatch(request){
    return caches.match(request).then((response) => console.log(request, response));
}