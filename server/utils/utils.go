package utils

import (
	"crypto/rand"
	"encoding/hex"
	"image-filter/constants"
	"os"
)

func MakeImagesDir() error {
	if _, err := os.Stat(constants.Folder); os.IsNotExist(err) {
		err = os.MkdirAll(constants.Folder, 0755)
		if err != nil {
			return err
		}
	}
	return nil
}

func DeleteFile(path string) error {
	err := os.Remove(path)
	if err != nil {
		return err
	}
	return nil
}

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}

func RandomHex() string {
	b := make([]byte, 16)
	_, err := rand.Read(b)
	if err != nil {
		panic(err)
	}
	return hex.EncodeToString(b)
}
