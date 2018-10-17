import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Grid', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Grid system</h3>

      <div class="columns">
        <div class="column one-half bg--cyan"> 1/2 </div>
        <div class="column one-half bg--cyan"> 1/2 </div>
        <div class="column one-third bg--cyan"> 1/3 </div>
        <div class="column two-thirds bg--cyan"> 2/3 </div>
        <div class="column one-quarter bg--cyan"> 1/4 </div>
        <div class="column three-quarters bg--cyan"> 3/4 </div>
        <div class="column one-fifth bg--cyan"> 1/5 </div>
        <div class="column two-fifths bg--cyan"> 2/5 </div>
        <div class="column three-fifths bg--cyan"> 3/5 </div>
        <div class="column four-fifths bg--cyan"> 4/5 </div>
        <div class="column one-sixth bg--cyan"> 1/6 </div>
        <div class="column five-sixths bg--cyan"> 5/6 </div>
      </div>

    </div>
    `
}))
