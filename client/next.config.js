const prod = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    API_URL: prod ? 'https://vendorlist.co' : 'http://localhost:3001'
  }
}