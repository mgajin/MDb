import userModel from './user-model'
import makeUserRepo from './user-repo'

const userRepo = makeUserRepo({ userModel })

export default userRepo