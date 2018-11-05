FROM debian:9
RUN apt-get update
RUN apt-get install -y python3 python3-pip sass
WORKDIR /app
COPY . /app
RUN pip3 install -r requirements.txt
ENV LC_ALL=C.UTF-8
ENV export LANG=C.UTF-8
EXPOSE 8000
CMD ["cactus", "serve"]

