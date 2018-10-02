import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Categories', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Categories</h3>

      <div class="w-50">
        <a-categories :items="[{ name: 'All Services', icon: '' },
          { name: 'Popular', icon: '' },
          { name: 'Authentication', icon: '' },
          { name: 'CMS', icon: '' },
          { name: 'Database', icon: '' },
          { name: 'Logging', icon: '' },
          { name: 'Memory Store', icon: '' },
          { name: 'Messaging', icon: '' },
          { name: 'Monitoring', icon: '' },
          { name: 'Optimization', icon: '' },
          { name: 'Search', icon: '' },
          { name: 'Worker', icon: '' }
        ]" />
      </div>
    </div>
    `
}))
