# Lint
lint:
  npx prettier -c services/ components/ pages/ styles/ tests/
  npm run lint

# Format what we can
fmt:
  npx prettier -w services/ components/ pages/ styles/ tests/
  npm run lint -- --fix

# Test
test:
  npm run test

# End to end tests
playwright:
  npx playwright test

# Build
build:
  npm run build

