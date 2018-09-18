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
RUN touch /empty

FROM nginx:alpine

COPY --from=0 /empty /var/log/nginx/error.log
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /data/public /usr/share/nginx/html
CMD ["nginx", "-p", "/tmp", "-g", "daemon off;"]
EXPOSE 8080
