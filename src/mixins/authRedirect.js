export default {
    beforeCreate() {
        if (!localStorage.tournament) {
            this.$router.push("/login");
        }
    }
}