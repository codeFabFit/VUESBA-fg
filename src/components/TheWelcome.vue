<script setup>
import WelcomeItem from './WelcomeItem.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="center-piece">
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Brain Wonders</template>
        <h6>Think your best and become the greatest</h6>
   
  </WelcomeItem>
</div>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
 

    <br />

    <h1>Parts of the brain</h1>
  </WelcomeItem>

  <WelcomeItem>
  
    <template #heading>Frontal Lobe</template>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos cum dolores voluptatum cupiditate, suscipit, iure expedita accusantium itaque et similique debitis est a ullam quos. Aperiam quisquam cumque est veniam.</p>
    <img>
    <button>Learn More</button>
  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Cerebellum</template>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quos deleniti a tenetur voluptas velit molestias inventore dolores unde quasi similique nulla, debitis veniam! Qui voluptatem distinctio error tempore doloribus?</p>
    <img>
    
    <button>Learn More</button>
    
  </WelcomeItem>

  
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Occupitial Lobe</template>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt nam laboriosam, error voluptatem magnam accusamus sit illum inventore, quas nostrum dolorum doloremque et aut cum hic expedita fugit. Quod.</p>
    <img>
      
      <button>Learn More</button>

  </WelcomeItem>
  


  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>More</template>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laborum, adipisci maxime ratione minima sequi. Et, voluptatem animi voluptates harum obcaecati aliquid, culpa nobis voluptatibus corrupti, molestiae quam accusamus iste.</p>
    <img>
      
      
      <button>Learn More</button>
    
  </WelcomeItem>

</template>

<style>
.center-piece{
  animation: alternate;
}

</style>