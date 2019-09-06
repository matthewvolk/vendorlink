const prod = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    API_URL: prod ? 'https://vendorlink.co' : 'http://localhost:3001'
  }
}