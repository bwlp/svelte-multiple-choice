<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Flag from "carbon-icons-svelte/lib/Flag.svelte";
  import FlagFilled from "carbon-icons-svelte/lib/FlagFilled.svelte";
  import Locked from "carbon-icons-svelte/lib/Locked.svelte";
  import Unlocked from "carbon-icons-svelte/lib/Unlocked.svelte";
  export let isLocked;
  export let isMarked;

  const dispatch = createEventDispatcher();

  function handleToggleLocked() {
    dispatch("toggle-locked", !isLocked);
  }

  function handleToggleMarked() {
    dispatch("toggle-marked", !isMarked);
  }
</script>

<div class="flex gap-2">
  {#if isLocked}
    <span
      class="cursor-pointer text-green-500"
      on:click={handleToggleLocked}
      data-testid="locked"
    >
      <Locked />
    </span>
  {:else}
    <span
      class="cursor-pointer"
      on:click={handleToggleLocked}
      data-testid="unlocked"
    >
      <Unlocked />
    </span>
  {/if}

  {#if isMarked}
    <span
      class="cursor-pointer text-red-500"
      on:click={handleToggleMarked}
      data-testid="marked"
    >
      <FlagFilled />
    </span>
  {:else}
    <span
      class="cursor-pointer"
      on:click={handleToggleMarked}
      data-testid="unmarked"
    >
      <Flag />
    </span>
  {/if}
</div>
