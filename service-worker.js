importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'); /// Importa o serviço workbox

workbox.routing.registerRoute( ///Le os arquivos de icone no projeto
    ({request}) => request.destination  === "image",
    new workbox.strategies.CacheFirst() // Cria a estratégia de cache onde a aplicação verifica primeiro se há algo salvo no cache (util para coisas que não se modificam)
);