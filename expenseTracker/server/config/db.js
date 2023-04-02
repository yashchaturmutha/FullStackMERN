const mongoose = require("mongoose");

module.exports = async() => {

    try {
		const conn=await mongoose.connect(process.env.DB_CONNECTION,  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(conn.connection.host);
		console.log("Connected to database successfully");
	}

    catch (error) {
		console.log(error);
		console.log("Could not connect Database !");
	}
};