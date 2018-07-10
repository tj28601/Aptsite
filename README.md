# README
![Build Status](https://codeship.com/projects/c8882dc0-fe33-0135-2759-12381a098dca/status?branch=master)
 [![Code Climate](https://codeclimate.com/github/tj28601/Aptsite/badges/gpa.svg)](https://codeclimate.com/github/tj28601/Aptsite)
 [![Coverage Status](https://coveralls.io/repos/github/tj28601/Aptsite/badge.png?branch=master)](https://coveralls.io/github/tj28601/Aptsite?branch=master)

# App Overview

 Aptsite is a responsive web application for property management firms that facilitates advertisement & dialogue with prospective clients. Admins are able to perform CRUD operations for their apartment listings and apartment photos via Rails forms. This application allows users to contact an admin with Sengrid, create their own lists of Favorites, and schedule an appointment with an admin via the Calendly API.

# My use of the Google Maps API --

 The Google Map visible on each apartment show page is rendered with react-google-maps. In contrast, the Google Map on a User’s Favorites page is displayed with vanilla Javascript (for this particular map,  Ruby object data is accessed within JS via the gon gem to display each favorite location and address).

# In order to optimally run Aptsite, you will need the following:

Google Maps (Javascript) API Key
Calendly API Key
Amazon Web Services S3 Bucket for file storage
PostgreSQL

 Enjoy!

# Ruby Version
* Ruby v 2.3.3
* Rails v 5.1.5

# Installation
```
bundle install
npm install
rake db:create
rake db:migrate
```
Navigate to http://localhost:3000 to run this application locally on machine.

View a demo of Aptsite on heroku @ https://connaughton-aptsite.herokuapp.com/.

# Test Suite
```

rake db:test:prepare
rspec spec
npm test
```
