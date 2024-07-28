import CloseIcon from '@mui/icons-material/Close';
import "../styles/modal.css"; 

function Modal({movie, status, toggleModal}) {
  return (
    <div className={`movie-modal ${status ? 'active' : null}`}>
        <a href="#" className="modal-close">
            <CloseIcon fontSize="large" sx={{color: "crossColor.main"}} onClick={toggleModal}/>
        </a>
        <iframe 
            width="1280"
            height="720"
            src={movie.video}
            title={`${movie.title} | Official Trailer`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default Modal