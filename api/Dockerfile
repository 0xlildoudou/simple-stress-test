FROM node:lts-alpine

WORKDIR /home/node

COPY . .
WORKDIR /home/node/app
RUN npm install

# ARG PORT
# EXPOSE ${PORT:-3000}

CMD ["npm", "run", "start"]