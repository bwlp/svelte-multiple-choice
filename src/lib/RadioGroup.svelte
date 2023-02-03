<script lang="ts">
  import { fieldsetBindings } from "./stores";
  export let questionIndex: number;
  export let numberOfOptions: number;

  const questionNumber = questionIndex + 1;
  const letters = "ABCDEFGHIJ";
  const options = letters.slice(0, numberOfOptions);
  const optionArray = letters.slice(0, numberOfOptions).split("");
  const radios = [];

  let value: string = "A";
  const handleKeyPress = (e: KeyboardEvent) => {
    const key = e.key.toUpperCase();

    if (options.includes(key)) {
      value = key;
      radios[options.indexOf(key)].focus();
    }
  };

  const handleChange = (e) => {
    // TODO: output result
  };
</script>

<fieldset
  tabindex="0"
  class="fieldset"
  id="question{questionNumber}"
  on:keypress={handleKeyPress}
  on:change={handleChange}
  bind:this={fieldsetBindings[questionIndex]}
>
  <label class="fieldset-legend">Question {questionNumber}</label>

  <div class="flex flex-wrap gap-y-4 gap-x-10">
    {#each optionArray as option, index}
      <label class="cursor-pointer flex items-center gap-x-3">
        <input
          bind:this={radios[index]}
          class="radio"
          checked={option === value}
          id="question{questionNumber}_{option}"
          name="question{questionNumber}"
          type="radio"
          value={option}
        />
        {option}
      </label>
    {/each}
  </div>
</fieldset>
