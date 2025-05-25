<!-- This is copied from story.svelte to design the course page to how we would like it -->

<script lang="ts">
  export let bannerImg: string = "";
  export let title: string = "";
  export let size: "narrow" | "wide" = "wide";
  export let plus_tier: boolean = false;
  export let overrule: boolean = false;
  export let prose: boolean = true;

  enum Size {
    narrow = "max-w-3xl",
    wide = "max-w-4xl",
    full = "max-w-6xl",
  }

</script>


<div class="mt-20"> <!-- margin top for nav-bar -->

  {#if title}
    <div class="text-center {Size[size]} mx-auto">
      <h2 class="text-3xl font-bold">{title}</h2>
    </div>
  {/if}

  <!-- an internal div can also remove prose by including a class 'not-prose' -->
  <div class="{prose ? 'prose' : ''} {Size[size]} mx-auto mt-x-large">
    {#if bannerImg !== ""}
      <div
        class="h-36 bg-cover bg-center rounded-t-2xl "
        style="background-image: url({bannerImg});"
      />
    {/if}
    
    <slot />
  </div>

</div>
