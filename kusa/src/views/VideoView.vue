<template>
  <div style="position: relative; display: inline-table">
    <div
      v-for="item in test"
      :key="item"
      style="margin-top: 60px; position: relative; display: inline-table"
    >
      <div @click="Video_room" class="div_person_room">
        <img id="image_person_room" :src="item.image" alt="" />
        <font-awesome-icon id="fa_microphone" icon="fa-solid fa-video" />
        <label id="name_person_room" for="">{{ item.name }}</label>
        <p id="noted_person_room" for="">{{ item.noted }}</p>
        <div class="fa_user">
          <font-awesome-icon style="color: #a9f113" icon="fa-solid fa-user" />
          <label style="color: #a9f113; margin-left: 5px" for="">{{
            item.users
          }}</label>
        </div>
        <div class="fa_hourglass_start">
          <font-awesome-icon
            style="color: #a9f113"
            icon="fa-solid fa-hourglass-start"
          />
          <label style="color: #a9f113; margin-left: 5px" for="">{{
            item.time
          }}</label>
        </div>
        <span id="following">Following</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const test = [
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
      {
        image:
          "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg",
        name: "peshawa Othman Rashid",
        noted: "Lets practice english language",
        users: "25",
        time: "7:34",
      },
    ];
    function Video_room() {
      router.push({ path: "/videoroom" });
    }
    return { test, Video_room };
  },
};
</script>

<style scoped lang="scss">
#fa_microphone {
  position: relative;
  float: right;
  top: 8px;
  right: 5px;
  color: #a9f113;
}
.div_person_room {
  position: relative;
  display: inline-table;
  max-width: 355px;
  min-width: 300px;
  height: 145px;
  background-color: #10161c;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0px 0px 4px 1px black;
  cursor: pointer;
}
.div_person_room:hover {
  position: relative;
  display: inline-table;
  max-width: 355px;
  min-width: 300px;
  height: 145px;
  background-color: #10161c;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0px 0px 4px 3px black;
}

#image_person_room {
  width: 50px;
  height: 50px;
  float: left;
  margin: 5px;
  border-radius: 100px;
  position: relative;
}
#name_person_room {
  position: relative;
  float: left;
  font-size: 14px;
  color: #cbe5ce;
  font-weight: bolder;
  top: 24px;
}
#noted_person_room {
  position: relative;
  font-size: 15px;
  color: #cbe5ce;
  float: left;
  top: 40px;
}
.fa_user {
  position: relative;
  float: left;
  top: 102px;
  right: 257px;
}
.fa_hourglass_start {
  position: relative;
  float: left;
  top: 102px;
  right: 230px;
}
#following {
  position: relative;
  float: right;
  margin-right: 3px;
  letter-spacing: 1px;
  padding: 3px;
  font-size: 13px;
  top: 84px;
  color: #a9f113;
}
@media (max-width: 400px) {
  #noted_person_room {
    position: relative;
    font-size: 12px;
    width: fit-content;
    color: #cbe5ce;
    float: left;
    top: 40px;
  }
  .fa_user {
    position: relative;
    float: left;
    top: 102px;
    right: 213px;
  }
  .fa_hourglass_start {
    position: relative;
    float: left;
    top: 102px;
    right: 186px;
  }
  #following {
    position: relative;
    float: right;
    margin-right: 3px;
    letter-spacing: 1px;
    padding: 3px;
    font-size: 12px;
    top: 84px;
    color: #a9f113;
  }
}
@media (max-width: 360px) {
  #noted_person_room {
    position: relative;
    font-size: 12px;
    width: fit-content;
    color: #cbe5ce;
    float: left;
    top: 40px;
  }
  .fa_user {
    position: relative;
    float: left;
    top: 102px;
    right: 213px;
  }
  .fa_hourglass_start {
    position: relative;
    float: left;
    top: 105px;
    right: 150px;
  }
  #following {
    position: relative;
    float: right;
    margin-right: 3px;
    letter-spacing: 1px;
    padding: 3px;
    font-size: 12px;
    top: 85px;
    color: #a9f113;
  }
}
@media (max-width: 300px) {
  .fa_hourglass_start {
    position: relative;
    float: left;
    top: 84px;
    right: 150px;
  }
  #following {
    position: relative;
    float: right;
    margin-right: 3px;
    letter-spacing: 1px;
    padding: 3px;
    font-size: 12px;
    top: 66px;
    color: #a9f113;
  }
}
</style>
