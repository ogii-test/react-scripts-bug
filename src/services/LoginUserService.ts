import {ApplicationConstants} from "../constants/ApplicationConstants";
import {Credentials} from "../components/core/login/Credentials";

/**
 * Utility class for login operations
 */
export class LoginUserService {
  /**
   * Takes user credentials and sends Login Request to backend
   * @param credentials User credentials
   * @return {Promise<any>}
   * @constructor
   */
  static loginUser(credentials: Credentials) {
    return fetch(ApplicationConstants.BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
}
