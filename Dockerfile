# Static site — nginx serves index.html, app.js, shows.csv, and img/
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html app.js shows.csv /usr/share/nginx/html/
COPY img/ /usr/share/nginx/html/img/

EXPOSE 80
