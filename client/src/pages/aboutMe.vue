<template>
  <div class="page page--index">
    <h1>About Me</h1>
    <p>{{ intro }}</p>
    <p>{{ intro2}}</p><br><br>
    
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import typeJoke from '../components/typeJoke.vue'
@Component({
  components: {
    typeJoke
  }
})
export default class aboutMe extends Vue {
  private intro: string  = "I am a driven, outgoing and positive 21-year-old, currently pursuing a degree at Lehigh University in Electrical and Computer Engineering, along with an Economics minor. In my third year at Lehigh I am pursuing various interests, including membership in the Interfraternity Judiciary Committee, being the head of the standards board in Delta Upsilon fraternity, an executive board member of the University Choir, and the Off the Record Acapella group. I am also part of the selective TRAC (Technology, Research and Communication) Fellow Program and a tutor at Lehigh’s Center for Academic Success. Along with a strong mathematics background, I am an advanced Spanish speaker and a skilled writer.";
  private intro2: string = "I was born and raised in and around the suburbs of San Francisco, California, where I currently live when not at school. I have played every sport I could get myself to since a young age, and have always been a curios, hands-on learner. Outside of skills, I dedicate my personal discipline to my life as an athlete, starting with my rowing career in high school. The ability to balance 20+ hours of rowing a week with school and homework has allowed me to pursue my interests and passions in college while maintaining a high level of performance in classes. Not only have athletics affected my discipline in school and extracurriculars, rowing taught me how to handle stressful situations and, being my team’s captain, I learned to hold myself accountable in every situation."
}
</script>
<style>
  body {
    background-image: url('../components/Background.jpg');
    background-size: cover;
    color: white;
    font-family:'Courier New', Courier, monospace;
  }
</style>