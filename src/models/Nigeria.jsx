import mongoose, { Schema, model, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const KadunaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    fscience: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Birnin Gwari",
        "Chikun",
        "Giwa",
        "Kajuru",
        "Igabi",
        "Ikara",
        "Jaba",
        "Jema'a",
        "Kachia",
        "Kaduna North",
        "Kaduna South",
        "Kagarko",
        "Kaura",
        "Kauru",
        "Kudan",
        "Lere",
        "Makarfi",
        "Sabon-gari",
        "Sanga",
        "Soba",
        "Zangon-Kataf",
        "Zaria",
      ],
    },
    department: {
      type: String,
      required: true,
      enum: [
        "Biochemistry",
        "Biological Science",
        "Chemistry",
        "Computer Science",
        "Geography",
        "Geology",
        "Industrial Chemistry",
        "Mathematical Science",
        "Microbiology",
        "Physics",
        "Statistics",
      ],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
    
    
  },
  { timestamps: true }
);

export const KadunaTable =
  models.KadunaTable || model("KadunaTable", KadunaSchema);
