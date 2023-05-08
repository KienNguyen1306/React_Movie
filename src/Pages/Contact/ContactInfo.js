

function Contactinfo(props) {
  let { icon, title, des } = props;
  return (
    <div className="contact-info">
      <div className="contact-info-left">
        <div className="icon-contact-main">{icon}</div>
      </div>
      <div className="contact-info-right">
        <h3>{title}</h3>
        <p className="line-camp-2">{des}</p>
      </div>
    </div>
  );
}

export default Contactinfo;
