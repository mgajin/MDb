export default function makeUserRepo({ userModel }) {
    return Object.freeze({
        getByUsername,
        getById,
        addNew,
    })

    async function getByUsername(username) {
        try {
            const user = await userModel
                .findOne({ username })
                .select('+password')

            return user
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function getById(id) {
        try {
            const user = await userModel.findById(id)

            return user
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function addNew(userData) {
        try {
            let user = await userModel.findOne({ username: userData.username })

            if (!user) {
                user = await userModel.create(userData)
            }

            return user
        } catch (err) {
            console.error(err)
            return null
        }
    }
}
