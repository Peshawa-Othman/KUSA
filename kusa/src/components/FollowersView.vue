<template>
  <div id="div_container_followers">
    <div id="div_search">
      <input placeholder="@username" id="input_search" type="search" />
      <font-awesome-icon id="icon_search" icon="fa-solid fa-magnifying-glass" />
    </div>
    <div id="div_scroll">
      <div v-for="item in test_followers" :key="item" id="div_person_info">
        <img id="person_image_scroll" :src="item.image" alt="person" />
        <h5 id="person_name_scroll">{{ item.name }}</h5>
        <h5 id="person_locaution_scroll">{{ item.location }}</h5>
        <h5 id="person_language_scroll">{{ item.language }}</h5>
        <h5 id="person_id_scroll">@peshawa911</h5>
        <div id="person_follow_scroll">FOLLOWERS</div>
      </div>
    </div>
  </div>
  <div @click="background_followers" id="background_followers"></div>
</template>

<script>
export default {
  setup() {
    const test_followers = [
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
    function background_followers() {
      document.getElementById("div_container_followers").style.left = "103%";
      document.getElementById("div_container_followers").style.transform =
        "translate(0%, 0px)";
      document.getElementById("background_followers").style.display = "none";
    }
    return {
      test_followers,
      background_followers,
    };
  },
};
</script>

<style scoped lang="scss">
#background_followers {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #10161c33;
  cursor: pointer;
}
#div_container_followers {
  position: fixed;
  z-index: 2;
  left: 103%;
  transform: translate(0%, 0px);
  width: 300px;
  margin-top: 30px;
  height: 500px;
  background: #10161c;
  box-shadow: 0px 0px 5px 2px black;
  transition: left 1s;
  transition: transform 0.1s;
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
  font-size: 9px;
  bottom: 40px;
  left: 3px;
  padding: 0px;
  border: 0px;
  border-radius: 0px;
  outline: 0px;
  color: #a7ff5b;
}
@media (max-width: 500px) {
  #div_container_followers {
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
    overflow-x: hidden;
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
