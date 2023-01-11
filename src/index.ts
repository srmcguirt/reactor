// @index(['./*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './add'
export * from './compute'
export * from './convert'
export * from './count'
export * from './filter'
export * from './find'
export * from './get'
export * from './join'
export * from './remove'
// @endindex

// @index('./*.js', f => `export * from '${f.path}'`)
export * from './extend'
export * from './keep'
export * from './select'
export * from './square-elements'
export * from './toggle-case'
// @endindex
