<template>
  <div id="card_shadow_person">
    <VueHorizontal responsive>
      <section v-for="item in test" :key="item">
        <div class="div_person_room">
          <img id="image_person_room" :src="item.image" alt="" />
          <label id="name_person_room" for="">{{ item.name }}</label>
          <font-awesome-icon id="fa_microphone" icon="fa-solid fa-microphone" />
          <p id="title_person_room" for="">{{ item.noted }}</p>
          <div id="div_icon_person_room">
            <font-awesome-icon
              style="color: aliceblue"
              icon="fa-solid fa-user"
            />
            <label style="color: aliceblue; margin-left: 5px" for="">{{
              item.users
            }}</label>
          </div>
          <div id="time">
            <font-awesome-icon
              style="margin-right: 5px"
              icon="fa-solid fa-hourglass-start"
            /><label for="">{{ item.time }}</label>
          </div>
          <span id="follow">Follow</span>
        </div>
      </section>
    </VueHorizontal>
  </div>
  <div id="div_show_connection_room">
    <div v-for="item in test2" :key="item" id="div_person_data">
      <span id="user_follow">Follow</span>
      <img id="user_image" :src="item.image" alt="" />
      <span id="user_number">{{ item.number }}</span>
      <div id="div_name">
        <span id="user_name">{{ item.name }}</span>
      </div>
    </div>
    <hr />
    <div v-for="item in test3" :key="item" id="div_person_data">
      <!-- <span id="user_follow">Follow</span> -->
      <img id="user_image" :src="item.image" alt="All" />
      <span id="user_number">{{ item.number }}</span>
      <div id="div_name">
        <span id="user_name">{{ item.name }}</span>
      </div>
    </div>
    <div id="div_icon_all">
      <font-awesome-icon
        @click="show_all_user"
        id="icon_all"
        icon="fa-solid fa-border-all"
      />
      <label id="text_all" for="">All</label>
    </div>
    <div id="fa-hand_fa-microphone">
      <font-awesome-icon
        @click="microphone_close"
        id="fa-microphone"
        icon="fa-solid fa-microphone"
      />
      <font-awesome-icon
        @click="microphone_open"
        id="fa-microphone-slash"
        icon="fa-solid fa-microphone-slash"
      />
      <font-awesome-icon
        @click="hand_close"
        id="fa-hand"
        icon="fa-solid fa-hand"
      />
      <font-awesome-icon
        @click="hand_open"
        id="fa-hand-close"
        icon="fa-solid fa-hand"
      />
    </div>
  </div>
  <div class="box_people">
    <div v-for="item in test2" :key="item" id="div_person_data">
      <!-- <span id="user_follow">Follow</span> -->
      <img id="user_image" :src="item.image" alt="All" />
      <span id="user_number">{{ item.number }}</span>
      <div id="div_name">
        <span id="user_name">{{ item.name }}</span>
      </div>
    </div>
  </div>
  <div id="div_background" @click="div_background"></div>
</template>

<script>
import VueHorizontal from "vue-horizontal";
export default {
  setup() {
    const test = [
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 1",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 2",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 3",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 4",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 5",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 6",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 7",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 8",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 9",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 10",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 11",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 12",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 13",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language 14",
        users: "25",
        time: "7:34",
      },
    ];
    const test2 = [
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 1,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 2,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 3,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 4,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 5,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 6,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 7,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 8,
      },
    ];

    const test3 = [
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 1,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 2,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 3,
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        number: 4,
      },
    ];

    function microphone_close() {
      document.getElementById("fa-microphone-slash").style.display =
        "inline-table";
      document.getElementById("fa-microphone").style.display = "none";
    }
    function microphone_open() {
      document.getElementById("fa-microphone-slash").style.display = "none";
      document.getElementById("fa-microphone").style.display = "inline-table";
    }
    function hand_close() {
      document.getElementById("fa-hand-close").style.display = "inline-table";
      document.getElementById("fa-hand").style.display = "none";
    }
    function hand_open() {
      document.getElementById("fa-hand-close").style.display = "none";
      document.getElementById("fa-hand").style.display = "inline-table";
    }
    function show_all_user() {
      document.getElementById("div_background").style.display = "block";
      document.querySelector(".box_people").style.top = "20%";
    }
    function div_background() {
      document.getElementById("div_background").style.display = "none";
      document.querySelector(".box_people").style.top = "105%";
    }

    return {
      microphone_close,
      microphone_open,
      hand_close,
      hand_open,
      show_all_user,
      div_background,
      test,
      test2,
      test3,
    };
  },
  components: {
    VueHorizontal,
  },
};
</script>

<style scoped lang="scss">
.div_person_room {
  position: relative;
  display: inline-table;
  width: 234px;
  height: 145px;
  background-color: #10161c;
  border-radius: 5px;
  margin: 15px;
  box-shadow: 0px 0px 2px 2px black;
  cursor: pointer;
  // z-index: 1;
}
.div_person_room:hover {
  position: relative;
  display: inline-table;
  width: 234px;
  height: 145px;
  background-color: #10161c;
  border-radius: 5px;
  margin: 15px;
  box-shadow: 0px 0px 12px 2px black;
  cursor: pointer;
}

