import mongoose from "mongoose";

export default class ConnectionDB {
  static async connect() {
    await mongoose.connect(process.env.DB_CONN_STRING as string, {
      maxPoolSize: 10,
      directConnection: true,
      authSource: "admin",
      authMechanism: "DEFAULT",
      auth: {
        username: process.env.MONGO_INITDB_ROOT_USERNAME,
        password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      },
    });
  }
}
