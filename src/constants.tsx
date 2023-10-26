const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const POPUP_URL = `https://accounts.spotify.com/fr/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/callback&scope=user-read-private user-read-email&show_dialog=true`;
export const POPUP_TARGET = "Login with Spotify";
export const POPUP_OPTIONS = `width=800,height=600`;
