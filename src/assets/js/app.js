Vue.createApp({
    data() {
        return {
            activePage: 'add',
            data: {},
            contacts: [],
            search: ''
        }
    },
    methods: {
        changePage(page) {
            this.activePage = page
        },
        addUserHandler() {
            this.contacts.push(this.data);
            this.data = {};
        }
    },
    computed: {
        filterContactHandler() {
            if(this.search === '') return;
            return this.contacts.filter(contact => contact.phone.includes(this.search));
        }
    }
}).mount('#app')
