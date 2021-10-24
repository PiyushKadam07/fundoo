import { Service } from '../../service/Service';

export default {
    name: "Account",
    data() {
      return {
        profileMenu: false,
        user: {
          email: "",
          firstName: "",
          lastName: "",
        },
      };
    },
    methods: {
      profile() {
        if (this.profileMenu) {
          this.profileMenu = false;
        } else {
            var userArr = JSON.parse(localStorage.getItem("Login"));
            // console.log(userArr.id);
            Service.getmethod('/users/user_detail/' + userArr.id)
            .then((data) => {
                // console.log(data); 
                this.user.email = data.data.email;
                this.user.firstName = data.data.firstName;
                this.user.lastName = data.data.lastName;
                this.profileMenu = true;

            })
            .catch((err) => {
                console.log(err)
            })
        }
      },
      logout() {
        localStorage.removeItem("Login");
        this.$router.push("/signin");
      },
    },
  };