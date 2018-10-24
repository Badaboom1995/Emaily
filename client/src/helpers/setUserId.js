

fire.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.displayName);
    } else {
        console.log('log out');
    }
})