# CMS Headless

## Dependecies and Tools
-  REACT JS
-  NODE JS
-  EXPRESS
-  MySQL

This project consists of two main folders: `Frontend` and `backend`, each of which needs to be run separately.

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
    Create a MySQL database named cms-headless.

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

## Functionalities added

1. **Tables View**
2. **Pagination**
3. **Handled Edge cases in backend as well as in frontend**
4. **Toast Messages to User**

## Screenshots
1. Creating User
![alt text](./screenshots/createModal.png)

2. Created Sucessfully
![alt text](./screenshots/image.png)

3. Validations
![alt text](./screenshots/validation1.png)

![alt text](./screenshots/validation2.png)

![alt text](./screenshots/validation3.png)

4. Editing
![alt text](./screenshots/editModal.png)

![alt text](./screenshots/editSucess.png)

5. Deleting
![alt text](./screenshots/askDelete.png)

![alt text](./screenshots/sucessDelete.png)

6. Showing error of duplicate email or phone number
![alt text](./screenshots/duplicateEmail.png)

![alt text](./screenshots/duplicatePhone.png)

7. Pagination with 10 items in first page
![alt text](./screenshots/adding11th.png)

![alt text](./screenshots/pagination1.png)

![alt text](./screenshots/pagination2.png)

### Api responses

1. Create
![alt text](./screenshots/api_photos/create.png)

![alt text](./screenshots/api_photos/emailunique.png)

![alt text](./screenshots/api_photos/phoneUnique.png)

![alt text](./screenshots/api_photos/fields%20Empty.png)

2. Get
![alt text](./screenshots/api_photos/get.png)

3. Update
![alt text](./screenshots/api_photos/editSucess.png)

![alt text](./screenshots/api_photos/editFailed.png)

![alt text](./screenshots/api_photos/editfailed2.png)

4. Delete
![alt text](./screenshots/api_photos/fieldToBeDeleted.png)

![alt text](./screenshots/api_photos/deleteSucess.png)

![alt text](./screenshots/api_photos/DeleteError.png)

