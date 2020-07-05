export default function makeUserRepo({ userModel }) {
    return Object.freeze({
        getByUsername,
        getByEmail,
        addNew
    })

    async function getByUsername(username) {
        return await userModel
            .findOne({ username })
            .select('+password')
    }

    async function getByEmail(email) {
        return await userModel
            .findOne({ email })
            .select('+password')
    }

    async function addNew(userData) {
        let user = await userModel.findOne({ username: userData.username })

        if (!user) {
            user = await userModel.create(userData)
        }

        return user
    }
}