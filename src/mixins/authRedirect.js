export default {
    created() {
        if (!localStorage.username) {
            this.$router.push("/login");
        }
    }
}