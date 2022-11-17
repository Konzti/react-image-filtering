## Basic Image Filtering

This is a basic Image Filtering application using React and pixi.js.
I couldn't get PixiReact to work with React 18, so I just used Pixi.js directly.
<br/>
https://pixijs.com
https://github.com/pixijs/pixijs

Vite is the best way to get a client side React app up and running:
<br/>
https://github.com/vitejs/vite


The Golang (Gin) backend handles file upload to Cloudinary CDN
<br/>
https://github.com/gin-gonic/gin
<br/>
amazing CDN: https://cloudinary.com/users/register_free
<br/>

## Important:

You need a cloudinary account to make it work, for a demo visit https://maleeyo.com.

## Usage

### --- Development ---

#### 1. Run Server

`cd server`
<br/>
`go build main.go -o server`
<br/>
`./server`

#### 2. Run Client

`yarn && yarn dev`
<br/>
make sure to update your frontend port in `server/main.go` CORS configuration
<br/>

### --- BUILD and RUN as DOCKER CONTAINER ---

#### 1. Build docker image

`docker build -t image-filtering .`
<br/>

#### 1. run app container

`docker run -d --env-file=path_to_your_env_file -p 8080:8080 --name image-filtering image-filtering`
