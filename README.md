# Node.js Express & MongoDB: CRUD Rest APIs

After finishing the steps above, we don't need to write CRUD functions, as Mongoose Model supports all of them:

 - create a new Tutorial: object.save()
 - find a Tutorial by id: findById(id)
 - retrieve all Tutorials: find()
 - update a Tutorial by id: findByIdAndUpdate(id, data)
 - remove a Tutorial: findByIdAndRemove(id)
 - remove all Tutorials: deleteMany()
 - find all Tutorials by title: find({ title: { $regex: new RegExp(title), $options: "i" } })

 All the above functions will be used in our Controller.