import auth0 from 'auth0-js';

export default class Auth{
    accessToken;
    ifToken;
    expiresAt;

    auth0 = new auth0.WebAuth({
        domain: 'rycom.auth0.com',
        clientID: 'J-E513a4SMPadmmAgxRA7zZS3fXvnsE7',
        redirectUri: 'http://localhost:3000/callback',
        responseType : 'token id_token',
        scope : 'openid'
    });

    constructor(){
        this.login =this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication =this.handleAuthentication.bind(this);
        this.isAuthenticated =this.isAuthenticated (this);
        this.getAccessToken =this.getAccessToken (this);
        this.getAccessToken =this.getAccessToken (this);
        this.renewSession =this.renewSession (this);
    }

    login(){
        this.auth0.authorize();
    }

    handleAuthentication(){
        this.auth0.parseHash((err, results)=>{
            if(results &&results.accessToken && results.idToken){
                this.setSession(results);
            } else if(err){
                history.replace('/dashboard');

            }
        });
    }

    getAccessToken() {
        return this.accessToken;
    }

    getIdToken() {
        return this.idToken;
    }

    setSession(results){
        localStorage.setItem('LoggedIn', 'true');

        let expiresAt =(results.expiresIn *1000)+ new Date().getDate();
        
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = expiresAt;

    // navigate to the home route
        history.replace('/dashboard');
    }

    renewSession(){
        this.auth0.checkSession({}, (err, results)=>{
            if(results && results.accessToken && results.idToken){
                this.setSession(results);
            }else if(err){
                this.logout();
            }
        });
    }

    logout(){
        this.accessToken=null;
        this.idToken=null;
        this.expiresAt=0;

        localStorage.removeItem('LoggedIn')
        history.replace('/login');
    }

    isAuthenticated(){
        let expiresAt=this.expiresAt;
        return new Date().getTime() < expiresAt;
    }


}