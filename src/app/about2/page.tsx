import FlowingMenu from '../../components/FlowingMenu'


const demoItems = [
  { link: '#', text: 'Glimpse about me', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'What drives me?', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: "What I'm learning right now", image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: "What I'm doing when I'm not building", image: 'https://picsum.photos/600/400?random=4' }
  { link: '#', text: "Let's chat!", image: 'https://picsum.photos/600/400?random=4' }
];


<div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>