import TokenService from "@/services/tokenService";
import api from "@/services/api";

const LOGIN_POSTFIX = "api/auth/login";
const REGISTER_POSTFIX = "api/auth/register";

class AuthService {
  login(user) {
    return api
      .post(LOGIN_POSTFIX, {
        user_name: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          TokenService.setUser({username:user.username, token:response.data.token});
        }
        return response.data;
      });
  }

  register(user) {
    return api.post(REGISTER_POSTFIX, {
      user_name: user.username,
      password: user.password,
    });
  }
}

export default new AuthService();
