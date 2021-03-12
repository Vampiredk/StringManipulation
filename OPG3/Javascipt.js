Vue.createApp({
    data() {
        return {
            name: null,
            message: null,
            ToUpper: null,
            ToLower: null
        }
    },
    methods:{
        NameChange(name){
            if (name)
            {
                this.message = name

                this.ToUpper = name.toUpperCase()

                this.ToLower = name.toLowerCase()
            }
            else
                this.message = "Hello no name"
        }
    }
}).mount("#app")