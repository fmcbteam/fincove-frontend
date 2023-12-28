import { Scheme, models, model } from "mongoose";

const UserScheme = new Scheme({
  email: {
    type: String,
    unique: true,
    requred: [true, "Email is required"],
    match: [/^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/, "EmailAddress Invalid"],
  },

  fullName: {
    type: String,
    requred: [true, "FullName is required"],
    minlength: [4, "Full name should be atleast 4 characters"],
    maxlength: [30, "Full name should be less than 30 characters"]
  },

  password: {
    type: String,
    requred: [true, "Password is required"],
   select: false
  },
});


const User = models.User || model("user", UserScheme)
export default User;