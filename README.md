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
 
 **3. Les fonctions fléchées**
 
 **4. L'interpolation**
 L'interpolation permet d'utiliser des espaces reservés dans une chaine de charactéres (string literal). Pour utiliser une interpolation dans une chaine, il faut l'entourer des backticks: **``**.
```javascript
var text = `Welcome to DevLab ${firstName} ${lastName}`;
$("#post").html`
  <h1>${text}</h1>
  ${body}
`;
```
 **5. Les classes**
 
 **6. Les modules**

