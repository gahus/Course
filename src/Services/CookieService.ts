

export async function getCookie() {
/* Récupère tous les cookies du domaine courant*/
const value = `; ${document.cookie}`;
const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};

export const getAllCookies = (): Record<string, string> => {
  return document.cookie
    .split(';')
    .reduce((acc: Record<string, string>, cookie) => {
      const [name, value] = cookie.trim().split('=');
      acc[name] = decodeURIComponent(value);
      return acc;
    }, {});
};
