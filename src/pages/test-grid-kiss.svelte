<script lang="ts">
  import { url } from "@roxi/routify";

  const isDev = process.env.isDev;
  // const settings: object = dumpsterfireSettings;
</script>

<a href={$url("/")}>home</a>

<div class="body">
  <div class="header">header</div>
  <div class="sidebar">sidebar</div>
  <div class="main">main</div>
  <div class="footer">footer</div>
</div>

<style lang="scss">
  .body {
    grid-kiss: "+------------------------------+      "
      "|           .header ↑          | 120px"
      "+------------------------------+      "
      "                                      "
      "+--150px---+  +----- auto -----+      "
      "| .sidebar |  |      .main     | auto "
      "+----------+  +----------------+      "
      "                                      "
      "+------------------------------+      "
      "|               ↓              |      "
      "|         → .footer ←          | 60px "
      "+------------------------------+      ";

    color: $primary-color;
  }

  .header {
    background: cyan;
  }
  .sidebar {
    background: lime;
  }
  .main {
    background: yellow;
  }
  .footer {
    background: pink;
  }
</style>
