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
    <div v-for="item in test2" :key="item" id="div_person_data"></div>
  </div>
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
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
      },
    ];

    return {
      test,
      test2,
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
  width: 88%;
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
  height: 500px;
  width: fit-content;
  left: 50%;
  transform: translate(-50%, 0px);
  box-shadow: 0px 0px 10px 0px black;
}
#div_person_data {
  position: relative;
  display: inline-table;
  width: 100px;
  height: 100px;
  border: 2px solid;
  margin: 5px;
}
</style>
