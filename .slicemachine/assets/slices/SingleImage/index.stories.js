import MyComponent from '../../../../slices/SingleImage';

export default {
  title: 'slices/SingleImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"single_image","items":[],"primary":{"title":[{"type":"heading2","text":"Deploy B2C e-tailers","spans":[]}],"description":[{"type":"paragraph","text":"Ad velit qui duis nulla incididunt minim voluptate duis ea ipsum ad. Velit veniam esse velit ex dolor magna laboris eu qui excepteur ut non pariatur pariatur aliqua. Eu non ipsum exercitation nostrud ad consectetur elit pariatur.","spans":[]}],"buttonLabel":"scale intuitive e-commerce","buttonLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":780},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499651681375-8afc5a4db253?w=900&h=780&fit=crop","mobile":{"dimensions":{"width":640,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499651681375-8afc5a4db253?w=640&h=600&fit=crop"}},"imageSide":"engineer cross-platform content"},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _NoCta = () => <MyComponent slice={{"variation":"noCta","name":"NoCta","slice_type":"single_image","items":[],"primary":{"title":[{"type":"heading2","text":"Generate one-to-one solutions","spans":[]}],"description":[{"type":"paragraph","text":"Sint velit est ullamco consectetur aliqua cillum nisi mollit in ipsum nisi nulla. Ex veniam incididunt ut aliquip.","spans":[]}],"image":{"dimensions":{"width":900,"height":780},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=780&fit=crop","mobile":{"dimensions":{"width":640,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=640&h=600&fit=crop"}},"imageSide":"repurpose bricks-and-clicks mindshare"},"id":"_NoCta"}} />
_NoCta.storyName = 'NoCta'
