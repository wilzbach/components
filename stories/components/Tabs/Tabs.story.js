import {
  storiesOf
} from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Tabs',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Tabs</h3>
      <div class="row justify-content-center">
          <div class="col-lg-6 col-md-6 col-sm-12 mt-5 mt-lg-0">
              <!-- Tabs with icons -->
              <div class="mb-3">
                  <small class="text-uppercase font-weight-bold">With icons</small>
              </div>
              <a-tabs active="Messages">
                  <a-card shadow>
                      <a-tab-pane title="Home" icon="ni ni-cloud-upload-96">
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                              cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                              keffiyeh dreamcatcher synth.</p>
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                      </a-tab-pane>

                      <a-tab-pane title="Profile" icon="ni ni-bell-55">
                          <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                              squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                              american apparel, butcher voluptate nisi qui.</p>
                      </a-tab-pane>

                      <a-tab-pane title="Messages" icon="ni ni-calendar-grid-58">
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                              cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                              keffiyeh dreamcatcher synth.</p>
                      </a-tab-pane>
                  </a-card>
              </a-tabs>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 mt-5 mt-lg-0">
              <!-- Menu -->
              <div class="mb-3">
                  <small class="text-uppercase font-weight-bold">With no shadow</small>
              </div>
              <a-tabs>
                  <a-card>
                      <a-tab-pane title="Home">
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                              cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                              keffiyeh dreamcatcher synth.</p>
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                      </a-tab-pane>

                      <a-tab-pane title="Profile">
                          <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                              squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                              american apparel, butcher voluptate nisi qui.</p>
                      </a-tab-pane>

                      <a-tab-pane title="Messages">
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                              cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                              keffiyeh dreamcatcher synth.</p>
                      </a-tab-pane>
                  </a-card>
              </a-tabs>
          </div>
          <div class="col-lg-10 col-md-6 col-sm-12 mt-5 mt-lg-5">
            <div class="mb-3">
                <small class="text-uppercase font-weight-bold">With underlined text</small>
            </div>
            <a-tabs shape="link">
                <a-card shadow>
                    <a-tab-pane title="Serverless HTTP">
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                    </a-tab-pane>

                    <a-tab-pane title="Slack Bot">
                        <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                            american apparel, butcher voluptate nisi qui.</p>
                    </a-tab-pane>

                    <a-tab-pane title="Machine Learning">
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                    </a-tab-pane>
                </a-card>
            </a-tabs>
          </div>
          <div class="col-lg-10 col-md-6 col-sm-12 mt-5 mt-lg-5">
            <div class="mb-3">
              <small class="text-uppercase font-weight-bold">With Icon only</small>
            </div>
            <a-tabs icon-only hide-decoration>
              <a-card shadow>
                <a-tab-pane title="Serverless HTTP" icon="fa fa-windows">
                  <p class="description">Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                      cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                      keffiyeh dreamcatcher synth.</p>
                  <p class="description">Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                </a-tab-pane>

                <a-tab-pane title="Slack Bot" icon="fa fa-apple" icon-only>
                    <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                        squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                        american apparel, butcher voluptate nisi qui.</p>
                </a-tab-pane>

                <a-tab-pane title="Machine Learning" icon="fa fa-linux">
                    <p class="description">Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                        cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                        keffiyeh dreamcatcher synth.</p>
                </a-tab-pane>
              </a-card>
            </a-tabs>
          </div>
      </div>
    </div>
    `
  })
)
