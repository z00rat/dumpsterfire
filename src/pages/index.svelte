<script lang="ts">
  import { url } from "@roxi/routify";

  const randomUrl = btoa(Math.random().toString());
</script>

<h1>Hello.</h1>
<a href={$url("./test")}>test</a>
<a href={$url(randomUrl)}>randomUrl</a>

<style>
</style>
