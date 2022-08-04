import "./Announcement.css";

function Announcement() {
  return (
    <section className="navbar2-container">
      <div className="navbar2-item">
        <div className="navbar2-item-pic">
          <img src="/images/delivery.gif" width="100%" alt="delivery" />
        </div>
        <div className="navbar2-item-text">
          <div>
            <h4>Nationwide Delivery</h4>
          </div>
          <div>Speedy Delivery to any part of the Country</div>
        </div>
      </div>
      <div className="navbar2-item hide">
        <div className="navbar2-item-pic">
          <img src="/images/card.gif" width="100%" alt="card" />
        </div>
        <div className="navbar2-item-text">
          <div>
            <h4>Factory Price</h4>
          </div>
          <div>lowest Retail price in the Market.</div>
        </div>
      </div>
      <div className="navbar2-item hide">
        <div className="navbar2-item-pic">
          <img src="/images/verified.gif" width="100%" alt="verified" />
        </div>
        <div className="navbar2-item-text">
          <div>
            <h4>Privacy & Security</h4>
          </div>
          <div>Your Data is Safe and Secured with us</div>
        </div>
      </div>
    </section>
  );
}

export default Announcement;
