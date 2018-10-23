import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Navs', () => ({
  template: `
    <div class="section pb-0 section-components">
      <div class="container mb-5">
        <h3 class="h3 font-weight-bold mb-4">Menu</h3>
        <div class="row">
            <div class="col-lg-6">
                <div class="mb-3">
                    <small class="text-uppercase font-weight-bold">With text</small>
                </div>
                <a-nav expand effect="dark" type="primary" round title="Menu" :items="[{ name: 'Discover', link: '/', icon: 'fa fa-home', iconRight: 'fa fa-arrow-right' }, { name: 'Profile', link: '//google.com', external: true }, { name: 'Others', hideDecoration: true, color: 'pink' }]" />
            </div>
            <div class="col-lg-6 mt-4 mt-lg-0">
                <div class="mb-3">
                    <small class="text-uppercase font-weight-bold">With icons</small>
                </div>
                <a-nav expand effect="dark" type="success" round title="Menu" :items="[{ name: 'Discover', link: '/', icon: 'fa fa-home', iconRight: 'fa fa-arrow-right' }, { name: 'Profile', link: '/' }, { name: 'Others', hideDecoration: true, color: 'pink' }]" />
                <a-nav expand effect="dark" type="success" round title="Menu" />
            </div>
        </div>
      </div>

      <div class="container">
            <!-- Navigation -->
            <h2 class="mb-5">
                <span>Navbars</span>
            </h2>
        </div>
        <!-- Navbar default -->
        <a-nav v-for="menu in menus"
                  :key="menu.type"
                  :type="menu.type"
                  effect="dark"
                  expand
                  :title="menu.type"
                  class="mt-4"
                  :items="[{ name: 'Discover', link: '/', icon: 'fa fa-home', iconRight: 'fa fa-arrow-right' }, { name: 'Profile', link: '/', children: [{ name: 'Action' }] }, { name: 'Others', hideDecoration: true, color: 'pink' }]" />
        <a-nav
            expand
            effect="light"
            logo="primary"
            tag="Beta"
            tag-state="yellow"
            transparent
            class="mt-4"
            :items="[{ name: 'Platform' }, { name: 'Documentation', link: '/' }, { name: 'About', link: '/' }, { name: 'Events', link: '/' }, { name: 'Contact', link: '/', color: 'orange' }, { name: 'Documentation', link: '/' }, { name: 'We are Hiring!', hideDecoration: true, color: 'pink' }]" />
        <div class="bg--dark">
        <a-nav
            effect="dark"
            logo="light"
            tag="Beta"
            tag-state="yellow"
            transparent
            class="mt-4"
            :items="[{ name: 'Platform' }, { name: 'Documentation', link: '/' }, { name: 'About', link: '/' }, { name: 'Events', link: '/' }, { name: 'Contact', link: '/', color: 'orange' }, { name: 'Documentation', link: '/' }, { name: 'We are Hiring!', hideDecoration: true, color: 'pink' }]" />
        <a-nav
            effect="dark"
            logo="light"
            tag="Beta"
            tag-state="yellow"
            transparent
            class="mt-4" />
        </div>
    </div>
    `,
  data () {
    return {
      menus: [
        { type: 'default' },
        { type: 'primary' },
        { type: 'secondary' },
        { type: 'success' },
        { type: 'danger' },
        { type: 'warning' },
        { type: 'info' },
        { type: 'cyan' }
      ]
    }
  }
}))
