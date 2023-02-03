<script lang="ts">
  import RadioGroup from "./RadioGroup.svelte";
  import { fieldsetBindings } from "./stores";

  let numberOfOptions: number = 6;
  let numberOfQuestions: number = 20;
  const questionArray = Array(numberOfQuestions);
  let question: string = "";
  const handleKeyPress = (e: KeyboardEvent) => {
    if (/[0-9]/.test(e.key)) {
      question = question.concat(e.key);
    } else if (/Delete|Escape/.test(e.key)) {
      question = "";
    } else if (e.key === "Backspace") {
      question = question.slice(0, -1);
    } else if (e.key === "Enter") {
      if (parseInt(question) > numberOfQuestions) {
        question = numberOfQuestions.toString();
      } else {
        fieldsetBindings[parseInt(question) - 1].focus();
      }
    }
  };
</script>

{#if question}
  <div class="alert" role="alert">
    Jump to Question
    {question}
  </div>
{/if}

<section class="grid-cols-3 grid border-collapse" on:keydown={handleKeyPress}>
  {#each questionArray as _, index}
    <RadioGroup questionIndex={index} {numberOfOptions} />
  {/each}
</section>
