# CMS Headless

## Dependecies and Tools
-  REACT JS
-  NODE JS
-  EXPRESS
-  MySQL


It has 2 folders Frontend and backend both needs to be run separately below are the deatils given for it

## Setup Instructions

Follow these steps to set up the project:

1. **Clone the Repository:**

   ```bash
   git clone <repository_url>
   cd cms-headless

   ```

## Starting Backend (will run on http://localhost:3000/)

#### **Install Dependencies:**

```bash
npm i
```

####  **Database Configuration:**
    Create a MySQL database named irctc_db.

```bash
npx sequelize db:create
```

####  **Database Migration:**

```bash
npx sequelize db:migrate
```

#### **Run the Application:**

```bash

npm start

```

#### **API Endpoints**

/user (POST): Add a new user.

/user (GET): Get all user details

/user/:id (PUT): Edit the particular user detail.

/user/:id (DELETE): Delete the particular user.


## Starting Frontend (will run on http://localhost:5173/)

#### **Install Dependencies:**

```bash
npm i
```

#### **Run the Application:**

```bash

npm run dev

```