<style>
	h1 {
    padding: 3rem;
    font-size: 3rem;
    font-weight: 600;
    margin: 0 0 0.5em 0;
    color: #ccc;
  }
  section {
    display: flex;
    flex-direction: column;
  }
  section h2 {
    padding: 2rem 3rem;
    font-size: 2rem;
  }
  .info {
    width: 100%;
  }
  .info ul {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
  }
  .info ul li {
    width: 33.333%;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    background-image: url('../checked.svg');
    background-repeat: no-repeat;
    background-size: 48px;
    background-position: top left;
  }
  .product {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2rem 3rem;
  }
  .product h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  .prices {
    display: flex;
  }
  .item {
    margin: 1rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #111;
  }
  .label {
    padding: .5rem;
  }
  .price {
    padding: .5rem 1rem;
    background: #111;
  }
  .description {
    padding: 0 1rem;
    font-size: 1.25rem;
  }
  .description p {
    padding: .25rem;
  }
  .illustration {
    margin: 3rem;
  }
  .chat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20rem;
    height: 18rem;
    background: #111;
    border-radius: .5rem;
  }
  .message {
    margin: 1rem 0;
    padding: .5rem 1rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
  }
  .badge-1, .badge-2, .emote {
    margin-right: .5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .name {
    margin-right: .5rem;
    width: 4rem;
    height: 1rem;
    background: #999;
  }
  .text {
    margin-right: .5rem;
    width: 8rem;
    height: 1rem;
    background: #999;
  }
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 18rem;
    background: #111;
    border-radius: .5rem;
  }
  .avatar img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 8px solid #999;
  }
  .painting {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 18rem;
    background: #111;
    border-radius: .5rem;
  }
  .screen {
    width: 15rem;
  }
  .roller {
    position: absolute;
    width: 10rem;
    animation: slide 500ms alternate linear infinite;
  }
  @keyframes slide {
    to { margin-top: 5rem }
  }
  @media (max-width: 992px) {
    .info ul li {
      width: 50%;
    }
    .product {
      flex-direction: column;
    }
  }
  @media (max-width: 480px) {
    .info ul li {
      width: 100%;
    }
  }
</style>

<svelte:head>
	<title>Commission - Shi</title>
</svelte:head>

<h1>
  <div>All you need to know about</div>
  <div>commissioning my services</div>
  <div>(hopefully)...</div>
</h1>

<section>
  <div class="info">
    <h2>Commission Info</h2>
    <ul>
      <li>Payments go through PayPal.</li>
      <li>The final product is 100% yours with no restrictions.</li>
      <li>Loyal customers that order several items will get a custom discount.</li>
      <li>Revisions will cost 50% off the initial price unless it was my mistake.</li>
      <li>Additional needed sizes for an item are included in the initial price.</li>
      <li>No refunds after the final product is delivered.</li>
    </ul>
  </div>
  <div class="pricing">
    <h2>Pricing</h2>
    <div class="product">
      <div class="details">
        <h3>112px art</h3>
        <div class="prices">
          <div class="item">
            <span class="label">Static</span>
            <span class="price">$10 USD</span>
          </div>
          <div class="item">
            <span class="label">Animated</span>
            <span class="price">From $15 USD</span>
          </div>
        </div>
        <div class="description">
          <p>112px art will cover all image sizes up to 112x112 pixels.</p>
          <p>This includes popular items like emotes and badges.</p>
          <p>You can also get a small image for other uses.</p>
        </div>
      </div>
      <div class="illustration">
        <div class="chat">
          <div class="message">
            <div class="name"></div>
            <div class="text"></div>
          </div>
          <div class="message">
            <div class="badge-1 pulse"><img src="./diamond.svg" alt="Badge"></div>
            <div class="name"></div>
            <div class="text"></div>
            <div class="emote"></div>
          </div>
          <div class="message">
            <div class="badge-1 pulse"><img src="./heart.svg" alt="Badge"></div>
            <div class="badge-2 pulse"><img src="./diamond.svg" alt="Badge"></div>
            <div class="name"></div>
            <div class="text"></div>
            <div class="emote"><img src="./cat.svg" alt="Emote"></div>
          </div>
          <div class="message">
            <div class="name"></div>
            <div class="text"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="details">
        <h3>512px art</h3>
        <div class="prices">
          <div class="item">
            <span class="label">Static</span>
            <span class="price">$25 USD</span>
          </div>
          <div class="item">
            <span class="label">Animated</span>
            <span class="price">From $35 USD</span>
          </div>
        </div>
        <div class="description">
          <p>512px art will cover all image sizes up to 512x512 pixels.</p>
          <p>This size is optimal for profile pictures, overlay elements and small banners (eg. Twitch panels).</p>
        </div>
      </div>
      <div class="illustration">
        <div class="avatar">
          <img src="./avatar.svg" alt="Avatar">
        </div>
      </div>
    </div>
    <div class="product">
      <div class="details">
        <h3>1920px art</h3>
        <div class="prices">
          <div class="item">
            <span class="label">Static</span>
            <span class="price">$50 USD</span>
          </div>
          <div class="item">
            <span class="label">Animated</span>
            <span class="price">From $75 USD</span>
          </div>
        </div>
        <div class="description">
          <p>1920px art will cover all image sizes up to 1920x1080 pixels.</p>
          <p>This size is optimal for overlays and large banners (eg. profile covers).</p>
        </div>
      </div>
      <div class="illustration">
        <div class="painting">
          <img class="screen" src="./screen.svg" alt="Screen">
          <img class="roller" src="./roller.svg" alt="Roller">
        </div>
      </div>
    </div>
  </div>
</section>