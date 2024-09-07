# Setting up envs


the file is in 3 sections postman, github and stripe

## GitHub
To start create a github oauth app [click here, u do need a gituhb account](https://github.com/settings/developers) with the link http://localhost:3000 if you are running locally or use the vercel url if u are depolying to them, then set the callback url to http://localhost:3000/api/auth/callback/github or for vercel urapp.vercel.app/api/auth/callback/github (replace urapp with actual link that u used at the start and make sure it satrts with https:// 
Then scroll down to Client ID copy urs then put in the GITHUB_CLIENT_ID= section in ur .env file. Generate a client secret then copy it into GITHUB_CLIENT_SECRET= section in .env then go to  <https://github.com/settings/tokens/new> enter ur password then make a token with all repo permission set the expiry to something appropriate then copy put in GITHUB_ACCESS_TOKEN= in your .env. 

## PostMan - u need ur own domain for this and email set up for it - i use icloud mail cause i have icould plus 
1.  Go to <https://account.postmarkapp.com/sign_up> and sign upfor a account
2. Next after u have done this go <https://account.postmarkapp.com/signature_domains> and set up ur domain and add the DNS records required.
3. Next after that go to <https://account.postmarkapp.com/servers> and set up a server
4. Click templates then add one, use the code ur own template and don't use a layout, click edit make sure ur are under html insert this (make sure the delete the rest of the code) 
``` html 
<!DOCTYPE html>
<html>
  <head>
    <style>
    @import url(https://fonts.bunny.net/css?family=poppins:400);
    
      body {
        font-family: 'Poppins', Arial, sans-serif;
        background-color: #f4f4f7;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
      }
      .email-wrapper {
        width: 100%;
        background-color: #f4f4f7;
        padding: 20px;
      }
      .email-content {
        max-width: 600px;
        background-color: #ffffff;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
      }
      .email-header {
        text-align: center;
        padding-bottom: 20px;
      }
      .email-body {
        font-size: 16px;
        color: #333333;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        background-color: #4caf50; /* A different color for activation */
        color: #ffffff;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #777777;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-content">
        <div class="email-header">
          <h1>Activate Your {{product_name}} Account</h1>
        </div>
        <div class="email-body">
          <p>Hi there,</p>
          <p>Welcome to {{product_name}}! To complete your registration, please activate your account by clicking the button below:</p>
          <p>
            <a href="{{action_url}}" class="button">Activate Your Account</a>
          </p>
          <p>If you did not sign up for an account, you can disregard this email.</p>
          <p>Thank you!</p>
        </div>
        <div class="footer">
          <p>&copy; {{year}} {{product_name}}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </body>
</html>

```

5. Change the name to activate your account and the subject to Activate your taxonomy account
6. Press save then there should be an id this is ur POSTMARK_ACTIVATION_TEMPLATE= so add it too that line in the .env file
7. Next create a new template, the same you did last time with the name tax-verify-email  and subject to Taxonomy verify your email, then go to edit then html paste this code in
``` html
<!DOCTYPE html>
<html>
  <head>
    <style>
    @import url(https://fonts.bunny.net/css?family=poppins:400);
    
      body {
        font-family: 'Poppins', Arial, sans-serif;
        background-color: #f4f4f7;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
      }
      .email-wrapper {
        width: 100%;
        background-color: #f4f4f7;
        padding: 20px;
      }
      .email-content {
        max-width: 600px;
        background-color: #ffffff;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
      }
      .email-header {
        text-align: center;
        padding-bottom: 20px;
      }
      .email-body {
        font-size: 16px;
        color: #333333;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        background-color: #3869d4;
        color: #ffffff;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #777777;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-content">
        <div class="email-header">
          <h1>{{product_name}}</h1>
        </div>
        <div class="email-body">
          <p>Hello,</p>
          <p>
            Please click the button below to verify your email and sign in to
            {{product_name}}.
          </p>
          <p>
            <a href="{{action_url}}" class="button">Verify Your Email</a>
          </p>
          <p>If you did not request this email, you can safely ignore it.</p>
          <p>Thank you!</p>
        </div>
        <div class="footer">
          <p>&copy; 2024 {{product_name}}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </body>
</html>

```
8.  Press save and ur .env file go to POSTMARK_SIGN_IN_TEMPLATE= and put ur’s  id in there
9. Go to the homepage of ur postmark server and in ur .env SMTP_FROM= set to the email ur verifed earlier 
10. In postmark click pai tokens then copy it and in the .env put it in the POSTMARK_API_TOKEN= section
11. Note. until request a non test app, the button is at the top of page ( whis can take 24hrs) and fill the form in, you cant send emails to anyother domain than ur own until ur account is verified,  only get to send 100 emails free every month so keep that in mind.
## Database 
1. Go to ur preferred prostege sql provider - i use neon 
2. Get a database url and copy it into in the .env file line 19 replace ururlhere with the actcual url and make sure it has the password in it.
3. Next run `npx prisma mirgate && npx prisma db push` and u should be set up
## Stripe 
**coming soon**
