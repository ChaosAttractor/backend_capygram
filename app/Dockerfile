ARG IMAGE_NODE

FROM $IMAGE_NODE AS build
WORKDIR /app/
COPY --chown=node:node ./npmrc/prepare.sh /npmrc/
COPY --chown=node:node ./app/package*.json ./
RUN sh /npmrc/prepare.sh
RUN npm i --no-audit --progress=false
COPY --chown=node:node ./app/ ./
RUN npm run build
ENV NODE_ENV production
RUN npm ci --no-audit --progress=false --only=production && \
    npm i -D sequelize-cli@6.6.0
USER node

FROM $IMAGE_NODE AS production
WORKDIR /app/
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node --from=build /app/migrations ./migrations
USER node

CMD ["node", "./dist/main.js"]
