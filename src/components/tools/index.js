import Vue from 'vue';
import MessageBox from './MessageBox';

export const messageBox=((opts)=>{
    const MyComponents=Vue.extend(MessageBox);

    const defaults={
        title:"",
        content:"",
        cancel:"",
        ok:"",
        handleCancel:null,
        handleOk:null
    }

    return (opts)=>{
        for(var attr in opts){
            defaults[attr]=opts[attr]
        }

        const vm=new MyComponents({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el)
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el)
                }
            }
        })

        document.body.appendChild(vm.$el);
    }
})()