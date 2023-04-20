<template>
  <div id="zoom_the_user_video">
    <img
      id="zoom_image_user"
      src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
      alt="person"
    />
    <label id="zoom_name_user">Peshawa Othman Rashid</label>
    <video id="zoom_video_user" src=""></video>
    <div
      style="
        position: absolute;
        left: 50%;
        top: 90%;
        width: inherit;
        height: auto;
        transform: translate(-50%, 0px);
      "
    >
      <font-awesome-icon
        @click="zoom_microphone"
        id="zoom_microphone"
        icon="fa-solid fa-microphone"
      />
      <font-awesome-icon
        @click="zoom_microphone_close"
        id="zoom_microphone_close"
        icon="fa-solid fa-microphone-slash"
      />
      <font-awesome-icon
        @click="zoom_video"
        id="zoom_video"
        icon="fa-solid fa-video"
      />
      <font-awesome-icon
        @click="zoom_video_close"
        id="zoom_video_close"
        icon="fa-solid fa-video-slash"
      />
      <font-awesome-icon
        @click="zoom_compress"
        id="zoom_compress"
        icon="fa-solid fa-compress"
      />
      <font-awesome-icon
        @click="zoom_expand"
        id="zoom_expand"
        icon="fa-solid fa-expand"
      />
    </div>
  </div>

  <!-- /////////////////////////////////////////////// -->
  <div id="card_shadow_person">
    <font-awesome-icon
      @click="button_other_room_close"
      id="button_other_room_close"
      icon="fa-solid fa-xmark"
    />
    <section v-for="item in test" :key="item">
      <div class="div_person_room">
        <img id="image_person_room" :src="item.image" alt="" />
        <label id="name_person_room" for="">{{ item.name }}</label>
        <font-awesome-icon id="fa_microphone" icon="fa-solid fa-video" />
        <p id="title_person_room" for="">{{ item.noted }}</p>
        <div id="div_icon_person_room">
          <font-awesome-icon style="color: #a9f113" icon="fa-solid fa-user" />
          <label style="color: #a9f113; margin-left: 5px" for="">{{
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
  </div>
  <div id="div_show_connection_room">
    <div id="div_video_room">
      <div id="the_container_video">
        <img id="image_person_number" src="" alt="person" />
        <label id="label_name_person_room"></label>
        <video
          id="info_video_person_number"
          autoplay
          playsinline
          src=""
        ></video>

        <font-awesome-icon
          @click="person_number_microphone(index)"
          :id="`person_number_microphone-${index}`"
          icon="fa-solid fa-microphone"
        />
        <font-awesome-icon
          @click="person_number_microphone_close(index)"
          :id="`person_number_microphone_close-${index}`"
          icon="fa-solid fa-microphone-slash"
        />
        <font-awesome-icon
          @click="person_number_video(index)"
          :id="`person_number_video-${index}`"
          icon="fa-solid fa-video"
        />
        <font-awesome-icon
          @click="person_number_video_close(index)"
          :id="`person_number_video_close-${index}`"
          icon="fa-solid fa-video-slash"
        />
        <font-awesome-icon
          @click="person_number_compress(index)"
          :id="`person_number_compress-${index}`"
          icon="fa-solid fa-compress"
        />
        <font-awesome-icon
          @click="person_number_expand(index)"
          :id="`person_number_expand-${index}`"
          icon="fa-solid fa-expand"
        />
      </div>
      <div id="the_container_video">
        <img id="image_person_number" src="" alt="person" />
        <label id="label_name_person_room"></label>
        <video
          id="info_video_person_number2"
          autoplay
          playsinline
          src=""
        ></video>

        <font-awesome-icon
          @click="person_number_microphone(index)"
          :id="`person_number_microphone-${index}`"
          icon="fa-solid fa-microphone"
        />
        <font-awesome-icon
          @click="person_number_microphone_close(index)"
          :id="`person_number_microphone_close-${index}`"
          icon="fa-solid fa-microphone-slash"
        />
        <font-awesome-icon
          @click="person_number_video(index)"
          :id="`person_number_video-${index}`"
          icon="fa-solid fa-video"
        />
        <font-awesome-icon
          @click="person_number_video_close(index)"
          :id="`person_number_video_close-${index}`"
          icon="fa-solid fa-video-slash"
        />
        <font-awesome-icon
          @click="person_number_compress(index)"
          :id="`person_number_compress-${index}`"
          icon="fa-solid fa-compress"
        />
        <font-awesome-icon
          @click="person_number_expand(index)"
          :id="`person_number_expand-${index}`"
          icon="fa-solid fa-expand"
        />
      </div>
    </div>
    <!-- <div v-for="item in test2" :key="item" id="div_person_data">
        <span id="user_follow">Follow</span>
        <img @click="user_image" id="user_image" :src="item.image" alt="" />
        <span id="user_number">{{ item.number }}</span>
        <div id="div_name">
          <span id="user_name">{{ item.name }}</span>
        </div>
      </div> -->
    <!-- <hr /> -->
    <br />
    <br />
    <br />
    <div v-for="item in test3" :key="item" id="div_person_data">
      <span style="left: 34px" id="user_follow">Follow</span>
      <img @click="user_ont_pick" id="user_image" :src="item.image" alt="All" />
      <!-- <span id="user_number">{{ item.number }}</span> -->
      <div id="div_name">
        <span id="user_name">{{ item.name }}</span>
      </div>
    </div>
    <hr />
    <div v-for="item in test3" :key="item" id="div_person_data">
      <!-- <span id="user_follow">Follow</span> -->
      <img @click="user_ont_pick" id="user_image" :src="item.image" alt="All" />
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
        @click="fa_compress_camera"
        id="fa_compress_camera"
        icon="fa-solid fa-video"
      />
      <font-awesome-icon
        @click="fa_expand_camera"
        id="fa_expand_camera"
        icon="fa-solid fa-video-slash"
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
      <font-awesome-icon
        @click="fa_room_open"
        id="fa_room_open"
        icon="fa-solid fa-box-open"
      />
    </div>
  </div>
  <div class="box_people">
    <div v-for="item in test2" :key="item" id="div_person_data">
      <!-- <span id="user_follow">Follow</span> -->
      <img
        @click="user_ont_pick_in_box"
        id="user_image"
        :src="item.image"
        alt="All"
      />
      <span id="user_number">{{ item.number }}</span>
      <div id="div_name">
        <span id="user_name">{{ item.name }}</span>
      </div>
    </div>
  </div>
  <div id="div_background" @click="div_background"></div>
  <div id="info_person">
    <font-awesome-icon
      @click="button_info_close"
      id="fa-xmark"
      icon="fa-solid fa-xmark"
    />
    <label id="info_follow">Follow</label>
    <img
      id="info_image"
      src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
      alt=""
    />
    <p id="info_name">Peshawa Othman Rashid</p>
    <div id="div_info_age">
      <span id="info_age">6</span>
      <span id="info_age_textD">Day</span>
      <span id="info_age">1</span>
      <span id="info_age_textM">Month</span>
      <span id="info_age">2000</span>
      <span id="info_age_textY">Year</span>
    </div>
    <div id="div_info_location">
      <h3>Countery: Kurdistan</h3>
      <h3>Language: Kurdy</h3>
    </div>
    <div id="div_info_text">
      Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy —
      writes, performs and records all of his own music.Ryan — the name taken by
      Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
      records all of his own music.
    </div>
    <div id="div_info_data">
      <font-awesome-icon
        @click="info_fa_microphone"
        id="info_fa_microphone"
        icon="fa-solid fa-microphone"
      />
      <font-awesome-icon
        @click="info_fa_microphone_slash"
        id="info_fa_microphone_slash"
        icon="fa-solid fa-microphone-slash"
      />
      <font-awesome-icon
        id="info_fa_right_from-bracket"
        icon="fa-solid fa-right-from-bracket"
      />
      <font-awesome-icon
        id="info_fa_right_to_bracket"
        icon="fa-solid fa-right-to-bracket"
      />
    </div>
  </div>
  <div
    @click="div_info_person_background"
    id="div_info_person_background"
  ></div>
</template>

<script>
import AgoraRTM from "agora-rtm-sdk";
export default {
  props: ["id"],
  setup(props) {
    let APP_ID = "5f65794758894bbe9587d0647847e740";

    let token = null;

    let client;
    let channel;

    let uid = String(Math.floor(Math.random() * 10000));

    let localStream;
    let remoteStream;
    let peerConnection;
    const servers = {
      lceServers: [
        {
          urls: [
            "stun:stun1.1.google.com:19302",
            "stun:stun2.1.google.com.19302",
          ],
        },
      ],
    };
    let init = async () => {
      client = await AgoraRTM.createInstance(APP_ID);
      await client.login({ uid, token });

      channel = client.createChannel(props.id);
      await channel.join();
      channel.on("MemberJoined", handleuserjoined);
      channel.on("MemberLeft", handleUserLeft);
      client.on("MessageFromPeer", handleMessageFromPeer);
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      document.getElementById("info_video_person_number").srcObject =
        localStream;
    };

    let handleUserLeft = () => {
      document.getElementById("info_video_person_number2").style.display =
        "none";
    };

    let handleMessageFromPeer = async (message, MemberId) => {
      message = JSON.parse(message.text);
      if (message.type === "offer") {
        createAnswer(MemberId, message.offer);
      }
      if (message.type === "answer") {
        addAnswer(message.answer);
      }
      if (message.type === "candidate") {
        if (peerConnection) {
          peerConnection.addIceCandidate(message.candidate);
        }
      }
    };

    let handleuserjoined = async (MemberId) => {
      console.log("A new user joined the channel", MemberId);
      createOffer(MemberId);
    };
    let createPeerConnection = async (MemberId) => {
      peerConnection = new RTCPeerConnection(servers);
      remoteStream = new MediaStream();
      document.getElementById("info_video_person_number2").srcObject =
        remoteStream;
      document.getElementById("info_video_person_number2").style.display =
        "block";
      if (!localStream) {
        localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        document.getElementById("info_video_person_number").srcObject =
          localStream;
      }

      localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
      });

      peerConnection.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track);
        });
      };
      peerConnection.onicecandidate = async (event) => {
        if (event.candidate) {
          client.sendMessageToPeer(
            {
              text: JSON.stringify({
                type: "candidate",
                candidate: event.candidate,
              }),
            },
            MemberId
          );
        }
      };
    };
    let createOffer = async (MemberId) => {
      await createPeerConnection(MemberId);
      let offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      client.sendMessageToPeer(
        { text: JSON.stringify({ type: "offer", offer: offer }) },
        MemberId
      );
    };

    let createAnswer = async (MemberId, offer) => {
      await createPeerConnection(MemberId);

      await peerConnection.setRemoteDescription(offer);
      let answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      client.sendMessageToPeer(
        { text: JSON.stringify({ type: "answer", answer: answer }) },
        MemberId
      );
    };
    let addAnswer = async (answer) => {
      if (!peerConnection.currentRemoteDescription) {
        peerConnection.setRemoteDescription(answer);
      }
    };
    let leaveChannel = async () => {
      await channel.leave();
      await client.logout();
    };

    let toggleCamera = async () => {
      let videoTrack = localStream
        .getTracks()
        .find((track) => track.kind === "video");
      if (videoTrack.enabled) {
        videoTrack.enabled = false;
      } else {
        videoTrack.enabled = true;
      }
    };

    let toggleMic = async () => {
      let audioTrack = localStream
        .getTracks()
        .find((track) => track.kind === "audio");
      if (audioTrack.enabled) {
        audioTrack.enabled = false;
      } else {
        audioTrack.enabled = true;
      }
    };

    window.addEventListener("beforeunload", leaveChannel);
    init();
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
      toggleMic();
      document.getElementById("fa-microphone-slash").style.display =
        "inline-table";
      document.getElementById("fa-microphone").style.display = "none";
    }
    function microphone_open() {
      toggleMic();
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
    function info_fa_microphone_slash() {
      document.getElementById("info_fa_microphone_slash").style.display =
        "none";
      document.getElementById("info_fa_microphone").style.display =
        "inline-table";
    }
    function info_fa_microphone() {
      document.getElementById("info_fa_microphone_slash").style.display =
        "inline-table";
      document.getElementById("info_fa_microphone").style.display = "none";
    }
    function div_info_person_background() {
      document.getElementById("div_info_person_background").style.display =
        "none";
      document.getElementById("info_person").style.left = "105%";
      document.getElementById("card_shadow_person").style.left = "-103%";
    }
    function button_info_close() {
      document.getElementById("div_info_person_background").style.display =
        "none";
      document.getElementById("info_person").style.left = "105%";
    }
    function user_image() {
      document.getElementById("div_info_person_background").style.display =
        "block";
      document.getElementById("info_person").style.left = "43%";
    }
    function user_ont_pick() {
      document.getElementById("div_info_person_background").style.display =
        "block";
      document.getElementById("info_person").style.left = "43%";
    }
    function user_ont_pick_in_box() {
      document.getElementById("div_info_person_background").style.display =
        "block";
      document.getElementById("info_person").style.left = "43%";
    }
    function fa_room_open() {
      document.getElementById("div_info_person_background").style.display =
        "block";
      document.getElementById("card_shadow_person").style.left = "1%";
    }
    function button_other_room_close() {
      document.getElementById("div_info_person_background").style.display =
        "none";
      document.getElementById("card_shadow_person").style.left = "-103%";
    }
    function person_number_microphone_close(index) {
      document.getElementById(
        `person_number_microphone_close-${index}`
      ).style.display = "none";
      document.getElementById(
        `person_number_microphone-${index}`
      ).style.display = "block";
    }
    function person_number_microphone(index) {
      document.getElementById(
        `person_number_microphone_close-${index}`
      ).style.display = "block";
      document.getElementById(
        `person_number_microphone-${index}`
      ).style.display = "none";
    }
    function person_number_video_close(index) {
      document.getElementById(
        `person_number_video_close-${index}`
      ).style.display = "none";
      document.getElementById(`person_number_video-${index}`).style.display =
        "block";
    }
    function person_number_video(index) {
      document.getElementById(
        `person_number_video_close-${index}`
      ).style.display = "block";
      document.getElementById(`person_number_video-${index}`).style.display =
        "none";
    }
    function person_number_compress(index) {
      document.getElementById(`person_number_expand-${index}`).style.display =
        "block";
      document.getElementById(`person_number_compress-${index}`).style.display =
        "none";
    }
    function person_number_expand(index) {
      document.getElementById(`person_number_expand-${index}`).style.display =
        "none";
      document.getElementById(`person_number_compress-${index}`).style.display =
        "block";
      document.getElementById("zoom_the_user_video").style.display = "block";
    }
    function zoom_compress() {
      document.getElementById("zoom_the_user_video").style.display = "none";
    }
    function fa_compress_camera() {
      toggleCamera();
      document.getElementById("fa_compress_camera").style.display = "none";
      document.getElementById("fa_expand_camera").style.display =
        "inline-table";
    }
    function fa_expand_camera() {
      toggleCamera();
      document.getElementById("fa_expand_camera").style.display = "none";
      document.getElementById("fa_compress_camera").style.display =
        "inline-table";
    }
    return {
      microphone_close,
      microphone_open,
      hand_close,
      hand_open,
      show_all_user,
      div_background,
      info_fa_microphone_slash,
      info_fa_microphone,
      div_info_person_background,
      button_info_close,
      user_image,
      user_ont_pick,
      user_ont_pick_in_box,
      fa_room_open,
      button_other_room_close,
      person_number_microphone_close,
      person_number_microphone,
      person_number_video_close,
      person_number_video,
      person_number_expand,
      person_number_compress,
      zoom_compress,
      fa_compress_camera,
      fa_expand_camera,
      test,
      test2,
      test3,
    };
  },
};
</script>

