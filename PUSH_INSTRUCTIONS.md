# Instructions pour pousser le code sur GitHub

## 1. Créer le repo sur GitHub
- Allez sur https://github.com/new
- Nom du repo : `nutriwatt` (ou un autre nom de votre choix)
- Visibilité : Public ou Private
- **Ne cochez PAS** "Initialize this repository with a README"
- Cliquez sur "Create repository"

## 2. Une fois le repo créé, exécutez :

```bash
# Si le remote n'est pas déjà configuré
git remote add origin https://github.com/Raph13009/nutriwatt.git

# Ou si vous avez déjà un remote, changez-le :
git remote set-url origin https://github.com/Raph13009/nutriwatt.git

# Puis poussez le code
git push -u origin main
```

## Note sur le scroll

Le site utilise **Lenis** pour le smooth scroll. C'est une bibliothèque très populaire dans le milieu du développement web moderne qui crée un effet de scroll fluide et élégant, similaire à ce qu'on trouve sur des sites premium comme Apple, Stripe, Linear, etc.

Lenis utilise `requestAnimationFrame` pour créer un scroll ultra-fluide avec des animations personnalisables.

