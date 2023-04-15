import { WolfGallery } from './Gallery';

const App = () => (
  <div className="App">
    <WolfGallery
      photos={[
        { id: 1, src: '../public/photos/1.jpg', preview: '../public/photos/preview/1.jpg', description: 'Photo 1' },
        { id: 2, src: '../public/photos/2.jpg', preview: '../public/photos/preview/2.jpg', description: 'Photo 2' },
        { id: 3, src: '../public/photos/3.jpg', preview: '../public/photos/preview/3.jpg', description: 'Photo 3' },
        { id: 4, src: '../public/photos/4.jpg', preview: '../public/photos/preview/4.jpg', description: 'Photo 4' },
        { id: 5, src: '../public/photos/5.jpg', preview: '../public/photos/preview/5.jpg', description: 'Photo 5' },
        { id: 6, src: '../public/photos/6.jpg', preview: '../public/photos/preview/6.jpg', description: 'Photo 6' },
        { id: 7, src: '../public/photos/7.jpg', preview: '../public/photos/preview/7.jpg', description: 'Photo 7' },
      ]}
    />
  </div>
);

export default App;
