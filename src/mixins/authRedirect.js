export default {
    created() {
        if (!localStorage.username && !localStorage.code) {
            this.$router.push("/login");
        }
    }
}