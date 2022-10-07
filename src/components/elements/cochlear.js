import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Cochlear = () => {
  return (
    <>

      <NavDropdown
          id="nav-dropdown-example"
          title={
            <span className="text-muted fs-6 my-auto " > COCHLEAR IMPLANT</span>
        }
          menuVariant="dark"
        >
         <NavDropdown.Item href="#action/3.2">Cochlear Implant Surgery</NavDropdown.Item>
               <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1">Cochlear Implant Mapping</NavDropdown.Item>
               <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Hybrid Cochlear Implants</NavDropdown.Item>
               <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Post Cochlear Implant <br/> Habilitation</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Pre - Cochlear Implant <br/>Evaluation</NavDropdown.Item>
        </NavDropdown> 
    </>
  )
}

export default Cochlear
