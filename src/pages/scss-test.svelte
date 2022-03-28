<script lang="ts">
  import { url } from "@roxi/routify";

  const isDev = process.env.isDev;
  // const settings: object = dumpsterfireSettings;
</script>

<h1>
  Jello.
  <h2>not Vallo</h2>
</h1>
<a href={$url("/")}>home</a>
<p>isDev: {isDev}</p>

<style lang="scss">
  $font-stack: Helvetica, sans-serif;
  //   $primary-color: #333;

  @alias {
    fs: font-size;
    bg: background;
  }

  h1 {
    font-size: 70px;
    bg: cyan;
    h2 {
      fs: 40px;
      bg: green;
    }
  }

  p:hover {
    color: #2e3440;
    background-color: #d8dee9;
    transition: transform 5s easeInQuart;
  }

  h1 {
    color: $primary-color;
    font: 100% $font-stack;
  }
</style>
