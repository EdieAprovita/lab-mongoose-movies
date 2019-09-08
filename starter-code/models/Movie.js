const { Schema, model } = require("mongoose")
const movieSchema = new Schema ({

  title: String,
  genre: String,
  plot: String
}, 

{
  timestamps:
  {
    createdAt: "createdAt",
    updatedAt: "updateAt"
  }

})

module.exports = model("Movie", movieSchema)