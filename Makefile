.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

deploy: ## Build, push and deploy project
	docker build -t gcr.io/purplebooth-gke/github-purplebooth-purplebooth-co-uk-v2:latest .
	docker push gcr.io/purplebooth-gke/github-purplebooth-purplebooth-co-uk-v2:latest
ifeq (, $(shell helm list --all | grep "purplebooth-co-uk" ))
	helm install --name=lovely-ant ./helm -f secrets/helm-secrets.yml
else
	helm upgrade lovely-ant ./helm -f secrets/helm-secrets.yml
endif

autoformat:
	textlint --fix content/**/*.md
	prettier --write content/**/*.md

lint:
	 proselint content/*/**.md
	 prettier content/**/*.md
	 textlint content/**/*.md
