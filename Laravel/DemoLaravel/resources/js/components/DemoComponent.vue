<template>
  <div>
    <h2>Xin chao toi la Cong ANh</h2>
    <h3>{{message}}</h3>
    Sinh vien : {{student.name}}
    <button v-on:click = "click()">Click type 1</button>
    <button v-on:click = "click_name(student.name)">Click type 1</button>
    {{name_student()}}
    Name sinh : {{tinhnamsinh}}

  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Xin Chaoooo HIHI!",
      student : {
          name : "NCA",
          age : 23
      }
    };
  },
  methods : {
      click : function () {
          alert(1);
      },
      click_name(name) {
          alert("Name"+name)
      },
      name_student(){
          return "Xin chao ban: "+this.student.name;
      }
  },
  computed : {
    tinhnamsinh(){
      return (2021 - this.student.age)
    }
  }
};
</script>