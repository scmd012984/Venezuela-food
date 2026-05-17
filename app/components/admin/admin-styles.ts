/** Clases del panel admin (paleta crema · chocolate · dorado en admin.css). */

export const adminPanelClass = "admin-panel";

export function adminNavLinkClass(isActive: boolean) {
  return isActive ? "admin-nav-link admin-nav-link--active" : "admin-nav-link";
}

export function adminNavIconClass(isActive: boolean) {
  return isActive ? "admin-nav-icon admin-nav-icon--active" : "admin-nav-icon";
}

export function adminFooterLinkClass(isActive: boolean) {
  return isActive ? "admin-footer-link admin-footer-link--active" : "admin-footer-link";
}
