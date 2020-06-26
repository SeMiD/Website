<template>
  <div class="idk">
    <loading v-if="loading == true" />
    <div class="content" v-else>
      <navigation />
      <transition appear v-on:after-appear="appear">
        <div class="invisible" ref="mainDiv">
          <div class="info">
            <img
              class="logo"
              draggable="false"
              :src="require('~/assets/images/semid.png')"
            />
            <div class="text">
              <h1 class="title">
                SeMiD
              </h1>
              <p>What is SeMiD?</p>
              <p>We don't know either ¯\_(ツ)_/¯</p>
            </div>
          </div>
          <div class="catch">
            <h1>
              YOU WANT SEMID?
            </h1>
            <p>
              catch it. come on... click it, you will find out when you
              succeeded.
            </p>
            <img
              ref="notrickroll"
              style="width: 150px; border-radius: 100%"
              draggable="false"
              :src="require('~/assets/images/semid.png')"
              @click="playSound()"
            />
            <audio ref="nice" id="audio">
              <source
                :src="require('~/assets/sounds/click-nice.mp3')"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
      </transition>
      <Wave class="waves-divider_top" />
      <div class="random pattern" ref="anotherOne">
        <h1 class="title">Does SeMiD even do something?</h1>
        <p>
          Yes, it actually does, currently it is managing some of PreMiD's
          amazing repositories.
        </p>

        <div class="part invisible">
          <div class="part-text">
            <div
              v-for="p in info.user.contributionsCollection
                .pullRequestContributionsByRepository"
              :key="p.repository.name"
            >
              <h1>
                {{ p.repository.owner.login + "/" + p.repository.name }} -
                {{ p.contributions.totalCount }} pull requests.
              </h1>
            </div>

            <div
              v-for="r in info.user.contributionsCollection
                .commitContributionsByRepository"
              :key="r.repository.name"
            >
              <div
                v-if="
                  r.repository.owner.login == 'PreMiD' &&
                    r.repository.name !== 'SeMiD'
                "
              >
                <h1>
                  {{ r.repository.owner.login + "/" + r.repository.name }} -
                  {{ r.contributions.totalCount }} commits.
                </h1>
              </div>
            </div>
          </div>
          <img :src="require('~/assets/gifs/kekw.gif')" />
        </div>
      </div>
      <Wave class="waves-divider_bottom" />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import anime from "animejs";
import Footer from "../components/Footer.vue";
import loading from "../components/loading.vue";
import Navigation from "../components/navigation.vue";
import Vue from "vue";
import Wave from "../components/wave.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Footer,
    loading,
    Navigation,
    Wave
  },
  async asyncData() {
    return {
      info: (await axios.get("http://localhost:3000/api/activity")).data
    };
  },
  data() {
    return {
      loading: true,
      clicked: false
    };
  },
  mounted() {
    //! pls ignore shitcode kthx, definitely not a fake loading page
    setTimeout(() => (this.loading = false), 2500);
  },
  methods: {
    appear() {
      anime
        .timeline({
          duration: 1500,
          easing: "easeOutExpo",
          opacity: [0, 1],
          begin: () => {
            this.$refs.mainDiv.classList.remove("invisible");
            this.$refs.anotherOne.classList.remove("invisible");
          }
        })
        .add(
          {
            targets: ".info img",
            translateX: ["-100%", 0]
          },
          0
        )
        .add(
          {
            targets: ".text",
            translateX: ["100%", 0]
          },
          0
        )
        .add(
          {
            targets: ".text *",
            delay: anime.stagger(100),
            scale: [0, 1],
            opacity: [0, 1]
          },
          0
        )
        .add(
          {
            targets: ".catch",
            delay: anime.stagger(100),
            scale: [0, 1],
            opacity: [0, 1]
          },
          0
        )
        .add(
          {
            targets: ".random *",
            delay: anime.stagger(100),
            scale: [0, 1],
            opacity: [0, 1]
          },
          0
        );

      anime({
        targets: this.$refs.notrickroll,
        translateX: ["550%", "-550%"],
        rotate: 2000,
        direction: "alternate",
        loop: true,
        easing: "cubicBezier(.5, .05, .1, .3)"
      });
    },
    playSound() {
      (document.getElementById("audio") as HTMLAudioElement).play();
    }
  },
  head() {
    return {
      title: "Home"
    };
  }
});
</script>

<style lang="scss">
.idk {
  height: 100%;
  width: 100%;
  color: white;
  background: #111218;
  overflow: auto;

  .content {
    position: relative;

    .info {
      display: flex;
      justify-content: center;
      vertical-align: middle;
      align-items: center;
      padding: 1em;

      .text {
        h1 {
          font-size: 3em;
          margin-top: 0;
          margin-bottom: 0.2em;
        }

        p {
          color: #8b8b8b;
          margin: 0;
        }
      }

      img {
        border-radius: 100%;
        margin-right: 10em;
        width: 375px;
      }
    }

    .catch {
      width: 100%;
      text-align: center;
      user-select: none;

      h1 {
        margin-top: 1.5em;
      }

      p {
        margin-bottom: 5em;
      }
    }

    .random {
      padding-top: 8em;

      .part {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5em;
        padding-bottom: 8em;

        img {
          margin-left: 15em;
        }
      }

      .title {
        text-align: center;
        margin-bottom: 0;
      }

      p {
        text-align: center;
        color: #8b8b8b;
      }
    }

    .pattern {
      background-image: url("../assets/images/pattern.png");
      background-size: 300px 240px;
    }
  }
}

.invisible {
  display: none;
}
</style>
