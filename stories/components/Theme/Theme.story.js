import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Theme', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Planets</h3>

      <div class="w-50">
        <a-planet />
        <a-planet size="sm" />
        <a-planet size="lg" />
        <a-planet size="xl" />
        <a-planet variant="blue-purple" />
        <a-planet variant="green" />
        <a-planet variant="orange" />
        <a-planet variant="red-purple" />
        <a-planet variant="moon-dark" />
        <a-planet variant="earth" />
      </div>

      <h3 class="h3 font-weight-bold mb-4">Comets</h3>

      <div class="w-50">
        <a-comet />
        <a-comet variant="asteroid" />
        <a-comet variant="blue" />
      </div>
      <h3>Astronaut</h3>
      <div>
        <a-astronaut />
      </div>

      <h3>Rocket</h3>
      <div>
        <a-rocket size="lg" />
      </div>

      <h3>Stars</h3>

      <div class="bg--dark">
        <a-stars />
      </div>

      <h3>Constellations (a, b, c)</h3>
      <div class="bg--dark">
        <a-constellation size="l" />
        <a-constellation type="b" size="l" />
        <a-constellation type="c" size="l" />
      </div>

      <h3>Misc assets</h3>
      <div class="bg--dark">
        <a-asset variant="book" height="10rem" />
      </div>

      <h3>Waves directive (v-waves)</h3>

      <div class="bg--dark" style="padding: 200px 2rem 10px;">
        <div style="width: 100%; height: 100px; padding: 0.5rem; border: 2px solid #efefef" class="text--light text--center" v-waves>Div with v-waves directive</div>
      </div>


    </div>
    `
}))
