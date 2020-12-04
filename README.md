Une petite librairie utilisée pour faire des requêtes HTTPs en utilisant l'objet ``XMLHttpRequest`` de Javascript.
La librairie est basé sur les promesses et s'inspire de [axios](`https://github.com/axios/axios).

**Méthodes**
```javascript
 requester.get('url').then(callback)
 requester.post('url',data).then(callback)
```
Elle implémente pour le moment juste le ``GET`` et le `POST`.

Cette exemple montre son utilisation pour fetcher des données d'une API tierce, les sources de la librairie se trouvent dans le fichier **requester.mjs**.

Vous pouvez le récupérer et ajouter d'autes méthodes comme le `PUT` ou le `PATCH`.

Hack it away 👨‍💻.
