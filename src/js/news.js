// Define a new component called todo-item
var mainNewsList = Vue.component('main-news-list', {
    name:'main-news-list',
    template: '#main-news-list',
    props:['searchQuery'],
    data(){
        return {
            newsSetList:[],
        }
    },
    created(){
        var self = this;
        getAjax('http://meronetwork.ddns.net:8081/api/news', function(response){
            self.newsSetList = JSON.parse(response).data; 
        });
    }
});