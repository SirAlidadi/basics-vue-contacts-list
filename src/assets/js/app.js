Vue.createApp({
    data() {
        return {
            activePage: 'add',
            data: {},
            contacts: [
                {name: 'John', lastname: 'adamson', email: 'john@gmail.com', phone: '091000000'},
            ],
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
        },
        deleteUserHandler(phone) {
            this.contacts = this.contacts.filter(contact => contact.phone !== phone);
        }
    },
    computed: {
        filterContactHandler() {
            if(this.search === '') return;
            return this.contacts.filter(contact => contact.phone.includes(this.search));
        }
    }
}).mount('#app')
