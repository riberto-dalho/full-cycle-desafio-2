FROM node:12.14.0-alpine3.11

#RUN apk add --no-cache bash
#RUN /bin/sh -c "apk add --no-cache bash"

RUN npm install -g @nestjs/cli@7.5.6

#USER node

WORKDIR /home/node/app

#Deploy Kube
# COPY . .

# RUN npm install

# EXPOSE 3000

# CMD [ "npm", "start" ]





#COPY ./docker/entrypoint.sh .
#RUN ["chmod", "+x", "/docker/entrypoint.sh"]

#COPY ./.docker/entrypoint.sh .
#RUN chmod +x ./entrypoint.sh

#CMD ["ls /bin", "/bin/chmod +x /home/node/app/docker/entrypoint.sh", "cd /home/node/app", "npm install", "/home/node/app/docker/entrypoint.sh"]