#card_shadow_person {
  margin-top: 55px;
  position: relative;
  width: 80%;
  left: 50%;
  transform: translate(-50%, 0px);
  background: center bottom;
  box-shadow: 0px 0px 10px 0px black;
}
#card_shadow_person::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

#card_shadow_person::-webkit-scrollbar-track {
  background-color: #0000007c;
}

#card_shadow_person::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
#image_person_room {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  top: 8px;
  right: 10px;
}
#name_person_room {
  color: aliceblue;
  font-size: smaller;
  position: relative;
  bottom: 9px;
  right: 6px;
}
#fa_microphone {
  color: aliceblue;
  position: relative;
  left: 11px;
  bottom: 19px;
}
#title_person_room {
  color: aliceblue;
  font-size: small;
  position: relative;
  top: 17px;
}
#div_icon_person_room {
  color: aliceblue;
  position: relative;
  top: 39px;
  right: 91px;
  font-size: smaller;
}
#time {
  color: aliceblue;
  font-size: small;
  position: relative;
  top: 24px;
  right: 32px;
}
#follow {
  color: aliceblue;
  position: relative;
  top: 7px;
  left: 90px;
  font-size: smaller;
}
// //////////////////////////////////@at-root
#div_show_connection_room {
  top: 45px;
  background: center bottom;
  position: relative;
  height: fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin-bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0px);
  box-shadow: 0px 0px 10px 0px black;
}
#div_person_data {
  position: relative;
  display: inline-table;
  width: 100px;
  height: 100px;
  // border: 2px solid;
  margin: 5px;
}
#user_image {
  width: 45px;
  height: 45px;
  border-radius: 45px;
  position: relative;
  right: 0px;
  top: 25px;
  cursor: pointer;
}

#user_follow {
  color: aliceblue;
  position: absolute;
  font-size: 10px;
  bottom: 83px;
  background: blueviolet;
  padding: 2px;
  left: 30px;
  border-radius: 3px;
  cursor: pointer;
}
#user_follow:hover {
  color: rgb(129, 255, 10);
  background: rgb(73, 66, 80);
}
#user_name {
  color: aliceblue;
  font-size: 10px;
}
#div_name {
  position: relative;
  width: 89px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  top: 24px;
  left: 15px;
}
#user_number {
  position: relative;
  top: 44px;
  color: aliceblue;
  right: 64px;
}
hr {
  width: auto;
  margin: 50px;
  border: 1px solid;
  box-shadow: 0px 0px 11px 0px black;
}
#icon_all {
  position: relative;
  font-size: x-large;
  border: 1px solid;
  padding: 9px;
  border-radius: 40px;
  cursor: pointer;
  top: 0px;
}
#div_icon_all {
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 50px;
  // border: 1px solid;
  left: 50%;
  transform: translate(-50%, 0px);
}
#icon_all:hover {
  position: relative;
  font-size: x-large;
  border: 1px solid gold;
  color: gold;
  padding: 9px;
  border-radius: 40px;
  cursor: pointer;
}
#text_all {
  position: relative;
  color: antiquewhite;
}
#fa-hand_fa-microphone {
  position: relative;
  margin-top: 40px;
  left: 50%;
  transform: translate(-50%, 0px);
}
#fa-hand {
  display: none;
  width: 23px;
  position: relative;
  padding: 15px;
  font-size: x-large;
  cursor: pointer;
  color: yellowgreen;
  border: 1px solid;
  margin-bottom: 40px;
  border-radius: 35px;
}
#fa-hand-close {
  display: inline-table;
  width: 23px;
  position: relative;
  padding: 15px;
  font-size: x-large;
  cursor: pointer;
  color: red;
  border: 1px solid;
  margin-bottom: 40px;
  border-radius: 35px;
}
#fa-microphone {
  display: none;
  width: 23px;
  position: relative;
  padding: 15px;
  font-size: x-large;
  cursor: pointer;
  color: yellowgreen;
  border: 1px solid;
  margin-right: 80px;
  margin-bottom: 40px;
  border-radius: 35px;
}
#fa-microphone-slash {
  display: inline-table;
  width: 23px;
  position: relative;
  padding: 15px;
  font-size: x-large;
  cursor: pointer;
  color: red;
  border: 1px solid;
  margin-right: 80px;
  margin-bottom: 40px;
  border-radius: 35px;
}
// ///////////////////////////////////////////@at-root
#div_background {
  cursor: pointer;
  top: 0px;
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.box_people {
  position: fixed;
  width: fit-content;
  min-width: 300px;
  background: #10161c;
  top: 105%;
  overflow-y: scroll;
  border-radius: 5px;
  height: 300px;
  border: 1px solid;
  box-shadow: 0px 0px 10px 2px black;
  left: 50%;
  transform: translate(-50%, 0px);
  transition: top 1s;
  z-index: 3;
}
.box_people::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.box_people::-webkit-scrollbar-track {
  background-color: #0000007c;
}

.box_people::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
</style>
