const config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.cjs"],
  testEnvironmentOptions: {
    url: "http://localhost/",
    verbose: true,
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
};

module.exports = config;
