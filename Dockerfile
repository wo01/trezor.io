FROM debian:9
# RUN awk '$1 ~ "^deb" { $3 = $3 "-backports"; print; exit }' /etc/apt/sources.list > /etc/apt/sources.list.d/backports.list
RUN apt-get update
RUN apt-get install -y python3 python3-pip
#RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
#RUN apt-get install -y nodejs
#RUN npm i -g google-closure-compiler-linux
WORKDIR /app
COPY . /app
RUN pip3 install -r requirements.txt
# ENV FLASK_APP=run.py
# ENV LC_ALL=C.UTF-8
# ENV export LANG=C.UTF-8
EXPOSE 8000
CMD ["bash"]

