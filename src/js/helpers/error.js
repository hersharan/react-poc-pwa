import React from 'react';

export function Error(status) {
  switch(status) {
    case 401:
      return Unauthorize();

    case 403:
      return Forbidden();

    case 400:
      return Forbidden();

    case 500:
      return ServiceFailure();

    case 'iframe':
      return iFrameError();

    default:
     return <h1>Encounter Error</h1>
  }
}

function Unauthorize() {
  if (window.location.pathname === "/" || window.location.pathname === '/home') {
    window.location.href = '/logout';
  }
  return(
    <div className="error">
      <div className="unauthorize">
        <div className="my-5 col-12">Sorry, You are unauthorize to view this page. Please login</div>
        <a href="/logout" className="bb-btn-black col-5 m-auto">Login</a>
      </div>
    </div>
  )
}

function Forbidden() {
  return(
    <div className="error">
      <div className="unauthorize">
        <div className="my-5 col-12">Sorry, You don't have permissions to view this page.</div>
        <a href="/home" className="bb-btn-black col-5 m-auto">Home</a>
      </div>
    </div>
  )
}

function ServiceFailure() {
  return (
    <div className="error service-failure flex-column">
      <div className="service-failure-content col-12">
        <figure className="text-center">
          <img src="/themes/custom/elx_frontend/images/defaults/serviceFailure.svg" alt="service-failure" />
          <figcaption>Unfortunately the service failed.</figcaption>
        </figure>
        <button onClick={refresh} className="bb-btn-black col-5 m-auto">Try Again</button>
      </div>
    </div>
  )
}

function iFrameError() {
  return (
    <div className="error">
      <div className="unauthorize">
        <div className="my-5 col-12">File does not exist</div>
        <button onClick={refresh} className="bb-btn-black col-5 m-auto">Refresh</button>
      </div>
    </div>
  )
}

export function NoContentFound(translated) {
  return (
    <h1 className="no-data text-center">{translated ? translated : 'No Content Found'}</h1>
  )
}

export function ProductCardsError(category) {
  return (
    <div className="error">
      <figure className="text-center">
        <img src="/themes/custom/elx_frontend/images/defaults/productcards.svg" alt="products-cards error" className="my-4" />
        <figcaption className="my-4">{`Products under the section ${category} will appear here.`}</figcaption>
      </figure>
    </div>
  )
}

function refresh() {
  window.location.reload(true)
}
