// FIGURE OUT WHAT SET OF CREDENTIALS TO RETURN

if (process.env.NODE_ENV === "production") {
    // WE ARE IN PRODUCTION - RETURN THE PROD SET OF KEYS
    module.exports = require('./prod')

} else {
    // WE ARE IN DEVELOPMENT -RETURN THE DEV KEYS
    module.exports = require('./dev')
}
