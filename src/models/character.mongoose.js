import { Schema, model } from "mongoose";

const collection = 'characters'

const characterSchema = new Schema({
    id: { type: String },
    hp : {type: Number }
}, {
    versionKey: false,
    strict: "throw"
})

export const Character = model(collection, characterSchema)
