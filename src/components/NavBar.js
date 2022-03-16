import React from 'react'
import "../style/Nav.css"

const NavBar = () => {
  return (
    
<>

    <div className="navbar-container">
    
      <img 
        className='navBar-Logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo" />

      <img
        className='Navbar-Avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
        alt='Netflix Avatar'
      />
      <img 
       className='Navbar-Notificacion'
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAtklEQVRIie2TMQ6CQBAAd22I8QnayWP0ATxDwhMoeZqJjdZa4R9ox8IjIR5HbkEjiU5yHcws5FbkZwBS4OZOGvvewtDIRGTrTmYdMAiQALmbvOUKHIBkqnwDXAhzBtZTJh+SdyP2LwGKCHlLPiZwMgSOIY8OBBoRWUbO06jqyhogUv4Uqfa6LHswin9gpgGgtIqAKvbB0rBgr3gR7+5a778nDOzD9wHunV9RfyKwd5Ea2L09MFseFBJNpHGPOTsAAAAASUVORK5CYII=" 
       alt='Netflix Notificaiton'
       />
      <img
        className='Navbar-Search'
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRIie2TTWoCQRCFe9xGd+pJsvfnBkoOkixk4kJwdKOnMeg5YjyAnsGfCFmZLwvfQKM4VqshIHlQdM/MV/WKocq5uxRQBvrAB7BVTIEeULq2+BOw4bTWQPOa4t8qNAIqwIOiCrzp2w5ohBYve523MrhYzAoohhj0084N7FhsEmIwU1LFwNbETkMMPpWUN7AFsZtzbM7PM3fjXGQFfYOFzkdDXsrMQwwmOp8NBi86xwZ2L6CkJQKIM7i2mGXwVgNNLREaxRqQV9SBibfRnaDinklDS3RKS6DjPXcvMSkCCfCu8d3qnqS/5cA03MTQRHxgMvg3ucgkl5VoVRRFQ+fcq/fq6xZ1jwR0f2Wi/lQ/2mvMQ0czO9IAAAAASUVORK5CYII=" alt='Netflix Avatar'
      />

    </div>
    
    </>
  )
}

export default NavBar


