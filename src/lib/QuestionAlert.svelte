<script lang="ts">
  import Close from "carbon-icons-svelte/lib/Close.svelte";
  import Redo from "carbon-icons-svelte/lib/Redo.svelte";
  export let numberOfQuestions;
  export let question;
</script>

{#if question}
  <div class="alert" role="alert">
    Jump to Question
    {question}/{numberOfQuestions}
    <div class="ml-6 inline-flex flex-col items-center text-xs">
      <Close />
      Del/Esc
      <div class="rotate-180 mt-2">
        <Redo className="-rotate-180" />
      </div>
      Enter
    </div>
  </div>
{/if}
