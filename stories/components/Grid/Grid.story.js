import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Grid', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Grid system</h3>

      <div class="columns is-multiline is-mobile">
        <div class="column is-half"><p class="bg--cyan">1/2</p></div>
        <div class="column is-half"><p class="bg--cyan"> 1/2 </p></div>
        <div class="column"><p class="bg--cyan"> 1/3 </p></div>
        <div class="column is-two-thirds"><p class="bg--cyan"> 2/3 </p></div>
        <div class="column is-one-quarter"><p class="bg--cyan"> 1/4 </p></div>
        <div class="column is-one-quarter-tablet is-three-quarters-desktop is-three-quarters-widescreen is-three-quarters-fullhd"><p class="bg--cyan"> 3/4 </p></div>
        <div class="column is-one-fifth"><p class="bg--cyan"> 1/5 </p></div>
        <div class="column is-two-fifths"><p class="bg--cyan"> 2/5 </p></div>
        <div class="column is-three-fifths"><p class="bg--cyan"> 3/5 </p></div>
        <div class="column is-four-fifths"><p class="bg--cyan"> 4/5 </p></div>
        <div class="column"><p class="bg--cyan"> 1/6 </p></div>
        <div class="column"><p class="bg--cyan"> 5/6 </p></div>
      </div>

    </div>
    `
}))