<style scoped lang="scss">
#zoom_the_user_video {
  display: none;
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0px);
  height: -webkit-fill-available;
  top: 0px;
  background: black;
  z-index: 5;
}
#zoom_image_user {
  position: absolute;
  width: 100px;
  cursor: pointer;
  height: 100px;
  bottom: 364px;
  left: 50%;
  transform: translate(-50%, 0px);
  border-radius: 60px;
}
#zoom_name_user {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0px);
  top: 311px;
  color: aliceblue;
  width: auto;
}
#zoom_video_user {
  position: absolute;
  border: 1px solid;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0px);
  height: 100%;
}
#zoom_microphone {
  position: initial;
  top: 550px;
  left: 50%;
  transform: translate(-50%, 0px);
  color: #bee900;
  cursor: pointer;
  font-size: 22px;
}
#zoom_microphone_close {
  display: none;
  font-size: 22px;
  position: initial;
  cursor: pointer;
  top: 550px;
  left: 50%;
  transform: translate(-50%, 0px);
  color: red;
}
#zoom_video {
  position: initial;
  top: 550px;
  left: 50%;
  transform: translate(-50%, 0px);
  color: #bee900;
  cursor: pointer;
  font-size: 22px;
  margin-left: 50px;
}
#zoom_video_close {
  display: none;
  font-size: 22px;
  position: initial;
  cursor: pointer;
  margin-left: 50px;
  top: 550px;
  left: 50%;
  transform: translate(-50%, 0px);
  color: red;
}
#zoom_compress {
  display: initial;
  font-size: 22px;
  position: initial;
  float: right;
  margin-right: 16px;
  cursor: pointer;
  color: #bee900;
}
#zoom_expand {
  display: none;
  font-size: 22px;
  position: initial;
  float: right;
  margin-right: 16px;
  cursor: pointer;
  color: red;
}
// //////////////////////////////////////////@at-root
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

