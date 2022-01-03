import React from 'react'

function Modals() {
    return (
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">About</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>


      <div class="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum libero iure incidunt atque commodi natus rerum similique animi sit, impedit debitis veniam officia, quibusdam corporis quidem praesentium a voluptas.
      </div>


      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    )
}

export default Modals
