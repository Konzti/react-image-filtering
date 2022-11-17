package main

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"image-filter/constants"
	"image-filter/controllers"
	"image-filter/utils"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
	}
	utils.CheckError(utils.MakeImagesDir())

	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173", "http://127.0.0.1:5173"},
		AllowMethods:     []string{"PUT", "POST"},
		AllowCredentials: true,
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
	}))
	router.Use(static.Serve("/", static.LocalFile("./dist", true)))
	r := router.Group("/api")
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "ok",
		})
	})
	r.POST("/upload", controllers.UploadController)
	utils.CheckError(router.Run(constants.Port))
}
