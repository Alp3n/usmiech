import MyComponent from '../../../../slices/FullBleed';

export default {
  title: 'slices/FullBleed'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"full_bleed","items":[],"primary":{"title":[{"type":"heading1","text":"Deliver scalable web services","spans":[]}],"description":[{"type":"paragraph","text":"Magna aliquip occaecat veniam. Sit deserunt nisi sint ad est. Duis duis laboris consectetur enim eiusmod enim anim proident dolore sit voluptate fugiat.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop","mobile":{"dimensions":{"width":400,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=400&h=600&fit=crop"}},"buttonLabel":"implement front-end users","buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"},"inside":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _NoCta = () => <MyComponent slice={{"variation":"noCta","name":"noCta","slice_type":"full_bleed","items":[],"primary":{"title":[{"type":"heading1","text":"Scale sticky eyeballs","spans":[]}],"description":[{"type":"paragraph","text":"Ea amet aute laborum ad amet et ad cillum. Non nisi dolore consectetur exercitation exercitation Lorem sit aliqua Lorem irure adipisicing dolore tempor quis exercitation.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop","mobile":{"dimensions":{"width":400,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=400&h=600&fit=crop"}},"inside":false},"id":"_NoCta"}} />
_NoCta.storyName = 'noCta'
