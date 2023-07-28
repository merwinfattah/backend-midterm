# backend-midterm

# Database Structure
The project utilizes MongoDB as the database and consists of three collections: products, comments, and videos. Below are the schemas for each collection:

# Products Collection Schema
* Titlte
* Price
* URL
* video ID

# Comments Collection Schema
* Username
* Comment Message
* Timestamp
* video ID

# Videos Collection Schema
* Thumbnail
* URL (youtube)

# API Structure
The project's API is built using Express.js and provides the following routes for interacting with the collections:

# GET /api/videos
This endpoint retrieves all videos from the 'videos' collection.

# GET /api/products/:videoId
This endpoint retrieves products associated with a specific 'videoId' from the 'products' collection.

# GET /api/comments/:videoId
This endpoint retrieves comments associated with a specific 'videoId' from the 'comments' collection.

# POST /api/comments
This endpoint allows the creation of a new comment in the 'comments' collection. It expects the following data in the request body: 'username', 'comment', and 'video_id'.

# API Request and Response Format
* Video object
```
{
  _id: string
  thumbnail: string
  url: string
}
```
* Comment object
```
{
  _id: string
  username: string
  comment: string
  timestamp: datetime(iso 8601)
  video_id: string
}
```
* Product object
```
{
  _id: string
  title: string
  price: string
  url: string
  video_id: string
}
```

**GET /videos**
----
  Returns all videos in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```



**GET /comments/:videoId**
----
  Returns the specified user.
* **URL Params**  
  *Required:* `videoId=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
    {
      comments: [
               {<comment_object>},
               {<comment_object>},
               {<comment_object>}
             ]
    }
  ```
**POST /comments**
----
  Creates a new comment and returns the new object.
* **URL Params**  
  None
* **Data Params**  
```
  {
    username: string
    comment: string
    video_id: string
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <comment_object> }` 

**GET /products/:videoId**
----
  Returns the specified user.
* **URL Params**  
  *Required:* `videoId=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
    {
      products: [
               {<product_object>},
               {<product_object>},
               {<product_object>}
             ]
    }
  ```

# How to Run In Local
* Clone repository
* Run command
```
npm install
```
* Create .env file and make variabel for (makesure you already prepared the database):
**DATABASE_URL**,
**PORT**
* Run command
```
npm start
```

