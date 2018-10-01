<template>
  <div class="container">
    <h3 class="h4 font-weight-bold mb-5">Colors</h3>
    <a-card class="mb-3">
      <p class="p-1 text--primary">.text--primary</p>
      <p class="p-1 text--secondary">.text--secondary</p>
      <p class="p-1 text--success">.text--success</p>
      <p class="p-1 text--danger">.text--danger</p>
      <p class="p-1 text--warning">.text--warning</p>
      <p class="p-1 text--info">.text--info</p>
      <p class="p-1 text--light bg--dark">.text--light</p>
      <p class="p-1 text--dark">.text--dark (base)</p>
    </a-card>
    <p>Contextual text classes also work well on anchors with the provided hover and focus states.
      <strong>
        Note that the .text-white and .text-muted class has no link styling.
      </strong>
    </p>
    <a-card>
      <p><a href="#" class="text--primary">Primary link</a></p>
      <p><a href="#" class="text--secondary">Secondary link</a></p>
      <p><a href="#" class="text--success">Success link</a></p>
      <p><a href="#" class="text--danger">Danger link</a></p>
      <p><a href="#" class="text--warning">Warning link</a></p>
      <p><a href="#" class="text--info">Info link</a></p>
      <p><a href="#" class="text--dark">Dark link</a></p>
      <p><a href="#" class="text--light">Light link</a></p>
    </a-card>
    <h3 class="h4 font-weight-bold mb-5">Background color</h3>
    <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities do not set color, so in some cases you’ll want to use .text-* utilities.
    </p>
    <a-card>
      <div class="p-3 mb-2 bg--primary text--light">.bg--primary .text--light</div>
      <div class="p-3 mb-2 bg--secondary text--light">.bg--secondary .text--light</div>
      <div class="p-3 mb-2 bg--success text--dark">.bg--success .text--dark</div>
      <div class="p-3 mb-2 bg--danger text--light">.bg--danger .text--light</div>
      <div class="p-3 mb-2 bg--warning text--light">.bg--warning .text--light</div>
      <div class="p-3 mb-2 bg--info text--dark">.bg--info .text--dark</div>
      <div class="p-3 mb-2 bg--light text--dark">.bg--light .text--dark</div>
      <div class="p-3 mb-2 bg--dark text--light">.bg--dark .text--light</div>
    </a-card>
    <h3 class="h4 font-weight-bold mb-5">Background gradient</h3>
    <a-card>
      <div class="p-3 mb-2 bg-gradient--primary text--light">.bg-gradient--primary .text--light</div>
      <div class="p-3 mb-2 bg-gradient--secondary text--light">.bg-gradient--secondary .text--light</div>
      <div class="p-3 mb-2 bg-gradient--success text--dark">.bg-gradient--success .text--dark</div>
      <div class="p-3 mb-2 bg-gradient--danger text--light">.bg-gradient--danger .text--light</div>
      <div class="p-3 mb-2 bg-gradient--warning text--light">.bg-gradient--warning .text--light</div>
      <div class="p-3 mb-2 bg-gradient--info text--dark">.bg-gradient--info .text--dark</div>
      <div class="p-3 mb-2 bg-gradient--light text--dark">.bg-gradient--light .text--dark</div>
      <div class="p-3 mb-2 bg-gradient--dark text--light">.bg-gradient--dark .text--light</div>
    </a-card>
  </div>
  </div>
</template>
