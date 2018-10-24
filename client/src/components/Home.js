import React from 'react';
import { connect } from 'react-redux';
import { fire, googleAuthProvider } from '../firebase/firebase'



class Home extends React.Component { 
    state = {
        userChecked: false,
        isSignedIn: ''
    }
    componentDidMount(){
        {
            fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState(() => ({
                        userChecked: true,
                        isSignedIn: true
                    }))
                } else {
                    this.setState(() => ({
                        userChecked: true,
                        isSignedIn: false
                    }))
                }
            })
        }
    }
    startLogin = () => {
        fire.auth().signInWithPopup(googleAuthProvider).then(function(result) {
            // const token = result.credential.accessToken;
            const googleUser = result.user;
            const databaseRefUsers = fire.database().ref('users');

            databaseRefUsers.once('value').then((snapshot) => {
                let existingUsers = []
                snapshot.forEach((childSnapshot) => {
                    const user = {
                        id: childSnapshot.key,
                        name: childSnapshot.val().name
                    }
                    existingUsers = [
                        ...existingUsers,
                        user
                    ]
                })
                console.log(existingUsers, googleUser.uid)
                const UserExists = existingUsers.filter((user) => {
                    return user.id == googleUser.uid;
                })

                if (!UserExists.length) {
                    const user = {
                        googleID: result.user.uid,
                        name: result.user.displayName
                    };
                    console.log('error');
                    databaseRefUsers.child(result.user.uid).set({name : result.user.displayName});
                }
            });
          }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
          });
    }
    startLogout = () => {
        fire.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
    render(){
        return(
            <div className='login-screen'>
                {this.state.userChecked ?
                <div className="login-screen__wrapper">
                    {this.state.isSignedIn ? <p className='login-screen__title'>Выйти из учетной записи</p> : <p className='login-screen__title'>Зарегистрироваться/Войти</p>}
                    <div className="login-screen__buttons">
                    {this.state.isSignedIn ?
                        <div className = 'login-screen__buttons-item'>
                            <button className='login-screen__sign-out-button' onClick = {this.startLogout}>Sign out</button>
                        </div> 
                    : 
                        <button className='login-screen__sign-in-button' onClick = {this.startLogin}><span className='login-screen__google-icon'><img src="./images/google-plus.svg" alt=""/></span>Sign in with google</button>
                    }
                        
                        
                    </div>
                 </div>
                 :
                  <div className="login-screen__loading"><img src="./images/loading.gif" alt=""/></div>}
                
               
            </div>
        )
    }
   
}


const mapStateToProps = state => ({
    user: state.auth
  });

export default connect(mapStateToProps)(Home);
