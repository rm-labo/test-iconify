// import './style.css'
// import '@fortawesome/fontawesome-free'
import '@iconify/iconify'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div style="font-size: 2rem;">
    <h1>iconify test Vite</h1>
    <div>
      <span class="iconify-inline" data-icon="ep:circle-close"></span>
      <span class="iconify-inline" data-icon="ep:aim"></span>
      <span class="iconify-inline" data-icon="ep:alarm-clock"></span>
      <span class="iconify-inline" data-icon="ep:apple"></span>
      <span class="iconify-inline" data-icon="ep:arrow-down"></span>
      <span class="iconify-inline" data-icon="ep:avatar"></span>
      <span class="iconify-inline" data-icon="ep:baseball"></span>
      <span class="iconify-inline" data-icon="ep:bicycle"></span>
      <span class="iconify-inline" data-icon="ep:box"></span>
      <span class="iconify-inline" data-icon="ep:chat-dot-square"></span>
    </div>
    <div>
      <span class="iconify-inline" data-icon="fa6-solid:pager"></span>
      <span class="iconify-inline" data-icon="fa6-solid:paint-roller"></span>
      <span class="iconify-inline" data-icon="fa6-solid:paintbrush"></span>
      <span class="iconify-inline" data-icon="fa6-solid:palette"></span>
      <span class="iconify-inline" data-icon="fa6-solid:paperclip"></span>
      <span class="iconify-inline" data-icon="fa6-solid:pen-fancy"></span>
      <span class="iconify-inline" data-icon="fa6-solid:people-arrows-left-right"></span>
      <span class="iconify-inline" data-icon="fa6-solid:person-booth"></span>
      <span class="iconify-inline" data-icon="fa6-solid:person-skating"></span>
      <span class="iconify-inline" data-icon="fa6-solid:object-ungroup"></span>
    </div>
  </div>
`
