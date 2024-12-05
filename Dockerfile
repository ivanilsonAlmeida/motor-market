FROM node:20 AS builder

WORKDIR /motor-market

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20

WORKDIR /motor-market

COPY --from=builder /motor-market/dist ./dist
COPY --from=builder /motor-market/package*.json ./

RUN npm install --only=production

ENV NODE_ENV=local

EXPOSE 3000

CMD ["node", "dist/main.js"]