#button_other_room_close {
  position: absolute;
  font-size: 24px;
  color: aliceblue;
  cursor: pointer;
  left: 242px;
  top: 8px;
  transition: color 0.5s;
}
#button_other_room_close:hover {
  color: red;
}

#card_shadow_person {
  overflow-y: scroll;
  height: 500px;
  position: fixed;
  padding-top: 35px;
  width: 281px;
  left: -103%;
  background: #10161c;
  box-shadow: 0px 0px 10px 0px black;
  z-index: 5;
  transition: left 0.6s;
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
  color: #a9f113;
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
  color: #a9f113;
  position: relative;
  top: 39px;
  right: 91px;
  font-size: smaller;
}
#time {
  color: #a9f113;
  font-size: small;
  position: relative;
  top: 24px;
  right: 32px;
}
#follow {
  color: #a9f113;
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
#fa_room_open {
  display: inline-table;
  width: 23px;
  position: relative;
  padding: 15px;
  font-size: x-large;
  cursor: pointer;
  color: rgb(55, 160, 55);
  border: 1px solid;
  margin-left: 80px;
  margin-bottom: 40px;
  border-radius: 35px;
  transition: color 0.5s;
}
#fa_room_open:hover {
  color: rgb(33, 230, 33);
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
  display: inline-table;
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
  display: none;
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
#fa_compress_camera {
  display: inline-table;
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
#fa_expand_camera {
  display: none;
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
  background: #00000038;
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
// ////////////////////////////////////////@at-root
#info_person {
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 5px;
  top: 9px;
  left: 103%;
  width: 56%;
  z-index: 5;
  height: 590px;
  background: #10161c;
  border: 1px solid;
  box-shadow: 0px 0px 8px 2px black;
  transition: left 1s;
}
#div_info_person_background {
  display: none;
  position: fixed;
  top: 0px;
  background: #00000038;
  width: 100%;
  height: 100%;

  z-index: 4;
  cursor: pointer;
}
#info_person::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

