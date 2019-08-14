/**
 * If the module you are mocking is a Node module (e.g.: lodash), the mock
 * should be placed in the __mocks__ directory adjacent to node_modules.
 * https://jestjs.io/docs/en/manual-mocks
 */

/**
 * Define mock
 */

const axios = {
  get: jest.fn().mockResolvedValue({ data: [] }),
  post: jest.fn().mockResolvedValue({ data: [] }),
  put: jest.fn().mockResolvedValue({ data: [] }),
  delete: jest.fn().mockResolvedValue({ data: [] }),
  create: () => {
    return {
      get: jest.fn().mockResolvedValue({ data: [] }),
      post: jest.fn().mockResolvedValue({ data: [] }),
      put: jest.fn().mockResolvedValue({ data: [] }),
      delete: jest.fn().mockResolvedValue({ data: [] }),
    }
  }
}

/**
 * Export mock
 */

export default axios;
