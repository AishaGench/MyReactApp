import React from 'react'

export default function About(fromRouteData) {
    console.log(fromRouteData)
  return (
    <div>
      <h1>About Page</h1>
      <h2>ID: {fromRouteData.match.params.id}</h2>
      <h2>Name: {fromRouteData.match.params.name}</h2>
      <h2>Age: {fromRouteData.match.params.age}</h2>
    </div>
  )
}