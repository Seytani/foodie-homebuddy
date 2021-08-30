export function getCookie(cookieName: string) : string {
  return document.cookie.split('; ')
    .find(row => row.startsWith(cookieName))
    ?.split("=")[1] || '';
}