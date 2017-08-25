Notification example:

```js
notifs = [
    {
        id:'1',
        header:'test',
        description:'description'
    },
    {
        id:'2',
        header:'another notif',
        description:'another description'
    }

];

function notifClickHandler(notif){
    alert(JSON.stringify(notif));
}
<Notification 
    notifications={notifs}
    onNotifClick={notifClickHandler}></Notification>

```