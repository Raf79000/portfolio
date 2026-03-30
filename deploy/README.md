# Déploiement Docker — Portfolio

## Prérequis

- Docker
- Docker Compose (v2)

## Lancement rapide

Depuis le dossier `deploy/` :

```bash
docker compose up -d --build
```

Le site est accessible sur `http://localhost:8080`.

## Commandes utiles

```bash
# Rebuild après modification des fichiers
docker compose up -d --build

# Voir les logs
docker compose logs -f portfolio

# Arrêter
docker compose down

# Build seul (sans compose)
cd .. && docker build -f deploy/Dockerfile -t portfolio .
docker run -d -p 8080:80 --name portfolio portfolio
```

## Structure

```
deploy/
├── Dockerfile          # NGINX 1.27 Alpine, multi-layer optimisé
├── docker-compose.yml  # Orchestration, port 8080:80
├── nginx.conf          # Gzip, cache 30j, security headers, CSP, SPA fallback
├── .dockerignore       # Exclusion .git et docs
└── README.md           # Documentation de déploiement
```

## Configuration NGINX

- **Gzip** activé pour CSS, JS, SVG
- **Cache** 30 jours sur les assets statiques
- **Security headers** : X-Frame-Options, CSP, X-Content-Type-Options
- **SPA fallback** : toutes les routes servent `index.html`
- **Healthcheck** intégré

## Personnalisation du port

Modifier le mapping dans `docker-compose.yml` :

```yaml
ports:
  - "3000:80"  # port souhaité:80
```
