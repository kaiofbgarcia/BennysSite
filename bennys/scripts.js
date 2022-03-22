var products = [
    {
        "photo": "img/buccaneer.png",
        "name": "Buccaneer",
        "price": 29000,
        "active": false,
    },
    {
        "photo": "img/primo.png",
        "name": "Primo",
        "price": 9000,
        "active": false,
    },
    {
        "photo": "img/faction.jpg",
        "name": "Faction",
        "price": 36000,
        "active": false,
    }
];

const SelfServiceMachine = {
    data() {
        return {
            products: window.products,
            orderTotal: 0
        }
    },
    methods: {
        toggleActive: function(item){
            item.active = !item.active;
        },
        total: function(){
            var total = 0;
            this.products.forEach(function(item){
                if (item.active){
                    total+= item.price;
                }
            });
           return total.toFixed(2);
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');