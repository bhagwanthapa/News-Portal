// Define a new component called todo-item
var newsSiteList = Vue.component('news-site-list', {
    name:'news-site-list',
    template: '#news-site-list',
    data(){
        return {
            newsSiteList:[],
        }
    },
    created(){
        var self = this;
        getAjax('http://meronetwork.ddns.net:8081/api/site', function(response){
            self.newsSiteList = JSON.parse(response).data.links; 
        });
    }
});