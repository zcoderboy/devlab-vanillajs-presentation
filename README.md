# Récupération de données via les APIs du navigateur
Les navigateurs offrent des APIs utilisables depuis le Javascript afin d'effectuer des requêtes HTTP de maniére asynchrone. <br/>
Ces APIs peuvent par exemple être utilisées par une application frontend afin de communiquer avec une source de données tierce.<br/>
Parmi celles-ci on peut citer, l'objet ``XMLHttpRequest`` ou encore ``Fetch`` qui est plus récente.<br/>
À noter que ``Fetch`` est relativement nouveau et qu'il n'est par exemple pas supporté sur certaines versions de Firefox ou Chrome ou encore sur Internet Explorer (notre veil ami).

 **1. XMLHttpRequest**<br/>
 
Cette API permet d'envoyer des requêtes de façon asynchrone permettant ainsi de charger des données issues d'un serveur dans le DOM sans pour autant rafraîchir la page. <br/>
Un objet XMLHttpRequest expose des méthodes pouvant être utilisées afin d'ouvrir, d'envoyer une requête ou récupérer une réponse HTTP.
```javascript
xhr.open('VERB',url,true)
xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
		console.log(xhr.response)
	}
}
xhr.send()
```
 **2. Fetch**<br/>
 
 L'API ``Fetch`` est plus "developer friendly" et moins verbeux que le ``XMLHttpRequest``. <br/>
 En effet celle-ci se base sur les [promesses](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) et en retourne une qui résoud avec la réponse de la requête HTTP. 
```javascript
fetch('https://devlab-region.glitch.me/api/regions')
  .then(response => response.json())
  .then(data => console.log(data);
```
`fetch` peut aussi reçevoir un second paramétre qui est un objet permettant de définir la méthode utilisée ou encore passer des entêtes à la requête.
```javascript
fetch('url',{
  method: 'POST',
  headers: new Headers()	
})
```
Du fait que cette API se base sur les promesses, il est donc possible d'utiliser des techniques comme ``async/await`` afin d'avoir une manipulation plus facile et plus compréhensible. 
```javascript
(async function(){
	let response = await fetch('https://devlab-region.glitch.me/api/regions')
	let regions = await response.json()
	console.log(regions)
})()
```