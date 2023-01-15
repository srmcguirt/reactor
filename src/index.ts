// @index(['./*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './add'
export * from './calculate'
export * from './compute'
export * from './convert'
export * from './count'
export * from './filter'
export * from './find'
export * from './get'
export * from './join'
export * from './multiply'
export * from './remove'
export * from './repeat'
export * from './sum'
// @endindex

// @index('./*.js', f => `export * from '${f.path}'`)
export * from './bitwise'
export * from './extend'
export * from './keep'
export * from './modulo'
export * from './select'
export * from './square-elements'
export * from './toggle-case'
// @endindex
