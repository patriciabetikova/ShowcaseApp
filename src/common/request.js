import axios from "axios"
import { config } from "config"
import * as R from "ramda"
import { getTokens, setAccessToken } from "data/auth/storage"
import { logout } from "data/auth/rx"

const request = method => (url, data) =>
  new Promise((resolve, reject) => {
    const tokens = getTokens()
    return axios({
      method,
      url: config.apiRoot + url,
      data,
      headers: {
        "Content-Type": "application/json",
        ...(tokens ? { Authorization: `Bearer ${tokens.accessToken}` } : {}),
      },
    })
      .then(x => {
        resolve(x.data)
      })
      .catch(error => {
        if (R.path(["response", "data", "message"], error) === "jwt expired") {
          return axios({
            method: "post",
            url: config.apiRoot + "auth/refresh",
            data: { refreshToken: tokens.refreshToken },
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(response => {
              setAccessToken(response.data)
              return axios({
                method,
                url: config.apiRoot + url,
                data,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${response.data}`,
                },
              })
                .then(x => resolve(x.data))
                .catch(x => reject(x))
            })
            .catch(err => {
              logout()
              resolve()
            })
        }
        return reject(error)
      })
  })

export const get = request("get")

export const post = request("post")

export const del = request("delete")

export const put = request("put")
