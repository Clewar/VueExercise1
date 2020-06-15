new Vue({
    el: '#exercise',
    data: {
        name: 'Isaí',
        age: '23',
        link: 'https://cdn.discordapp.com/attachments/198538179249176576/721258232504385576/Hematite1-0-3.png',
        inputDefaultValue: 'Hello'
    },
    methods: {
        randomFloat: function(){
            return Math.random();
        }
    },
});