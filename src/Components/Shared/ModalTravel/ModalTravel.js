function ModalTravel({ url }) {
  return (
    <>
      <iframe
        className="ifram-travel"
        src={url && `https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default ModalTravel;
