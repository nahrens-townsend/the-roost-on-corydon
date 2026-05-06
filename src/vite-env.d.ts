/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// CSS Modules (*.module.scss / *.module.css) → typed class-name map
declare module '*.module.scss' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.module.css' {
  const styles: Record<string, string>
  export default styles
}

// Global stylesheets → side-effect import only, no exported value
declare module '*.scss' {}
declare module '*.css' {}
