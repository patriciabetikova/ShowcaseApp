import { HomePage } from "pages/HomePage"
import { LoginPage } from "pages/LoginPage"
import { EventCreatePage } from "pages/EventCreatePage"
import { RegisterPage } from "pages/RegisterPage"
import { ProfilePage } from "pages/ProfilePage"
import { EventDetailPage } from "pages/EventDetailPage"
import { NotFoundPage } from "pages/NotFoundPage"

export const types = {
  loggedOut: "loggedOut",
  loggedIn: "loggedIn",
  default: "default",
}

export const urls = {
  home: { component: HomePage, path: "/", url: "/", type: types.loggedIn },
  login: {
    component: LoginPage,
    path: "/login",
    url: "/login",
    type: types.loggedOut,
  },
  profile: {
    component: ProfilePage,
    path: "/profile",
    url: "/profile",
    type: types.loggedIn,
  },
  eventCreate: {
    component: EventCreatePage,
    path: "/event/new",
    url: `/event/new`,
    type: types.loggedIn,
  },
  eventDetail: {
    component: EventDetailPage,
    path: "/event/:id",
    url: id => `/event/${id}`,
    type: types.loggedIn,
  },
  register: {
    component: RegisterPage,
    path: "/register",
    url: "/register",
    type: types.loggedOut,
  },
  notFound: {
    component: NotFoundPage,
    path: "*",
    url: "*",
    type: types.default,
  },
}
