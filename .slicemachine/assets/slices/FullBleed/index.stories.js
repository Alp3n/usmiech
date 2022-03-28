import MyComponent from '../../../../slices/FullBleed';

export default {
  title: 'slices/FullBleed'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"full_bleed","items":[],"primary":{"title":[{"type":"heading2","text":"Enhance synergistic vortals","spans":[]}],"description":[{"type":"paragraph","text":"Velit laborum ipsum laborum sit. Irure eu esse duis labore excepteur magna in.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"buttonLabel":"redefine synergistic networks","buttonLink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _NoCta = () => <MyComponent slice={{"variation":"noCta","name":"noCta","slice_type":"full_bleed","items":[],"primary":{"title":[{"type":"heading2","text":"Deploy web-enabled niches","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt anim adipisicing pariatur sunt cupidatat.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop","mobile":{"dimensions":{"width":400,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400&h=600&fit=crop"}}},"id":"_NoCta"}} />
_NoCta.storyName = 'noCta'
