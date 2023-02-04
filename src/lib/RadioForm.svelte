<script lang="ts">
  import QuestionAlert from "./QuestionAlert.svelte";
  import RadioGroup from "./RadioGroup.svelte";
  import { fieldsetBindings } from "./stores";

  let numberOfOptions: number = 4;
  let numberOfQuestions: number = 40;
  const questionArray = Array(numberOfQuestions);
  let question: string = "";
  const handleKeyPress = (e: KeyboardEvent) => {
    if (/[0-9]/.test(e.key)) {
      question = question.concat(e.key);
      if (parseInt(question) > numberOfQuestions) {
        question = numberOfQuestions.toString();
      }
    } else if (/Delete|Escape/.test(e.key)) {
      question = "";
    } else if (e.key === "Backspace") {
      question = question.slice(0, -1);
    } else if (e.key === "Enter") {
      fieldsetBindings[parseInt(question) - 1]?.focus();
      question = "";
    } else if (/ArrowUp|ArrowLeft/.test(e.key)) {
      if (Object.values(fieldsetBindings).includes(document.activeElement)) {
        e.preventDefault();
        const prevIndex = Math.max(
          Object.values(fieldsetBindings).indexOf(document.activeElement) - 1,
          0
        );
        fieldsetBindings[prevIndex].focus();
      }
    } else if (/ArrowDown|ArrowRight/.test(e.key)) {
      if (Object.values(fieldsetBindings).includes(document.activeElement)) {
        e.preventDefault();
        const nextIndex = Math.min(
          Object.values(fieldsetBindings).indexOf(document.activeElement) + 1,
          numberOfQuestions - 1
        );
        fieldsetBindings[nextIndex].focus();
      }
    }
  };
</script>

<QuestionAlert {numberOfQuestions} {question} />

<section class="grid-cols-4 grid border-collapse" on:keydown={handleKeyPress}>
  {#each questionArray as _, index}
    <RadioGroup questionIndex={index} {numberOfOptions} />
  {/each}
</section>
