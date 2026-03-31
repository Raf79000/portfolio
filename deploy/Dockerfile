FROM nginx:1.27-alpine

# Remove default NGINX config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom NGINX config
COPY deploy/nginx.conf /etc/nginx/nginx.conf

# Copy static site files
COPY index.html base.css style.css app.js /usr/share/nginx/html/
COPY favicon.svg favicon.png /usr/share/nginx/html/

EXPOSE 80 443

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1
