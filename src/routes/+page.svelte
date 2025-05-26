<script lang="ts">
  import Story from "$lib/components/page-formats/story.svelte";
  import Button from "$lib/components/buttons/button.svelte"

  let name = '';
  let email = '';
  let message = '';
  let data = '';

  async function query_postgres() {
    console.log("fetching")
    const response = await fetch('/api/query_postgres');
    console.log("response is: ", response)
    if (response.ok) {
      console.log("within response.ok")
      data = await response.json();

      console.log('result is: ', response);
    } else {
      console.error('Failed to fetch data');
    }
  }
</script>

<Story title="Four Macadamia Logbook">
  <form on:submit|preventDefault={query_postgres}>
    <!-- <input bind:value={name} placeholder="Form Field 1" /> -->
    <!-- <input type="email" bind:value={email} placeholder="Email" required /> -->
    <!-- <textarea bind:value={message} placeholder="Message" required></textarea> -->
    <button type="submit">Submit</button>
    <!-- <Button type="submit">Submit 2</Button> -->
  </form>

  <Button func={query_postgres} >Submit 2</Button>

  <div>
    Data Response is: {JSON.stringify(data)}
  </div>
</Story>