#info_person::-webkit-scrollbar-track {
  background-color: #0000007c;
}

#info_person::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
#info_image {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  left: 50%;
  top: 7px;
  transform: translate(-50%, 0px);
  cursor: pointer;
}
#fa-xmark {
  position: relative;
  font-size: xx-large;
  float: right;
  color: aliceblue;
  margin: 9px;
  cursor: pointer;
  transition: color 0.5s;
}
#fa-xmark:hover {
  color: rgb(240, 2, 2);
}
#info_follow {
  position: relative;
  top: 9px;
  float: left;
  left: 5px;
  font-size: smaller;
  padding: 5px;
  border-radius: 4px;
  color: aquamarine;
  letter-spacing: 1px;
  background: blueviolet;
  transition: all 0.5s;
  cursor: pointer;
}
#info_follow:hover {
  color: rgb(137, 243, 16);
  background: rgb(55, 38, 71);
}
#info_name {
  position: relative;
  top: 107px;
  letter-spacing: 1px;
  font-size: 12px;
  color: aliceblue;
}
#div_info_age {
  position: relative;
  top: 130px;
  font-size: medium;
  color: aliceblue;
  left: 56%;
  transform: translate(-50%, 0px);
}
#info_age {
  margin-left: 20px;
}

#info_age_textD {
  margin-right: 0px;
  position: relative;
  top: 23px;
  right: 20px;
  letter-spacing: 1px;
}
#info_age_textM {
  position: relative;
  top: 23px;
  right: 24px;
  letter-spacing: 1px;
}
#info_age_textY {
  position: relative;
  top: 23px;
  right: 33px;
  letter-spacing: 1px;
}
#div_info_location {
  position: relative;
  top: 185px;
  color: aliceblue;
  font-size: 16px;
  letter-spacing: 1px;
}
#div_info_text {
  position: relative;
  top: 220px;
  color: aliceblue;
  font-size: 14px;
  letter-spacing: 1px;
}
#div_info_data {
  position: relative;
  top: 297px;
}
#info_fa_microphone_slash {
  display: none;
  position: relative;
  font-size: x-large;
  border: 1px solid;
  width: 24px;
  color: red;
  padding: 10px;
  cursor: pointer;
  border-radius: 50px;
  transition: color 0.5s;
}
#info_fa_microphone {
  position: relative;
  font-size: x-large;
  border: 1px solid;
  width: 24px;
  color: chartreuse;
  padding: 10px;
  cursor: pointer;
  border-radius: 50px;
  transition: color 0.5s;
}
#info_fa_right_from-bracket {
  position: relative;
  font-size: x-large;
  border: 1px solid;
  width: 24px;
  color: #ff6d6a;
  padding: 10px;
  cursor: pointer;
  border-radius: 50px;
  transition: color 0.5s;
  margin-left: 25px;
}
#info_fa_right_to_bracket {
  position: relative;
  font-size: x-large;
  border: 1px solid;
  width: 24px;
  color: #ff6d6a;
  padding: 10px;
  cursor: pointer;
  border-radius: 50px;
  transition: color 0.5s;
  margin-left: 25px;
}
#info_fa_right_from-bracket:hover {
  color: #e90400;
}
#info_fa_right_to_bracket:hover {
  color: #bee900;
}
// ///////////////////////////////////////////////////@at-root
#div_video_room {
  position: relative;
  display: inline-table;
  margin-top: 0px;
}
[id^="the_container_video-"] {
  position: relative;
  display: inline-table;
  width: 500px;
  height: 300px;
  border: 1px solid;
}
#info_video_person_number {
  position: relative;
  width: inherit;
  height: inherit;
  border: 1px solid red;
}
#info_video_person_number2 {
  display: none;
  position: relative;
  width: inherit;
  height: inherit;
  border: 1px solid red;
}
#image_person_number {
  position: absolute;
  width: 60px;
  cursor: pointer;
  height: 60px;
  bottom: 164px;
  left: 44%;
  border-radius: 60px;
}
#label_name_person_room {
  position: absolute;
  top: 163px;
  left: 50%;
  width: inherit;
  transform: translate(-50%, 0px);
  color: aquamarine;
  font-size: 11px;
  letter-spacing: 1px;
}
[id^="person_number_microphone-"] {
  display: block;
  position: absolute;
  right: 94%;
  bottom: 15px;
  cursor: pointer;
  color: rgb(251, 255, 16);
  font-size: 21px;
}
[id^="person_number_microphone_close-"] {
  display: none;
  position: absolute;
  right: 93%;
  bottom: 15px;
  cursor: pointer;
  color: red;
  font-size: 21px;
}
[id^="person_number_video-"] {
  display: block;
  position: absolute;
  right: 85%;
  bottom: 15px;
  cursor: pointer;
  color: rgb(251, 255, 16);
  font-size: 21px;
}
[id^="person_number_video_close-"] {
  display: none;
  position: absolute;
  right: 85%;
  bottom: 15px;
  cursor: pointer;
  color: red;
  font-size: 21px;
}
[id^="person_number_compress-"] {
  display: none;
  position: absolute;
  right: 1%;
  bottom: 13px;
  cursor: pointer;
  color: rgb(251, 255, 16);
  font-size: 21px;
}
[id^="person_number_expand-"] {
  display: block;
  position: absolute;
  right: 1%;
  bottom: 13px;
  cursor: pointer;
  color: rgb(251, 255, 16);
  font-size: 21px;
}

