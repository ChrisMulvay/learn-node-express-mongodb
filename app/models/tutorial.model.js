const { Timestamp } = require("bson")

module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Tutorial;
};

/**
 * This Model represents a tutorials collection in a MongoDB database.
 * These fields will be generated automatically for each Tutorial document:
 *  - id
 *  - title
 *  - description
 *  - published
 *  - createdAt
 *  - updatedAt
 *  - __v
 * 
 *  NOTE:  If the frontend for this app needs an 'id' field instead of '_id',
 *  you will need to override 'toJSON' method that map default object to a
 *  custom object.  So, the Mongoose model could be modified as follows:
 * 
 *  module.exports = mongoose => {
 *    var schema = mongoose.Schema(
 *      {
 *        title: String,
 *        description: String,
 *        published: Boolean
 *      },
 *      { timestamps: true }
 *   );
 * 
 *   schema.method("toJSON", function() {
 *     const { __v, _id, ...object } = this.toObject();
 *     object.id = _id;
 *     return object;
 *   });
 * 
 *   const Tutorial - mongoose.model("tutorial", schema);
 *  };
 * 
 *  And the result will look like this-
 *   {
 *      "title": "Js Tut#",
 *      "description": "Description for Tut#",
 *      "published": true,
 *      "createdAt": "2020-02-02T02:59:31.198Z",
 *      "updatedAt": "2020-02-02T02:59:31.198Z",
 *      "id": "5e363b135036a835ac1a7da8"
 *    }
 */