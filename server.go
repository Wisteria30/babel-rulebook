package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	distDir, _ := filepath.Abs("./dist")
	port := "8000"

	// Custom file server with SPA fallback
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		urlPath := r.URL.Path
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

		// SPA fallback: serve index.html
		http.ServeFile(w, r, filepath.Join(distDir, "index.html"))
	})

	log.Printf("Server running at http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
