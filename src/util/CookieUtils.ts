/**
 * Contains utility methods for Cookies and related operations
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
import {StringUtils} from './StringUtils';

export class CookieUtils {
  /**
   * Returns `true` if the token is present in Browser cookies otherwise returns false
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  static isTokenPresent(cookies: { [x: string]: any; token?: any; } | undefined): boolean {
    return (
        cookies !== undefined && !StringUtils.isUndefinedOrNullOrEmpty(cookies?.token)
    );
  }
}
