import { jwtDecode, JwtPayload } from "jwt-decode";

class AuthService {
  getProfile() {
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return null;
    // TODO: return the decoded token
  }

  loggedIn() {
    const token = this.getToken();
    return token;
    // TODO: return a value that indicates if the user is logged in
  }

  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  }

  getToken(): string {
    const loggedUser = localStorage.getItem("id_token") || "";
    return loggedUser;
    // TODO: return the token
  }

  login(idToken: string) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
