FROM node:16.18-alpine3.15 AS node-builder
WORKDIR /client
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY ./ ./
RUN yarn build


FROM golang:1.18-alpine AS go-builder
WORKDIR /app
COPY ./server/go.mod ./server/go.sum ./
RUN go mod download
RUN go mod tidy
COPY ./server ./
RUN go build -o app .


FROM alpine AS final
WORKDIR /app
COPY --from=go-builder /app/app ./
COPY --from=node-builder /client/dist ./dist
EXPOSE 8080
CMD ["./app"]