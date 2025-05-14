package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/gin-contrib/cors"
)

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},
		AllowMethods: []string{"GET", "POST"},
		AllowHeaders: []string{"Origin", "Content-Type"},
	}))

	// Serve HTML templates from "templates" folder
	r.LoadHTMLGlob("templates/*")

	// Simple GET route (JSON response)
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Test message"})
	})

	// Template rendering route
	r.GET("/hello", func(c *gin.Context) {
		name := c.DefaultQuery("name", "Guest") // fallback if name not provided
		c.HTML(http.StatusOK, "hello.tmpl", gin.H{
			"name": name,
		})
	})

	r.Run() // listens on :8080
}
