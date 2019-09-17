![VendorLink logo](https://i.imgur.com/MfmLwn3.png "VendorLink")

Meet & hire amazing talent from our invite-only community of elite web developers, designers, and marketers.

### Codebase
#### Technologies
Here is a list of all the big technologies we use:
- **Express.js**: API webserver
- **Next.js**: Frontend Next.js app
- **Stripe**: for E-commerce functionality

#### Folder structure
```sh
vendorlink/
├── api/           # API server
├── client/        # Frontend Next.js app
```

# To Do
- [x] Add Google Analytics
- [x] Add PostgreSQL database
- [ ] Add user authentication
  - [ ] Create User model: [Link](https://stackoverflow.com/questions/34120548/using-bcrypt-with-sequelize-model)
  - [ ] Create Authorization Helper Function: [Link](https://dev.to/jolvera/user-authentication-with-nextjs-4023#authorization-helper-function)
  - [ ] Choose unique key to return from backend as cookie token
- [ ] Implement one vote per vendor per user
- [x] Implement vendor sorting based on rank number
- [ ] Add "previous work" and "reviews" sliders on vendor page
- [ ] Finish implementing vendor contact feature "custom-quote"
- [ ] Add vendor dashboard with ability to purchase promoted ranks
- [ ] Add Lazy Loading for FontAwesome and images: [Link](https://github.com/twobin/react-lazyload)