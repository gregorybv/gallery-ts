import { WolfGallery } from './Gallery';
import photo1 from '../public/photos/1.jpg'
import photo2 from '../public/photos/2.jpg'
import photo3 from '../public/photos/3.jpg'
import photo4 from '../public/photos/4.jpg'
import photo5 from '../public/photos/5.jpg'
import photo6 from '../public/photos/6.jpg'
import photo7 from '../public/photos/7.jpg'

import photoMin1 from '../public/photos/preview/1.jpg'
import photoMin2 from '../public/photos/preview/2.jpg'
import photoMin3 from '../public/photos/preview/3.jpg'
import photoMin4 from '../public/photos/preview/4.jpg'
import photoMin5 from '../public/photos/preview/5.jpg'
import photoMin6 from '../public/photos/preview/6.jpg'
import photoMin7 from '../public/photos/preview/7.jpg'

const App = () => (
  <div className="App">
    <WolfGallery
      photos={[
        { id: 1, src: photo1, preview: photoMin1, description: 'Photo 1' },
        { id: 2, src: photo2, preview: photoMin2, description: 'Photo 2' },
        { id: 3, src: photo3, preview: photoMin3, description: 'Photo 3' },
        { id: 4, src: photo4, preview: photoMin4, description: 'Photo 4' },
        { id: 5, src: photo5, preview: photoMin5, description: 'Photo 5' },
        { id: 6, src: photo6, preview: photoMin6, description: 'Photo 6' },
        { id: 7, src: photo7, preview: photoMin7, description: 'Photo 7' },
      ]}
    />
  </div>
);

export default App;
