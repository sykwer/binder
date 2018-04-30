## Binder | record your reading history with thinking note.
- Binder is web service that aims at satisfying users' needs for comfortably recording their thinkings and impressions after reading books and making them blog posts.
- 10/2017 to 12/2017 in service. At this point of time (27/4/2018), not running on production.
- Reason for closing service is that core users in the initial phase did not have strong needs for continuously publishing their thinkings and impressions after reading books. I should have made minimum product for checking core needs assumed users have.

## Screenshots
### mobile
<img src="https://user-images.githubusercontent.com/18254663/39428005-d77fa7aa-4cc0-11e8-85e9-d71b7c0640ed.png" alt="Drawing" height="400"/> <img src="https://user-images.githubusercontent.com/18254663/39427372-736ea600-4cbe-11e8-9071-7f63f4442d79.png" alt="Drawing" height="400"/> <img src="https://user-images.githubusercontent.com/18254663/39427312-49651e0c-4cbe-11e8-8a78-f3d119a8629d.png" alt="Drawing" height="400"/>

## desktop (profile page)
<img src="https://user-images.githubusercontent.com/18254663/39427351-66972a60-4cbe-11e8-9c52-b6a4b928711d.png" alt="Drawing" height="400"/>

## desktop (Medium-like editor)
<img src="https://user-images.githubusercontent.com/18254663/39427333-5c65fb2a-4cbe-11e8-9924-efa5f74d6a96.png" alt="Drawing" height="400"/>


## How to run in development
```
(after mysql/redis server activated)
$ git clone https://github.com/sykwer/binder.git
$ cd binder
$ yarn install
$ bundle
$ bundle exec rails db:create
$ bundle exec rails db:migrate
$ ./bin/webpack-dev-server
$ bundle exec rails s
```
