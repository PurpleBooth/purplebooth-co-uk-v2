.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

deploy: ## Build, push and deploy project
	skaffold run

autoformat:
	textlint --fix content/**/*.md
	prettier --write content/**/*.md

lint:
	 proselint content/*/**.md
	 prettier content/**/*.md
	 textlint content/**/*.md
