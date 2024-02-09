import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("NO URI PROVIDED IN CONNECTION STRING");
    }
    await mongoose.connect(mongoURI);
    console.log("db connected");
  } catch (error) {
    throw new Error("db connection failed: " + error);
  }
};

interface IUser {
  username: string;
  email: string;
  password: string;
}

interface IAdmin {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AdminSchema: mongoose.Schema<IAdmin> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      unique: false,
    },
    lastName: {
      type: String,
      required: false,
      unique: false,
    },
  },
  { timestamps: true }
);

export const Admin: mongoose.Model<IAdmin> = mongoose.model<IAdmin>(
  "admin",
  AdminSchema
);

export const User: mongoose.Model<IUser> = mongoose.model<IUser>(
  "user",
  UserSchema
);
