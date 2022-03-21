import Vuex from 'vuex'
import auth from "./moduels/auth"
import users from "./moduels/users";

export default new Vuex.Store({
    modules: {
        auth,
        users
    }
})
