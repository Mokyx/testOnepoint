import axios from "axios";
import { DataView } from "primereact/dataview";
import { useEffect, useState } from "react";
import { OnePointAlbumType } from "../../types/onePointTypes";

function OnePointAlbums() {
  const [albums, setAlbums] = useState<OnePointAlbumType[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get<OnePointAlbumType[]>(
          "http://localhost:8080/api/albums/last-listened"
        );
        const sortedAlbums = response.data
          .sort((albumA, albumB) => albumB.listenedCount - albumA.listenedCount)
          .slice(0, 10);
        setAlbums(sortedAlbums);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  const itemTemplate = (album: OnePointAlbumType) => {
    return (
      <div className="p-col-12 p-md-4">
        <div className="product-grid-item card">
          <div className="product-grid-item-content">
            <div className="p-mb-2">
              <h2>{album.name}</h2>
              <h3>by {album.artistName}</h3>
            </div>
            <div className="p-mb-2">
              <span>Listened: {album.listenedCount} times</span>
            </div>
            <div>
              <span>
                Last listened:{" "}
                {new Date(album.lastListened).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center" }} className="card">
      <DataView
        value={albums}
        itemTemplate={itemTemplate}
        paginator
        rows={10}
      />
    </div>
  );
}

export default OnePointAlbums;
