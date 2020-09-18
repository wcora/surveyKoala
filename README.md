# SurveyKoala
#### Author: Cora Wang
Last Update: Sep 2020

Full-stack web app sending out surveys with ```React``` &amp; ```Redux``` as the frontend server & state management as well as ```Node.js``` & ```Express``` as the backend server. ```MongoDB``` is used to store the basic user data.

Major dependencies used:

```passport``` - for identity authorization.

```passport-google-oauth20``` - for google oauth

```cookie-session``` - for storing user identity through cookies

```stripe``` - for credit card payment

```send-grid``` - for email sending API

```mongoose``` - for database connection

```express``` - as our main web server

```lodash``` - for syntactical simplification

```url, body-parser``` - for cleaning up messy json response and parsing url from API calls

```axios``` - for client-side HTTP request

#### Demo
![Demo](./demo/demo.gif)

The app is available at [SurveyKoala](https://surveykoala.herokuapp.com) for demonstration purpose.

#### Usage
* To walk through the process, login with your google account, use 4242 4242 4242 4242 as your credit card number and pass through any future dates & number as your payment expiration date and security code. I used the test version of Stripe API which won't really charge any money. 

* Because this is a fun personal side project for me, the email address I listed as the sender's email is currently my personal email account. 
Therefore, please do not send tons of junk emails to abuse this feature. Or simply watch the demo above to learn how it works!
