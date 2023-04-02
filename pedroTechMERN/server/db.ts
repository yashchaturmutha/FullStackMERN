import mongoose, { ConnectOptions } from 'mongoose';

const connection = () => {

    try {
		mongoose.connect('mongodb+srv://ymc:sSF0wJ73I4Y7Svju@cluster0.t8yorqh.mongodb.net/pedroBasic',  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);

		console.log("Connected to database successfully");
	}

    catch (error) {
		console.log(error);
		console.log("Could not connect Database !");
	}
};

export default connection;