import { DataView } from "primereact/dataview";
import { SpotifyAlbum } from "../spotifyTypes";
import Album from "./Album";
import "./AlbumList.css";

interface AlbumListPropType {
  albums: SpotifyAlbum[];
}

function AlbumList({ albums }: AlbumListPropType) {
  const itemTemplate = (album: SpotifyAlbum) => {
    return (
      <div className="p-col-12 p-md-4">
        <Album propsAlbum={album} />
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

export default AlbumList;
