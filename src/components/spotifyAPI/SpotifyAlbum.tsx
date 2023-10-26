import { Image } from "primereact/image";
import { SpotifyAlbumType } from "../../types/spotifyTypes";

interface SpotifyAlbumPropType {
  propsAlbum: SpotifyAlbumType;
}

function SpotifyAlbum({ propsAlbum }: SpotifyAlbumPropType) {
  const getImage = (album: SpotifyAlbumType) => {
    const image = album.images.find((img) => img.height === 64);
    return image ? image.url : "";
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "8px",
  };

  const textStyle = {
    margin: "10px 0",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "10px 15px",
    backgroundColor: "#1DB954",
    color: "white",
    textDecoration: "none",
    borderRadius: "20px",
    transition: "background-color 0.3s ease",
  };

  const onButtonHover = () => {
    buttonStyle.backgroundColor = "#1ED760";
  };

  return (
    <div style={containerStyle}>
      <h2>{propsAlbum.name}</h2>
      <h3>{propsAlbum.release_date}</h3>
      <Image src={getImage(propsAlbum)} alt={propsAlbum.name} />
      <p style={textStyle}>Album Type: {propsAlbum.album_type}</p>
      <p style={textStyle}>
        Artists: {propsAlbum.artists.map((artist) => artist.name).join(", ")}
      </p>
      <p style={textStyle}>Total Tracks : {propsAlbum.total_tracks}</p>
      <a
        href={propsAlbum.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        onMouseEnter={onButtonHover}
        onMouseLeave={onButtonHover}
      >
        Listen on Spotify
      </a>
    </div>
  );
}

export default SpotifyAlbum;
