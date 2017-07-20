FROM nginx

RUN chmod a+r /etc/nginx/conf.d/default.conf && \
    apt-get update && \
    apt-get install -y wget && \
    rm -r /var/lib/apt/lists/* && \
    wget https://github.com/spf13/hugo/releases/download/v0.15/hugo_0.15_linux_amd64.tar.gz \
         -O /tmp/hugo.tar.gz && \
    tar -xvzf /tmp/hugo.tar.gz -C /tmp && \
    mv /tmp/hugo*/hugo* /usr/local/bin/hugo && \
    rm -rf /tmp/hugo.tar.gz /tmp/hugo*/hugo*

RUN mkdir -p /data
WORKDIR /data
COPY . /data
COPY default.conf /etc/nginx/conf.d/default.conf

RUN hugo && \
    rm -rf /usr/share/nginx/html && \
    cp -r public /usr/share/nginx/html && \
    rm -rf /data

EXPOSE 80
