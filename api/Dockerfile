FROM node:16-alpine3.16
ARG PRODUCTION

RUN chown -R 1000:1000 /home/node && \
  chmod -R 755 /home/node && \
  mkdir /api && \
  chown 1000:1000 /api

USER 1000
WORKDIR /api

COPY yarn.lock .yarnrc.yml ./
COPY --chown=1000:1000 .yarn .yarn
RUN yarn fetch workspaces focus --production

COPY src ./src

COPY --chown=1000:1000 .env.staging .env.production ./
RUN if [ -z "$PRODUCTION" ]; then mv .env.staging .env && rm .env.production; else mv .env.production .env && rm .env.staging; fi

ENV NODE_ENV=production
CMD ["node","./src/index.js"]
