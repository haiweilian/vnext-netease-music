/* eslint-disable import/no-duplicates */

// declare interface Window {
//   // extend the window
// }

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare vue files as components
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
