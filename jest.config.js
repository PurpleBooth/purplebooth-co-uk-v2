// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  modulePathIgnorePatterns: ["<rootDir>/tests/"],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const getConfig = createJestConfig(customJestConfig)

// Override transformIgnorePatterns to transform next-mdx-remote ESM in node_modules
module.exports = async () => {
  const config = await getConfig()
  config.transformIgnorePatterns = [
    '/node_modules/(?!next-mdx-remote)',
    '/\\.next/',
    '/dist/',
  ]
  return config
}
