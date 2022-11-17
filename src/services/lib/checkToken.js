import logout from "./logout";

export default function checkToken(res, message) {
    if(res.response.status === 401) logout()

    message(res.response.data.msg)
}