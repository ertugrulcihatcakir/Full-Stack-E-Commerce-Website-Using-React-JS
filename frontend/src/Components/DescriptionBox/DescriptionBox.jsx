import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-nav">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam eu turpis pulvinar magna placerat laoreet. 
                Morbi interdum sapien nec venenatis maximus. 
                Mauris maximus metus in ante suscipit, eu tempus urna tempus. 
                Duis vel ligula convallis elit dictum iaculis. 
                Praesent porttitor ornare dolor, a feugiat nulla iaculis et. 
                Fusce ut erat in erat molestie vulputate. 
                Nunc efficitur justo felis, in sagittis ante tincidunt eu. 
                Nam mattis molestie tempor. Donec id odio sit amet eros rutrum vestibulum. 
                Cras ac erat nec mauris ultrices luctus vitae non odio. 
                Proin mi velit, cursus non hendrerit nec, laoreet nec purus. 
                Integer at mattis urna. Aenean eleifend a leo ut convallis. 
                Sed eu mollis felis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam eu turpis pulvinar magna placerat laoreet. 
                Morbi interdum sapien nec venenatis maximus.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox