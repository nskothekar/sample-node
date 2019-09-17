FROM node:boron
#RUN mkdir -p /usr/src/app
COPY . /
#WORKDIR /usr/src/app
RUN /usr/local/bin/npm install
EXPOSE 3000 
CMD [ "/usr/local/bin/node", "server.js" ]
