import User from '../models/User.js'

async function getUsers(request, response) {
  const users = await User.find()

  return response.status(200).json(users)
}

async function createUser(request, response) {
  const user = request.body

  const newUser = await User.create(user)

  return response.status(201).json(newUser)
}

async function deleteUser(request, response){
  const id = request.params.id

  await User.findByIdAndDelete({ _id: id })

  return response.status(200).json({ response: "User deleted"})
}

export { getUsers, createUser, deleteUser }
