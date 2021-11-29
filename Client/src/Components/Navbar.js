import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">LMS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Button className="nav-link active" text="Home" href="/" />
              </li>
              <li class="nav-item">
                <Button className="nav-link active" text="About" href="#" />
              </li>
              <li className="nav-item">
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <Button className="btn btn-outline-primary" text="Search" href="#" />
                </form></li>
            </ul>
            <ul class="nav justify-content-end">
              <Button className="btn btn-outline-primary me-2" text="Register" href="/register" />
              <Button className="btn btn-outline-primary" text="Login" href="login" />
            </ul>
          </div>
        </div>
    </nav>
  </div>
  )
}
