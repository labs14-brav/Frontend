/**
 * Define mock
 */

const axioswithAuth = () => {
  return {
    get: jest.fn().mockResolvedValue({ data: [] }),
    post: jest.fn().mockResolvedValue({ data: [] }),
    put: jest.fn().mockResolvedValue({ data: [] }),
    delete: jest.fn().mockResolvedValue({ data: [] }),
  }
}

/**
 * Export mock
 */

export default axioswithAuth;
