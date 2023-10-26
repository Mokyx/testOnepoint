import { DataView } from "primereact/dataview";
import { SpotifyAlbumType } from "../../types/spotifyTypes";
import SpotifyAlbum from "./SpotifyAlbum";
import "./SpotifyAlbumList.css";

interface Spotify {
  albums: SpotifyAlbumType[];
}

function SpotifyAlbumList({ albums }: Spotify) {
  const itemTemplate = (album: SpotifyAlbumType) => {
    return (
      <div className="p-col-12 p-md-4">
        <SpotifyAlbum propsAlbum={album} />
      </div>
    );
  };

  return (
    <div className="album-list">
      <DataView
        value={albums}
        itemTemplate={itemTemplate}
        paginator
        rows={12}
        layout="grid"
      />
    </div>
  );
}

export default SpotifyAlbumList;
