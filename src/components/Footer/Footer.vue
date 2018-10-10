<template>
  <div :class="['footer', {dark: dark}]">
    <div class="columns">
      <div class="column">
        <h4 :class="dark ? 'text--light' : 'text--dark'">Product</h4>
        <a
          href="#"
          title=""
          @click.prevent="">Platform</a>
        <a
          href="#"
          title=""
          @click.prevent="">Documentation</a>
        <a
          href="#"
          title=""
          @click.prevent="">FAQ</a>
        <a
          href="#"
          title=""
          @click.prevent="">Give Feedback</a>
      </div>
      <div class="column">
        <h4 :class="dark ? 'text--light' : 'text--dark'">Resources</h4>
        <a
          href="#"
          title=""
          @click.prevent="">Events</a>
        <a
          href="#"
          title=""
          @click.prevent="">Blog</a>
      </div>
      <div class="column">
        <h4 :class="dark ? 'text--light' : 'text--dark'">Company</h4>
        <a
          href="#"
          title=""
          @click.prevent="">About</a>
        <a
          href="#"
          title=""
          @click.prevent="">Jobs</a>
        <a
          href="#"
          title=""
          @click.prevent="">Contact</a>
        <a
          href="#"
          title=""
          class="text--green"
          @click.prevent="">We are Hiring!</a>
      </div>
      <div class="column">
        <div class="social">
          <a
            href="#"
            title=""
            @click.prevent=""><font-awesome-icon :icon="['fab', 'slack']" /></a>
          <a
            href="#"
            title=""
            @click.prevent=""><font-awesome-icon :icon="['fab', 'github']" /></a>
          <a
            href="#"
            title=""
            @click.prevent=""><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        </div>
        <p>&copy; 2018 Asyncy, Inc.</p>
      </div>
    </div>
    <h4 :class="['signature', [dark ? 'text--light' : 'text--dark'], 'text--center']">Passionately built with <font-awesome-icon icon="heart" /> in Amsterdam</h4>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    dark: {
      type: Boolean,
      default: false,
      description: 'put the dark mode'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  z-index: 3;
  display: block;
  position: relative;
  color: color(dark);

  .columns {
    max-width: 1000px;
    margin: 0 auto;
    .column {
      @include breakpoint (max s) { padding: .7rem 4rem }
      padding: .7rem;

      a {
        color: color(dark);
        display: block;

        & + a {
          margin-top: 1rem;
        }
      }

      p {
        color: color(dark);
      }

      .social {
        display: flex;
        flex-direction: row;
        flex: .1 1 auto;
        justify-content: start;
        padding-top: 1rem;
        @include breakpoint(s) { justify-content: start }

        a {
          margin-top: 0;
          font-size: 2rem;

          & + a {
            margin-left: 2rem;
          }
        }
      }
    }
  }

  &.dark {
    color: color(light);
    .columns {
      .column {
        a {
          color: color(light);
        }

        p {
          color: color(light);
        }
      }
    }
  }

  .signature {
    padding: 2rem 0;
    svg {
      color: color(red);
    }
  }
}
</style>
