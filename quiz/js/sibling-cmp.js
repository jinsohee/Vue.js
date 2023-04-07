
Vue.component('siblingcmp',{
    props:['propsdata'],
    template:'<p>{{propsdata}}</p>'
})

Vue.component('child-cmp',{
    props:['propsdata'],
    template:'<p>{{propsdata}}</p>'
})


var app = new Vue({
    el:'#app',
    data:{
        message:'Hello, passed from Parent Component',
        anotermsg:'ampter message'
    
    
    }

})