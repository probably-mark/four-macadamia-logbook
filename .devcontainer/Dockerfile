FROM node:18-bullseye

# svelte and synthwave '84 extensions currently need to be installed in the extensions section after every [re]build will want to add them here later
RUN npm install -g eslint prettier

# always need to run update with an install statement as per 2nd answer in this stackexchange:
# https://stackoverflow.com/questions/27273412/cannot-install-packages-inside-docker-ubuntu-image
# lsof is used to show running processes (for killing the website when it is running on a port still)
# use apt-get for ubuntu based
RUN apt-get update && apt-get install -y lsof
# use apk for alpine based
# RUN apk update && apk add lsof

# # add bash
# RUN apk add bash

# not sure this expose is being used, since it always deployes on port 8080
# seems to be used by docker
EXPOSE 6001

# not sure this is beeing used either
ENV HOST=0.0.0.0
ENV PUPPETEER_SKIP_DOWNLOAD=true

# set user as root
# USER root

# CMD [ "npm", "start" ]

# RUN apk update && apk apk add git

# # intall git
RUN apt-get -y update && apt-get -y install git && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/man/?? /usr/share/man/??_*
# RUN apk update && apk upgrade && apk add --no-cache bash git openssh

RUN apt-get -y -q update && apt-get -y -q install --no-install-recommends locales\
 && locale-gen en_US.UTF-8 && dpkg-reconfigure locales\
 && apt-get -y -q autoremove && apt-get -y -q autoclean
