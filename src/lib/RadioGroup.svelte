<script lang="ts">
  import Flag from "carbon-icons-svelte/lib/Flag.svelte";
  import FlagFilled from "carbon-icons-svelte/lib/FlagFilled.svelte";
  import Locked from "carbon-icons-svelte/lib/Locked.svelte";
  import Unlocked from "carbon-icons-svelte/lib/Unlocked.svelte";
  import { fieldsetBindings } from "./stores";
  export let questionIndex: number;
  export let numberOfOptions: number;

  let questionNumber = questionIndex + 1;
  let isFocused = false;
  let isLocked = false;
  let isMarked = false;
  const letters = "ABCDEFGHIJ";
  let options = "";
  $: questionNumber = questionIndex + 1;
  $: options = letters.slice(0, numberOfOptions);
  const radios = [];

  let value: string = "A";
  function handleKeyPress(e: KeyboardEvent) {
    const key = e.key.toUpperCase();

    if (options.includes(key)) {
      value = key;
      radios[options.indexOf(key)].focus();
    }
    if (key === "M" && isFocused) {
      isMarked = !isMarked;
    }
    if (key === "L" && isFocused) {
      isLocked = !isLocked;
      fieldsetBindings[questionIndex].focus();
    }
  }

  function handleChange(e) {
    // TODO: output result
  }
  function handleToggleLocked() {
    isLocked = !isLocked;
  }
  function handleToggleMarked() {
    isMarked = !isMarked;
  }
</script>

<fieldset
  tabindex="0"
  class="fieldset"
  class:isLocked
  id="question{questionNumber}"
  on:keypress={handleKeyPress}
  on:change={handleChange}
  on:focus|capture={() => (isFocused = true)}
  on:blur|capture={() => (isFocused = false)}
  bind:this={fieldsetBindings[questionIndex]}
>
  <div class="flex justify-between mb-1">
    <label class="fieldset-legend">Question {questionNumber}</label>
    <div class="flex gap-2">
      {#if isLocked}
        <span
          class="cursor-pointer text-green-500"
          on:click={handleToggleLocked}
        >
          <Locked />
        </span>
      {:else}
        <span class="cursor-pointer" on:click={handleToggleLocked}>
          <Unlocked />
        </span>
      {/if}

      {#if isMarked}
        <span class="cursor-pointer text-red-500" on:click={handleToggleMarked}>
          <FlagFilled />
        </span>
      {:else}
        <span class="cursor-pointer" on:click={handleToggleMarked}>
          <Flag />
        </span>
      {/if}
    </div>
  </div>

  <div class="flex flex-wrap gap-y-4 gap-x-10">
    {#each options as option, index (option)}
      <label class="cursor-pointer flex items-center gap-x-3">
        <input
          bind:this={radios[index]}
          class="radio"
          class:checkedLocked={isLocked && option === value}
          checked={option === value}
          disabled={isLocked}
          id="question{questionNumber}_{option}"
          name="question{questionNumber}"
          type="radio"
          on:change={(event) => {
            value = event.currentTarget.value;
          }}
          value={option}
        />
        {option}
      </label>
    {/each}
  </div>
</fieldset>
