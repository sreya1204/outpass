import mongoose from "mongoose";

const tutorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    status: {
        type: Boolean,
    },
    departmentName: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
)

const Tutor = mongoose.model("HOD",tutorSchema);
export default Tutor
