import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function LanguageDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">English</Dropdown.Item>
        <Dropdown.Item href="#">Hindi</Dropdown.Item>
        <Dropdown.Item href="#">Bengali</Dropdown.Item>
        <Dropdown.Item href="#">Gujarati</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
