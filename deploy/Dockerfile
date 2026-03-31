FROM nginx:1.27-alpine

# Remplace la config racine par la nôtre
COPY deploy/nginx.conf /etc/nginx/nginx.conf

# Supprime la config par défaut et copie la nôtre
RUN rm -f /etc/nginx/conf.d/default.conf
COPY deploy/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copy static site files
COPY index.html base.css style.css app.js /usr/share/nginx/html/
COPY favicon.svg favicon.png /usr/share/nginx/html/
COPY sitemap.xml robots.txt /usr/share/nginx/html/

EXPOSE 80 443

RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
    && chown -R 1000:1001 /var/cache/nginx \
    && chown -R 1000:1001 /var/log/nginx \
    && chown -R 1000:1001 /etc/nginx \
    && touch /var/run/nginx.pid \
    && chown 1000:1001 /var/run/nginx.pid

USER 1000

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1
