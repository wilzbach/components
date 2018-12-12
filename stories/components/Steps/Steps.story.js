import {
  storiesOf
} from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Steps',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Steps</h3>
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-6 col-sm-12 mt-5 mt-lg-0">
            <a-steps>
                <a-card shadow slot-scope="stepsProps">
                    <a-step>
                        <span slot="header">
                            1. <span><font-awesome-icon :icon="['fab', 'github']" /> Connect to Github</span>
                        </span>
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        <a-button @click="stepsProps.prev()" v-if="stepsProps.isPrevStep">Prev</a-button>
                        <a-button @click="stepsProps.next()" v-if="stepsProps.isNextStep">Next</a-button>
                    </a-step>

                    <a-step title="Choose a repository">
                        <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                            american apparel, butcher voluptate nisi qui.</p>
                        <a-button @click="stepsProps.prev()" v-if="stepsProps.isPrevStep">Prev</a-button>
                        <a-button @click="stepsProps.next()" v-if="stepsProps.isNextStep">Next</a-button>
                    </a-step>

                    <a-step title="Additional informations">
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                        <a-button @click="stepsProps.prev()" v-if="stepsProps.isPrevStep">Prev</a-button>
                        <a-button @click="stepsProps.next()" v-if="stepsProps.isNextStep">Next</a-button>
                    </a-step>
                </a-card>
            </a-steps>
            <h3>Locked Headers</h3>
            <a-steps lock-headers>
                <a-card shadow slot-scope="stepsProps">
                    <a-step>
                        <span slot="header">
                            1. <span><font-awesome-icon :icon="['fab', 'github']" /> Connect to Github</span>
                        </span>
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        <a-button @click="stepsProps.prev()" v-if="stepsProps.isPrevStep">Prev</a-button>
                        <a-button @click="stepsProps.next()" v-if="stepsProps.isNextStep">Next</a-button>
                    </a-step>

                    <a-step title="Choose a repository">
                        <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                            american apparel, butcher voluptate nisi qui.</p>
                        <a-button @click="stepsProps.prev()" v-if="stepsProps.isPrevStep">Prev</a-button>
                        <a-button @click="stepsProps.next()" v-if="stepsProps.isNextStep">Next</a-button>
                    </a-step>

                    <a-step title="Additional informations">
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                        <a-button @click="stepsProps.prev()" v-if="stepsProps.isPrevStep">Prev</a-button>
                        <a-button @click="stepsProps.next()" v-if="stepsProps.isNextStep">Next</a-button>
                    </a-step>
                </a-card>
            </a-steps>
        </div>
      </div>
    </div>
    `
  })
)
