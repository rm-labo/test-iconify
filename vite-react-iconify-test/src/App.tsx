// import { useState } from 'react'
import { Icon } from '@iconify/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArchive, faBook, faCoffee, faDrum, faEnvelope, faFire, faGift, faHistory, faInfo, faKey } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App" style={{ fontSize: '2rem' }}>
      <h1>iconify test React(Vite)</h1>
      <div>
        <Icon icon="ep:circle-close" />
        <Icon icon="ep:aim" />
        <Icon icon="ep:alarm-clock" />
        <Icon icon="ep:apple" />
        <Icon icon="ep:arrow-down" />
        <Icon icon="ep:avatar" />
        <Icon icon="ep:baseball" />
        <Icon icon="ep:bicycle" />
        <Icon icon="ep:box" />
        <Icon icon="ep:chat-dot-square" />
      </div>
      <div>
        <Icon icon="fa6-solid:pager" />
        <Icon icon="fa6-solid:paint-roller" />
        <Icon icon="fa6-solid:paintbrush" />
        <Icon icon="fa6-solid:palette" />
        <Icon icon="fa6-solid:paperclip" />
        <Icon icon="fa6-solid:pen-fancy" />
        <Icon icon="fa6-solid:people-arrows-left-right" />
        <Icon icon="fa6-solid:person-booth" />
        <Icon icon="fa6-solid:person-skating" />
        <Icon icon="fa6-solid:object-ungroup" />
      </div>      
    </div>
  )
}

export default App
