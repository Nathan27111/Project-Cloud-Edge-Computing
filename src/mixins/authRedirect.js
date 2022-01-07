export default {
    created() {
        if (!localStorage.tournament) {
            this.$router.push("/login");
        }
    }
}