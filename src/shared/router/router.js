import homeVue from "./routes"
import { authRoutes } from '../../modules/auth/routes.js'

export default [
    ...homeVue,
    ...authRoutes
];
