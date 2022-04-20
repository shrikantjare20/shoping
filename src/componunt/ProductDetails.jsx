import React from "react";

function ProductDetails(props) {
  let cardData = props.cardData;

  if (cardData == null) {
    return <div />;
  }
  return (
    <div>
      {/* <div className="card">
                <h4 className="card-header">
                    Title: {cardData.title}
                </h4>
                <div className="card-body">
                    <h5 className="card-title">Price: Rs.{cardData.price} /-</h5>
                    <p className="card-text"><b>Discription:</b>{cardData.description}</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div> */}
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                    Save changes
                </button>
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                >
                    Close
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}
export default ProductDetails;
