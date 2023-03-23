module.exports = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGODB_URI || "mongodb+srv://oyedeleholaji84:Wordwide@cluster0.p0ujvth.mongodb.net/?retryWrites=true&w=majority",
    //'mongodb://localhost:27017/file-sharing-app',
    uploadDir: "./uploads",
    linkExpirationTime: 1 * 60 * 1000,//24 * 60 * 60 * 1000, // 24 hours
    baseUrl: "http://127.0.0.1:3000",
    authToken: "768920isdjf"
};
