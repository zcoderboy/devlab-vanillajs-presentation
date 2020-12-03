# ES6 features
L'ECMAScript 6 ou ES6 est une révision majeure du Javascript sortie en Juin 2015 (malgré le 6 dans son nom). Cette révision a été faite dans la logique d'améliorer et faciliter le déloppement en JavaScript. 
Bien qu'il n'existe pas encore un support complet des fonctionnalités du ES6 dans les navigateurs, les navigateurs comme Google Chrome, Firefox ou Safari offrent quand même une bonne couverture.
Il est aussi possible d'utiliser des outils de transpilation afin de convertir du ES6 en ES5 afin d'avoir une meilleure couverture sur des navigateurs comme Internet Explorer par exemple.
Dans cette section nous allons parcourir quelques features ES6 et expliquer leur fonctionnement.

 **1. let et const**<br/>
 
 Les mots clés **let** et **const** sont utilisés pour déclarer des variables, mais leur fonctionnement différe.
 
 - **let** est utilisé principalement lorsque l'on veut avoir une variable dont le scope lexical est limité à un bloc de code. Les variables déclarées avec let ne sont pas "hoisted" contrairement à celles déclarées avec **var**, si on tente d'utiliser celles-ci avant leur déclaration on obtient une erreur de type **ReferenceError**.
 - **const** est utilisé pour déclarer une variable dont la valeur est "immutable" (oui entre guillemets) c'est à dire que la référence ne pourra pas changer durant l'exécution du programme. Cependant si cette valeur est un objet ou un tableau, on peut ajouter des propriétés ou des valeurs.<br/>
 *NB: let et const ne sont pas "hoisted"*
 
 **2. Le type Symbol**<br/>
 
 Symbol est un nouveau type primitif ajouté dans le ES6 qui permet de réprésenter des valeurs uniques et immutables. Son but principal est d'éviter les collisions entre des propriétés qui pourraient avoir le même nom limitant ainsi le risque d'introduction de bogues dans les programmes JavaScript.
 
 **3. Les fonctions fléchées**<br/>

 Les fonctions fléchées sont une alternative aux expressions de fonction. Elles sont souvent utilisées de façon anonyme c'est à dire qu'elles ne portent pas de nom.<br/>
Ces fonctions ont un comportement spécial quant à leur binding `this` car elles n'en possédent pas, ces derniéres utilisent automatiquement celui du scope qui les englobe.
```javascript
() => { console.log('I am an arrow function') }
```

 **4. L'interpolation**<br/>
 
 L'interpolation permet d'utiliser des espaces reservés dans une chaine de charactéres (string literal). Pour utiliser une interpolation dans une chaine, il faut l'entourer des backticks: **``**.
```javascript
var text = `Welcome to DevLab ${firstName} ${lastName}`;
```

 **5. Les classes**<br/>

Les classes en JavaScipt ne sont rien de plus que du sucre syntaxique autour du systéme de prototype qu'utilise réellement le langage.
Toute entité en JS posséde un prototype de base qui contient des propriétés et méthodes partagées entre les objets du même type.</br>
Le langage s'appuie sur ce mécanisme pour fournir un systéme d'héritage, il est donc possible pour des entités du même type de surcharger les méthodes qui sont définis dans leur prototype.<br/>
Par défaut si toutefois une propriété ou une méthode ne se trouve pas directement dans un objet par exemple, il est automatiquement recherché dans son prototype, puis dans le prototype de son prototype et ainsi de suite.
C'est ce que l'on appelle en JS la chaine de prototype (prototype chain).<br/> 
Il est important de bien comprendre comment ce systéme de prototype fonctionne afin de mieux appréhender le langage car même si syntaxiquement on peut utiliser les classes en JS, le fonctionnement différe quand même des autres langages de programmation.
```javascript
class DiscordServer {
 constructor(){
   this.name = "Dev Lab"
   this.membersCount = 39
 }
 incrementCount(){
   return this.membersCount = this.membersCount - 1
 }
}	
```
 
 **6. Les modules**</br>

 Les modules servent à résoudre un probléme spécifique du JS à savoir : comment séparer et réutiliser du code Javascript ?<br/>
En effet, le Javascript peut être trés volumineux et difficile à gérer si certains éléments ne sont pas modularisés et partagés à travers le code.<br/>
Avec l'introduction d'un systéme de modules dans le ES6, il était donc question d'ammener cette fonctionnalité dans le navigateur car des environnements comme NodeJS supportait déja un systéme de modules avec des projets comme AMD, CommonJS ou encore RequireJS.<br/>
Les deux mots-clés ``export`` et ``import`` permettent alors d'exporter et d'importer un élément Javascript.<br/>
Les exportations peuvent être nommées ou par défaut.
- Les exportations nommées
 
Un export est nommé lorsque le nom utilisé pour l'exportation est le même que celui utilisé pendant l'importation.
On a donc l'exemple ci-dessous  à l'exportation
```javascript
export function sayHello(){}
export const name = "Default name"
```
Pour importer ces éléments, la syntaxe ci-dessous est utilisée
```javascript
import { sayHello, name } from '../file-path'
```
- Les exportations par défaut

Un export par défaut est utilisé quand on souhaite exporter un seul élément d'un module spécifique. Un module peut avoir un seul export par défaut mais peut utilisé plusieurs exportations nommés.
```javascript
export default serverName = "DevLab"
//Importation
import serverName from '../file-path'
```
À noter que l'on peut aussi créer des alias à l'exportation et à l'importation pour éviter des collisions avec le mot-clé `as` ou encore importer tous les éléments d'un module.

**Lien utiles**<br/>
[ES6 features](http://es6-features.org)<br/>
[TC39 proposals](https://github.com/tc39/proposals)<br/>
[TC39](https://tc39.es/)

