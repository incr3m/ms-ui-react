Login example:

```js
function test(username,password){
    fetch('http://localhost:1350/website/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      alert('A name was submitted: ' + JSON.stringify(responseJson));
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}
<Login onLogin={test} ></Login>
```