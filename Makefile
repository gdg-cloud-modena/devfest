SSH_USER=devfest
HOST=devfest.modena.it
DESTINATION=~/httpdocs/
HUGO_VERSION=0.148


.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| sort \
		| awk 'BEGIN {FS = ":.*?## "}; \
		{printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo "Requires Hugo v$(HUGO_VERSION)"


.PHONY: build
build: ## Build with Hugo
	hugo-$(HUGO_VERSION) --minify


.PHONY: serve
serve: ## Run Hugo server
	hugo-$(HUGO_VERSION) serve --minify --disableFastRender


.PHONY: upload
upload: ## Publish online
	rsync -rave ssh public/ --delete ${SSH_USER}@${HOST}:${DESTINATION} \
		--exclude share

.PHONY: clean
clean: ## Deletes temporary files and builds
	rm -rf public/
	rm -rf resources/
	rm -f .hugo-build.lock

.PHONY: publish
publish: clean build upload ## Publish online
