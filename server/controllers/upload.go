package controllers

import (
	"context"
	"fmt"
	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/gin-gonic/gin"
	"image-filter/constants"
	"image-filter/utils"
	"net/http"
	"os"
)

func UploadController(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		fmt.Println(err)
	}

	fileName := utils.RandomHex() + ".jpg"

	utils.CheckError(c.SaveUploadedFile(file, constants.Folder+"/"+file.Filename))

	cld, _ := cloudinary.NewFromParams(os.Getenv("CLOUD_NAME"), os.Getenv("API_KEY"), os.Getenv("API_SECRET"))

	resp, err := cld.Upload.Upload(context.Background(), constants.Folder+"/"+file.Filename, uploader.UploadParams{PublicID: fileName, Folder: "image_filter_uploads"})
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "File could not be uploaded",
		})
		utils.CheckError(utils.DeleteFile(constants.Folder + "/" + file.Filename))
		return
	}
	utils.CheckError(utils.DeleteFile(constants.Folder + "/" + file.Filename))
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("file", file.Filename, 3600, "/", "localhost", false, true)

	c.JSON(http.StatusOK, gin.H{
		"imgUrl": resp.SecureURL,
	})

}
