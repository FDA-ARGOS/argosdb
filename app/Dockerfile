FROM nginx:1.21.0-alpine as production

ENV NODE_ENV production

RUN mkdir -p /data/shared/glyds

RUN ln -s /data/shared/glyds /usr/share/nginx/html/ln2data

RUN ln -s /data/shared/glyds/releases /usr/share/nginx/html/ln2releases

RUN ln -s /data/shared/glyds/downloads /usr/share/nginx/html/ln2downloads

RUN ln -s /data/shared/glyds/releases/ftp /usr/share/nginx/html/ftp

COPY ./build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
