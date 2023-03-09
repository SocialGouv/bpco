FROM node:16-alpine3.16
WORKDIR /api
ARG PRODUCTION

COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

COPY src ./src

COPY .env.staging .env.production ./
RUN if [ -z "$PRODUCTION" ]; then mv .env.staging .env && rm .env.production; else mv .env.production .env && rm .env.staging; fi

RUN chown -R node:node /api
USER 1000

ENV NODE_ENV=production
CMD ["yarn", "start"]
