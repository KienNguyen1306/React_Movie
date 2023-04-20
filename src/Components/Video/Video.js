/* eslint-disable jsx-a11y/iframe-has-title */
// ====================== react -player ===============
// import ReactPlayer from "react-player";

// function Video({ url }) {
//   return (
//     <ReactPlayer
//       className="video"
//       pip={true}
//       controls={true}
//       url={url}
//       width="100%"
//       height="80vh"
//     />
//   );
// }

function Video({ url }) {
  return (
    <>
      <iframe className="video" src={url} />
    </>
  );
}

export default Video;
