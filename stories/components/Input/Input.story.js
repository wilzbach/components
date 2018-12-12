import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Inputs',
  () => ({
    data: () => ({ email: '' }),
    computed: { isEmail: function () { return this.email.trim().length === 0 ? undefined : (/^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i).test(this.email) } },
    template: `
    <div class="section pb-0 section-components">
        <div class="container mb-5">
            <!-- Inputs -->
            <h3>Inputs</h3>
            <div>
                <h5>Form controls</h5>
            </div>
            <div class="columns is-multiline">
                <div class="column">
                    <a-input v-model="email" placeholder="Regular">

                    </a-input>
                    <a-input placeholder="Search"
                                addon-left-icon="search">
                    </a-input>
                </div>
                <div class="column">
                    <a-input placeholder="Regular" disabled>
                    </a-input>
                    <a-input placeholder="Birthday"
                                addon-right-icon="fa fa-calendar">
                    </a-input>
                </div>
                <div class="column">
                    <a-input placeholder="Success" :valid="true">
                    </a-input>

                    <a-input placeholder="Email" :valid="isEmail" error="Invalid Email" v-model="email">
                    </a-input>
                </div>
            </div>
            <div>
                <h5 class="text-uppercase font-weight-bold">Sizes</h5>
            </div>
            <div class="columns">
                <div class="column is-full">
                    <a-input placeholder="Small" size="s" />
                    <a-input placeholder="Regular" />
                    <a-input placeholder="Large" size="l" />
                </div>
            </div>
            <div>
                <h5 class="text-uppercase font-weight-bold">Inline</h5>
            </div>
            <div class="columns">
                <div class="column is-full" style="flex-direction: row; display: flex; align-items: center">
                    <a-input placeholder="Regular" />
                    <a-button state="neutral" style="margin-left: .5rem">Submit</a-button>
                </div>
            </div>
        </div>
        <div class="py-5 bg-secondary">
            <div class="container">
                <!-- Inputs (alternative) -->
                <div>
                    <h5 class="text-uppercase font-weight-bold">Form controls (alternative)</h5>
                </div>
                <div class="columns">
                    <div class="column">
                        <a-input alternative
                                    placeholder="Regular">

                        </a-input>
                        <a-input alternative
                                    placeholder="Search"
                                    addon-left-icon="search">
                        </a-input>
                    </div>
                    <div class="column">
                        <a-input alternative
                                    placeholder="Regular" disabled>
                        </a-input>
                        <a-input alternative
                                    placeholder="Birthday"
                                    addon-right-icon="fa fa-calendar">
                        </a-input>
                    </div>
                    <div class="column">
                        <a-input alternative
                                    placeholder="Success" :valid="true">
                        </a-input>

                        <a-input alternative
                                    placeholder="Error" :valid="false">
                        </a-input>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
  })
)
