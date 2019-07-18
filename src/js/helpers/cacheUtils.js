export function getCacheMatch(request){
    return window.cache.match(request).then((response) => console.log(request, response));
}