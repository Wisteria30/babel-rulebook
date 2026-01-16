package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	distDir, _ := filepath.Abs("./dist")
	port := "8000"
	basePath := "/babel-rulebook"

	// Custom file server with SPA fallback
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		urlPath := r.URL.Path

		// Strip base path if present
		if strings.HasPrefix(urlPath, basePath) {
			urlPath = strings.TrimPrefix(urlPath, basePath)
			if urlPath == "" {
				urlPath = "/"
			}
		}

		if urlPath == "/" {
			urlPath = "/index.html"
		}

		path := filepath.Join(distDir, filepath.Clean(urlPath))

		// Check if file exists
		info, err := os.Stat(path)
		if err == nil && !info.IsDir() {
			http.ServeFile(w, r, path)
			return
		}

		// For assets, return 404 instead of SPA fallback
		if strings.HasPrefix(urlPath, "/assets/") {
			http.NotFound(w, r)
			return
		}

		// SPA fallback: serve index.html
		http.ServeFile(w, r, filepath.Join(distDir, "index.html"))
	})

	log.Printf("Server running at http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