@media (max-width: 1055px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 400px;
    height: 300px;
    border: 1px solid;
  }
  #image_person_number {
    position: absolute;
    width: 60px;
    height: 60px;
    cursor: pointer;
    bottom: 164px;
    left: 44%;
    border-radius: 60px;
  }
}
@media (max-width: 880px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 300px;
    height: 300px;
    border: 1px solid;
  }
  [id^="person_number_microphone-"] {
    position: absolute;
    right: 91%;
    bottom: 15px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 21px;
  }
  [id^="person_number_microphone_close-"] {
    position: absolute;
    right: 90%;
    bottom: 15px;
    cursor: pointer;
    color: red;
    font-size: 21px;
  }
  [id^="person_number_video-"] {
    display: block;
    position: absolute;
    right: 78%;
    bottom: 15px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 21px;
  }
  [id^="person_number_video_close-"] {
    display: none;
    position: absolute;
    right: 78%;
    bottom: 15px;
    cursor: pointer;
    color: red;
    font-size: 21px;
  }
  [id^="person_number_expand-"] {
    display: block;
    position: absolute;
    right: 2%;
    bottom: 13px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 21px;
  }
  [id^="person_number_compress-"] {
    display: none;
    position: absolute;
    right: 2%;
    bottom: 13px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 21px;
  }
}
@media (max-width: 660px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 249px;
    height: 224px;
    border: 1px solid;
  }
  #image_person_number {
    position: absolute;
    cursor: pointer;
    width: 60px;
    height: 60px;
    bottom: 110px;
    left: 41%;
    border-radius: 60px;
  }
  #label_name_person_room {
    position: absolute;
    top: 133px;
    width: inherit;
    left: 50%;
    transform: translate(-50%, 0px);
    color: aquamarine;
    font-size: 11px;
    letter-spacing: 1px;
  }
}
@media (max-width: 550px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 200px;
    height: 200px;
    border: 1px solid;
  }
  #image_person_number {
    position: absolute;
    width: 45px;
    height: 45px;
    bottom: 110px;
    cursor: pointer;
    left: 38%;
    border-radius: 60px;
  }
  #label_name_person_room {
    position: absolute;
    top: 108px;
    width: inherit;
    left: 50%;
    transform: translate(-50%, 0px);
    color: aquamarine;
    font-size: 9px;
    letter-spacing: 1px;
  }
  [id^="person_number_microphone-"] {
    position: absolute;
    right: 89%;
    bottom: 15px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 21px;
  }
  [id^="person_number_microphone_close-"] {
    position: absolute;
    right: 88%;
    bottom: 15px;
    cursor: pointer;
    color: red;
    font-size: 21px;
  }
  [id^="person_number_video-"] {
    display: block;
    position: absolute;
    right: 72%;
    bottom: 15px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 21px;
  }
  [id^="person_number_video_close-"] {
    display: none;
    position: absolute;
    right: 72%;
    bottom: 15px;
    cursor: pointer;
    color: red;
    font-size: 21px;
  }
}
////////////////////////////////////////////////////////////@at-root
@media (max-width: 500px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 218px;
    height: 208px;
    border: 1px solid;
  }
  // ////////////////////////////////////////////////////////@at-root
  #card_shadow_person {
    overflow-y: scroll;
    height: 500px;
    position: fixed;
    padding-top: 35px;
    width: 281px;
    left: -103%;
    background: #10161c;
    box-shadow: 0px 0px 10px 0px black;
    z-index: 5;
    transition: left 1s;
  }
  #fa-hand_fa-microphone {
    position: relative;
    margin-top: 40px;
    left: 50%;
    transform: translate(-50%, 0px);
  }
  #fa_room_open {
    display: inline-table;
    width: 14px;
    position: relative;
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    color: rgb(55, 160, 55);
    border: 1px solid;
    margin-left: 25px;
    margin-bottom: 40px;
    border-radius: 35px;
    transition: color 0.5s;
  }
  #fa_room_open:hover {
    color: rgb(33, 230, 33);
  }
  #fa-hand {
    display: none;
    width: 14px;
    position: relative;
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    color: yellowgreen;
    border: 1px solid;
    margin-bottom: 40px;
    border-radius: 35px;
  }
  #fa-hand-close {
    display: inline-table;
    width: 14px;
    position: relative;
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    color: red;
    border: 1px solid;
    margin-bottom: 40px;
    border-radius: 35px;
  }
  #fa-microphone {
    display: none;
    width: 14px;
    position: relative;
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    color: yellowgreen;
    border: 1px solid;
    margin-right: 25px;
    margin-bottom: 40px;
    border-radius: 35px;
  }
  #fa-microphone-slash {
    display: inline-table;
    width: 14px;
    position: relative;
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    color: red;
    border: 1px solid;
    margin-right: 25px;
    margin-bottom: 40px;
    border-radius: 35px;
  }
  #fa_compress_camera {
    display: inline-table;
    width: 14px;
    position: relative;
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    color: yellowgreen;
    border: 1px solid;
    margin-right: 25px;
    margin-bottom: 40px;
    border-radius: 35px;
  }
  #fa_expand_camera {
    display: none;
    width: 14px;
    position: relative;
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    color: red;
    border: 1px solid;
    margin-right: 25px;
    margin-bottom: 40px;
    border-radius: 35px;
  }
  // ///////////////////////////////////////////@at-root
  #info_person {
    position: fixed;
    overflow-x: hidden;
    overflow-y: hidden;
    top: 9px;
    left: 103%;
    width: 56%;
    z-index: 5;
    border-radius: 5px;
    height: 465px;
    background: #10161c;
    border: 1px solid;
    box-shadow: 0px 0px 8px 2px black;
    transition: left 1s;
  }
  #info_image {
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 40px;
    left: 50%;
    top: 7px;
    transform: translate(-50%, 0px);
    cursor: pointer;
  }
  #fa-xmark {
    position: relative;
    font-size: 24px;
    float: right;
    color: aliceblue;
    margin: 9px;
    cursor: pointer;
    transition: color 0.5s;
  }
  #fa-xmark:hover {
    color: rgb(240, 2, 2);
  }
  #info_follow {
    position: relative;
    top: 9px;
    float: left;
    left: 5px;
    font-size: 9px;
    padding: 5px;
    border-radius: 4px;
    color: aquamarine;
    letter-spacing: 1px;
    background: blueviolet;
    transition: all 0.5s;
    cursor: pointer;
  }
  #info_follow:hover {
    color: rgb(137, 243, 16);
    background: rgb(55, 38, 71);
  }
  #info_name {
    position: relative;
    top: 65px;
    letter-spacing: 1px;
    font-size: 9px;
    color: aliceblue;
  }
  #div_info_age {
    position: relative;
    top: 77px;
    font-size: 10px;
    color: aliceblue;
    left: 50%;
    transform: translate(-50%, 0px);
  }
  #info_age {
    margin-left: 20px;
  }

  #info_age_textD {
    margin-right: 0px;
    position: relative;
    top: 23px;
    right: 13px;
    letter-spacing: 1px;
  }
  #info_age_textM {
    position: relative;
    top: 23px;
    right: 20px;
    letter-spacing: 1px;
  }
  #info_age_textY {
    position: relative;
    top: 23px;
    right: 24px;
    letter-spacing: 1px;
  }
  #div_info_location {
    position: relative;
    top: 128px;
    color: aliceblue;
    font-size: 9px;
    letter-spacing: 1px;
  }
  #div_info_text {
    position: relative;
    top: 138px;
    color: aliceblue;
    font-size: 12px;
    letter-spacing: 1px;
  }
  #div_info_data {
    position: relative;
    top: 179px;
  }
  #info_fa_microphone_slash {
    display: none;
    position: relative;
    font-size: 17px;
    border: 1px solid;
    width: 17px;
    color: red;
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;
    transition: color 0.5s;
  }
  #info_fa_microphone {
    position: relative;
    font-size: 17px;
    border: 1px solid;
    width: 17px;
    color: chartreuse;
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;
    transition: color 0.5s;
  }
  #info_fa_right_from-bracket {
    position: relative;
    font-size: 17px;
    border: 1px solid;
    width: 17px;
    color: #ff6d6a;
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;
    transition: color 0.5s;
    margin-left: 25px;
  }
  #info_fa_right_to_bracket {
    position: relative;
    font-size: 17px;
    border: 1px solid;
    width: 17px;
    color: #ff6d6a;
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;
    transition: color 0.5s;
    margin-left: 25px;
  }
  #info_fa_right_from-bracket:hover {
    color: #e90400;
  }
}
@media (max-width: 473px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 199px;
    height: 208px;
    border: 1px solid;
  }
}
@media (max-width: 434px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 175px;
    height: 208px;
    border: 1px solid;
  }
}

