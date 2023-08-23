# PWA-Base
Diretório que armazenará a base para criação de PWAs (progressive web apps). 

# Icon
Para adicionar ícones escolha a imagem de preferência utilize o comando
````
  npx pwa-asset-generator logo.png icons
````
Substitua o logo.png pelo nome do arquivo de ícone e o "icons" pelo nome da pasta que deseja armazenar os ícones.
Em seguida o programa emitirá o código para adicionar ao "icons": [] no seu arquivo manifest.json. Copie tudo e cole para realizar a importação das imagens geradas.

Para iniciar a aplicação utilize:
````
  npx serve
````
E para verificar a funcionalidade utilize o lighthouse do devtools no inspecionar do navegador.
