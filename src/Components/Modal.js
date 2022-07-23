import "./Modal.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCamera, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

library.add(faCamera, faPhone, faBuffer);
const Modal = forwardRef((props, ref) => {
  return (
    <div className="modal" ref={ref}>
      <div className="modal-pro">
        <FontAwesomeIcon className="fontIcon" icon={faBuffer} size="lg" />
        <h2>Professionals</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto
          commodi sapiente velit voluptates quos amet magni, a quasi ratione.
        </p>
        <a href="#read">Read More</a>
      </div>
      <div className="modal-art">
        <FontAwesomeIcon className="fontIcon" icon={faCamera} size="lg" />
        <h2>Beautiful Arts</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto
          commodi sapiente velit voluptates quos amet magni, a quasi ratione.
        </p>
        <a href="#read">Read More</a>
      </div>
      <div className="modal-call">
        <FontAwesomeIcon className="fontIcon" icon={faPhone} size="lg" />
        <h2>Call Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto
          commodi sapiente velit voluptates quos amet magni, a quasi ratione.
        </p>
        <a href="#read">Read More</a>
      </div>
    </div>
  );
});

export default Modal;