@media (max-width: 388px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 155px;
    height: 208px;
    border: 1px solid;
  }
  [id^="person_number_microphone-"] {
    position: absolute;
    right: 86%;
    bottom: 15px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 18px;
  }
  [id^="person_number_microphone_close-"] {
    position: absolute;
    right: 84%;
    bottom: 15px;
    cursor: pointer;
    color: red;
    font-size: 18px;
  }
  [id^="person_number_video-"] {
    display: block;
    position: absolute;
    right: 66%;
    bottom: 15px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 19px;
  }
  [id^="person_number_video_close-"] {
    display: none;
    position: absolute;
    right: 66%;
    bottom: 15px;
    cursor: pointer;
    color: red;
    font-size: 19px;
  }
  [id^="person_number_expand-"] {
    display: block;
    position: absolute;
    right: 3%;
    bottom: 12px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 19px;
  }
  [id^="person_number_compress-"] {
    display: none;
    position: absolute;
    right: 3%;
    bottom: 12px;
    cursor: pointer;
    color: rgb(251, 255, 16);
    font-size: 19px;
  }
}
@media (max-width: 349px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 130px;
    height: 208px;
    border: 1px solid;
  }
  #image_person_number {
    position: absolute;
    width: 45px;
    height: 45px;
    bottom: 110px;
    left: 33%;
    cursor: pointer;
    border-radius: 60px;
  }
}
@media (max-width: 297px) {
  [id^="the_container_video-"] {
    position: relative;
    display: inline-table;
    width: 115px;
    height: 195px;
    border: 1px solid;
  }
  #label_name_person_room {
    position: absolute;
    top: 102px;
    width: inherit;
    left: 50%;
    transform: translate(-50%, 0px);
    color: aquamarine;
    font-size: 8px;
    letter-spacing: 1px;
  }
}
</style>
