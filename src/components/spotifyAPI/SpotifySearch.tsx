import axios, { AxiosResponse } from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POPUP_OPTIONS, POPUP_TARGET, POPUP_URL } from "../../constants";
import { selectToken, updateToken } from "../../store/store";
import {
  SpotifyAlbumType,
  SpotifyAlbumsResponseSchema,
  SpotifyAlbumsResponseType,
} from "../../types/spotifyTypes";
import SpotifyAlbumList from "./SpotifyAlbumList";

function SpotifySearch() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [albumsList, setAlbumsList] = useState<SpotifyAlbumType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loginToSpotify = () => {
    dispatch(updateToken(""));

    const popup = window.open(POPUP_URL, POPUP_TARGET, POPUP_OPTIONS);
    const callback = async (tokenFromPopup: string) => {
      if (popup) popup.close();
      dispatch(updateToken(tokenFromPopup));
    };

    // TODO type & find solution to remove window
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.spotifyCallback = callback;
  };

  const searchAlbum = async () => {
    try {
      const result: AxiosResponse<{ albums: SpotifyAlbumsResponseType }> =
        await axios({
          method: "GET",
          responseType: "json",
          params: {
            q: searchTerm,
            type: "album",
          },
          url: "https://api.spotify.com/v1/search",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

      const albumsResponse = SpotifyAlbumsResponseSchema.parse(
        result.data.albums
      );
      const albums = albumsResponse.items;
      setAlbumsList(albums);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const disconnect = () => {
    dispatch(updateToken(""));
  };

  return token === "" ? (
    <Button
      style={{ margin: "auto", width: "100%" }}
      label="Se connecter à spotify"
      onClick={loginToSpotify}
    />
  ) : (
    <div className="content">
      <Button
        label="Se déconnecter"
        className="p-button-danger"
        onClick={disconnect}
      />
      <div className="recherche">
        <h2 style={{ textAlign: "center" }}>Chercher un album</h2>
        <span className="p-input-icon-left">
          <InputText
            placeholder="Rechercher"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </span>
        <Button
          style={{ margin: "5px" }}
          label="Go !"
          className="p-button-success"
          aria-label="Search"
          onClick={searchAlbum}
        />
      </div>
      <SpotifyAlbumList albums={albumsList} />
    </div>
  );
}

export default SpotifySearch;
