<template>
  <div id="div_container_users">
    <div id="div_search">
      <input placeholder="@username" id="input_search" type="search" />
      <font-awesome-icon id="icon_search" icon="fa-solid fa-magnifying-glass" />
    </div>
    <div id="div_scroll">
      <div v-for="item in test" :key="item" id="div_person_info">
        <img id="person_image_scroll" :src="item.image" alt="person" />
        <h5 id="person_name_scroll">{{ item.name }}</h5>
        <h5 id="person_locaution_scroll">{{ item.location }}</h5>
        <h5 id="person_language_scroll">{{ item.language }}</h5>
        <h5 id="person_id_scroll">@peshawa911</h5>
        <button id="person_follow_scroll">FOLLOW</button>
      </div>
    </div>
  </div>
  <div @click="div_background" id="div_background"></div>
  <font-awesome-icon
    @click="fa_users_line"
    id="fa_users_line"
    icon="fa-solid fa-users-line"
  />
  <div id="div_show_post">
    <div id="box_post" v-for="item in test" :key="item">
      <img
        v-if="item.image != ``"
        id="box_image"
        :src="item.image"
        alt="person"
      />
      <div>
        <img id="box_person_image" :src="item.image_person" alt="person" />
        <span id="box_person_name">{{ item.name }}</span>
      </div>
      <div>
        <p id="box_person_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          neque excepturi laborum quaerat eligendi accusamus iusto fugit.
        </p>
      </div>
      <div id="box_person_like">
        <div style="position: relative; width: auto; height: 12px">
          <font-awesome-icon id="like" icon="fa-solid fa-thumbs-up" /><span
            id="like_number"
            >45</span
          >
          <span id="unlike_number">55</span>
          <font-awesome-icon id="unlike" icon="fa-solid fa-thumbs-down" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const test = [
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        language: "kurdy",
        location: "kurdistan",
        image_person:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        language: "kurdy",
        location: "kurdistan",
        image_person:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
      },
      {
        image: "",
        name: "peshawa Othman Rashid",
        language: "kurdy",
        location: "kurdistan",
        image_person:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        language: "kurdy",
        location: "kurdistan",
        image_person:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        language: "kurdy",
        location: "kurdistan",
        image_person:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        language: "kurdy",
        location: "kurdistan",
        image_person:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        language: "kurdy",
        location: "kurdistan",
        image_person:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        language: "kurdy",
        location: "kurdistan",
        image_person:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
      },
    ];

    function div_background() {
      document.getElementById("div_container_users").style.left = "-103%";
      document.getElementById("div_background").style.display = "none";
      document.getElementById("fa_users_line").style.color = "#888";
    }
    function fa_users_line() {
      document.getElementById("div_container_users").style.left = "8%";
      document.getElementById("div_background").style.display = "block";
      document.getElementById("fa_users_line").style.color = "#becf21";
    }
    return {
      div_background,
      fa_users_line,
      test,
    };
  },
};
</script>

<style scoped lang="scss">
#div_container_users {
  position: relative;
  float: right;
  width: 300px;
  margin-top: 30px;
  height: 500px;
  background: #10161c;
  box-shadow: 0px 0px 5px 2px black;
}
#div_search {
  position: relative;
  width: inherit;
  height: 40px;
}
#input_search {
  position: relative;
  top: 0px;
  padding-left: 7px;
  outline: 0;
  background: #dfdfdf;
  border: 0px;
  width: 245px;
  border-radius: 5px;
  height: 26px;
}
#icon_search {
  position: relative;
  top: 6px;
  color: cadetblue;
  font-size: 26px;
  right: -5px;
  cursor: pointer;
  transition: color 0.5s;
}
#icon_search:hover {
  color: rgb(139, 226, 26);
}
#div_scroll {
  position: relative;
  overflow-y: scroll;
  float: right;
  top: -18px;
  width: -moz-fit-content;
  width: 300px;
  margin-top: 30px;
  height: 447px;
  background: #10161c;
  box-shadow: 0px 0px 5px 2px black;
}
#div_scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

#div_scroll::-webkit-scrollbar-track {
  background-color: #0000007c;
}

#div_scroll::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
#div_person_info {
  position: relative;
  width: auto;
  margin-right: 9px;
  margin-left: 9px;
  margin-bottom: 15px;
  margin-top: 10px;
  border-radius: 5px;
  height: 120px;
  // cursor: pointer;
  box-shadow: 0px 0px 4px 1px black;
}
#div_person_info:hover {
  box-shadow: 0px 0px 7px 2px black;
}
#div_show_post {
  position: relative;
  float: left;
  width: 72%;
  overflow-y: scroll;
  height: 500px;
  top: 32px;
  box-shadow: 0px 0px 5px 2px black;
}
#div_show_post::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

#div_show_post::-webkit-scrollbar-track {
  background-color: #0000007c;
}

