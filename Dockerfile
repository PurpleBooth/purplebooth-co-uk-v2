FROM debian

RUN apt-get update && \
    apt-get install -y wget && \
    rm -r /var/lib/apt/lists/*

RUN wget https://github.com/gohugoio/hugo/releases/download/v0.31.1/hugo_0.31.1_Linux-64bit.tar.gz \
         -O /tmp/hugo.tar.gz && \
    tar -xvzf /tmp/hugo.tar.gz -C /tmp

RUN mkdir -p /data
WORKDIR /data
COPY . /data

ARG hugobaseurl="https://purplebooth.co.uk"
RUN echo /tmp/hugo --baseUrl=$hugobaseurl
RUN /tmp/hugo --baseUrl=$hugobaseurl

FROM nginx:alpine

ENV PORT=8080
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=0 /data/public /usr/share/nginx/html
CMD ["sh", "-c", "mkdir -p /var/log/nginx && envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
EXPOSE 8080