#div_show_post::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
#fa_users_line {
  display: none;
  position: relative;
  color: #888;
  font-size: 30px;
  float: right;
  /* left: 33px; */
  top: 54px;
  cursor: pointer;
  transition: color 0.5s;
}
#person_image_scroll {
  position: relative;
  width: 50px;
  height: 50px;
  top: 5px;
  cursor: pointer;
  right: 107px;
  border-radius: 25px;
}
#person_image_scroll:hover {
  box-shadow: 0px 0px 4px 1px white;
}
#person_name_scroll {
  position: relative;
  width: auto;
  font-size: small;
  bottom: 68px;
  left: 8px;
  color: burlywood;
}
#person_locaution_scroll {
  position: relative;
  width: auto;
  font-size: small;
  bottom: 77px;
  left: 8px;
  color: burlywood;
}
#person_language_scroll {
  position: relative;
  width: auto;
  font-size: small;
  bottom: 88px;
  left: 8px;
  color: burlywood;
}
#person_id_scroll {
  position: relative;
  width: auto;
  font-size: small;
  bottom: 98px;
  left: 8px;
  color: burlywood;
}
#person_follow_scroll {
  position: absolute;
  width: auto;
  font-size: 10px;
  bottom: 34px;
  left: 6px;
  padding: 4px;
  border: 0px;
  border-radius: 3px;
  outline: 0px;
  background: #6b6bffc4;
  cursor: pointer;
  color: #a7ff5b;
}
#person_follow_scroll:hover {
  box-shadow: 0px 0px 7px 1px rgb(255, 255, 255);
}
#box_post {
  margin-top: 15px;
  margin-bottom: 15px;
  position: relative;
  // border: 1px solid;
  box-shadow: 0px 0px 4px 2px black;
  max-width: fit-content;
  max-height: fit-content;
  min-width: 200px;
  min-height: 200px;
  left: 50%;
  transform: translate(-50%, 0px);
}
#box_post:hover {
  box-shadow: 0px 0px 10px 2px black;
}
#box_image {
  position: relative;
  object-fit: contain;
  width: 235px;
  height: 232px;
}
#box_person_image {
  position: relative;
  width: 31px;
  right: 17px;
  top: 4px;
  height: 31px;
  border-radius: 25px;
  cursor: pointer;
}
#box_person_image:hover {
  box-shadow: 0px 0px 4px 1px #fff;
}
#box_person_name {
  position: relative;
  font-size: 14px;
  color: aliceblue;
  bottom: 9px;
}
#box_person_text {
  position: relative;
  width: 235px;
  color: aliceblue;
  font-size: 14px;
  text-align: left;
  left: 5px;
}
#box_person_like {
  position: relative;
  width: auto;
  // border: 1px solid;
  padding: 8px;
}
#like {
  position: relative;
  float: left;
  margin-right: 5px;
  cursor: pointer;
  color: #dfdfdf;
}
#unlike {
  position: relative;
  float: right;
  margin-right: 5px;
  cursor: pointer;
  color: #dfdfdf;
}
#like_number {
  position: relative;
  float: left;
  color: #dfdfdf;
}
#unlike_number {
  position: relative;
  float: right;
  color: #dfdfdf;
}

@media (max-width: 1115px) {
  #div_container_users {
    position: fixed;
    z-index: 3;
    left: -103%;
    width: 300px;
    margin-top: 30px;
    height: 500px;
    background: #10161c;
    box-shadow: 0px 0px 5px 2px black;
    transition: left 1s;
  }
  #div_background {
    display: none;
    position: fixed;
    width: 100%;
    top: 0px;
    cursor: pointer;
    bottom: 0px;
    height: 100%;
    z-index: 2;
    background: #0000002b;
  }
  #div_show_post {
    position: relative;
    width: -webkit-fill-available;
    height: 440px;
    top: 32px;
    box-shadow: 0px 0px 5px 2px black;
    margin-top: 56px;
  }
  #fa_users_line {
    display: block;
  }
}
@media (max-width: 500px) {
  #div_container_users {
    width: 240px;
    height: 400px;
    top: 160px;
  }
  #input_search {
    width: 196px;
  }
  #div_scroll {
    width: 240px;
    height: 348px;
  }
  #person_image_scroll {
    width: 40px;
    height: 40px;
    top: 7px;
    right: 82px;
  }
  #person_name_scroll {
    font-size: 11px;
    bottom: 56px;
    left: 17px;
  }
  #person_locaution_scroll {
    font-size: 11px;
    bottom: 65px;
    left: 17px;
  }
  #person_language_scroll {
    font-size: 11;
    bottom: 76px;
    left: 17px;
  }
  #person_id_scroll {
    font-size: 11px;
    bottom: 87px;
    left: 17px;
  }
}
</style>
