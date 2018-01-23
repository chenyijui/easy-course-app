easy-course-app
===
https://hidden-crag-31172.herokuapp.com/


## 功能
#### 登入
- 取得某使用者資料
- 修改某使用者資料
#### 目錄-課綱
- 取得 全部課綱
- 取得 某個課綱
- 新增 課綱
- 修改 某課綱
- 刪除 某課綱
#### 課綱-課程單元
- 取得全部 課程單元
- 新增某 課程單元
- 修改某 課程單元
- 刪除某 課程單元
#### 課程單元-討論
- 取得 課程單元 留言列表
- 修改 課程單元 留言
- 刪除 課程單元 留言
#### 筆記
- 取得 課綱     所有筆記內容
- 取得 課程單元 所有筆記內容
- 取得 個人筆記 所有筆記內容
- 修改 個人筆記 選定筆記內容
- 刪除 個人筆記 選定筆記內容

#### 課程紀錄
- 完成的課綱
    - 完成課程
- 未完成的課綱
    - 未完成的課程   
##### 課程評分
##### 課綱簡評

| 	Route  			| HTTP Verb | Description   |
| -------- 			| --------  | --------       |
| /auth/signin       | POST      | 使用者驗證 登入   |
| /auth/signup      | POST      | 使用者 註冊      |
| /info    | GET       | 取得某使用者資料 |
| /users/:userId	| PUT		| 修改某使用者資料 |
| /courses          | POST      | 取得全部課綱 |
| /courses/:courseId        | GET       | 取得 某個課綱|
| /courses/:courseId		| PUT		| 修改 某個課綱|
| /courses/:courseId		| DELETE	| 刪除 某課綱 |
| /courses/:courseId/lessons    | GET       | 取得全部 課程單元|
|/courses/:courseId/lessons    | POST      | 新增某 課程單元|
| /courses/:courseId/lessons/:lessonId |PUT | 修改 某課綱 某一"課程單元"資料|
| /courses/:courseId/lessons/:lessonId |DELETE| 刪除 某課程單元|
| /courses/:courseId/complete    | GET       | 完成的課綱|
| /courses/:courseId/learning     | GET        | 學習中的課綱|
| /complete    | GET        | 取得某使用者完成的課綱|
| /learing    | GET        | 取得某使用者學習中的課綱|

## Data Model

### UsersProfile
```
{
  "uid": (string),
  "googleid": (string),
  "name": (string),
  "username": (string),
  "password": (string),
  "position": (string),
  "gender": (string f, m, o),
  "email": (string),
  "picaddr": (string),
  "education": (string),
  "introduction": (string),
  "role": (string),
  "status": {
          complete: {
            courseid: [ c_id ],
            lessonid: [ cls_id ]
        },
        learning: {
            courseid: [ c_id ],
            lessonid: [ cls_id ]
        }
  },
  "timestamp": '2017-06-16T06:25:08+00:00'
}
```
### Courses
```
{
  "c_id": (string),
  "c_name": (string),
  "c_img": (string),
  "c_video"{
      "v_id" : (string),
      "v_name" : (string),
      "v_url" : (string)
  },
  "c_brief": (String),
  "c_teacher": (string),
  "c_college": (string),
  "c_department": (string),
  "c_classes": [{
      "cls_id": (string),
      "cls_name": (string),
      "cls_content": (string),
      "cls_url": (string),
      "cls_img": (string),
      "cls_comment": [{
          "uid": (string),
          "content": (string)
      }],
      "cls_timestamp": ''
   }],
  "c_timestamp": '2017-06-16T06:25:08+00:00'
}
```
### example of course
```
{
  "c_id": 1,
  "c_name": Software Engineering,
  "c_img": https:XXXXXXX.jpg,
  "c_video"{
      "v_id" : 1,
      "v_name" : 'What is SE',
      "v_url" : 'https://youtubeXXXXX.com'
  },
  "c_brief": 'Software Engineering is the application of engineering to the development of software in a systematic method.',
  "c_teacher": 'Jian Hung Chen',
  "c_college": 'NCNU',
  "c_department": 'Information Management',
  "c_classes": [{
      "cls_id": 1,
      "cls_number": 1,
      "cls_name": 'SE class 1',
      "cls_content": 'Introduction of SE',
      "cls_url": 'https://youtubeDXXXXXXXX.com',
      "cls_img": 'https://WEFWEFEW.jpg'
      "cls_timestamp": '2017.156165XXXXXXXX'
   },
   {
      "cls_id": 2,
      "cls_number": 2,
      "cls_name": 'SE class 2',
      "cls_content": 'Implement of SE',
      "cls_url": 'https://youtubeDXXXXXXXX.com',
      "cls_img": 'https://WEFWEFEW.jpg',
      "cls_timestamp": '2017.156165XXXXXXXX'
   }],
  "c_timestamp": '2017-06-16T06:25:08+00:00'
}
```


### Notes
```
catalog:note,rating
{
    "nid": (string),
    "catalog" (string),
    "author": (string),
    "course": (string),
    "class": (string),
    "content": (string),
    "score": (number)
}
```

# API
## 使用者
### 登入
POST `/auth/signin`

#### Request
```
{
  "username": (string),
  "password": (string)
}
```
#### Response
-	`200 (ok)`
jeson object
    ```
    {message: "signing successfully"}
    ```
-	`500 (err)`
jeson object
    ```
    {message: "username or password error"}
    ```
### 註冊
POST `/auth/signup`

#### Request
```
{
    "username": "",
    "password": "",
    "gender": "",
    "email":"",
    "picadder": "",
    "education": "",
    "introduction": ""
}
```
#### Response
-	`200 (ok)`
jeson object
    ```
    {message: "signup successfully"}
    ```
-	`500 (err)`
jeson object
    ```
    {message: "username or password error"}
    ```

### 取得某使用者資料
GET `/info`

#### Request
none
#### Response
-	`200(OK)`
user object

    ```
    {
      "uid": (string),
      "googleid": (string),
      "name": (string),
      "username": (string),
      "password": (string),
      "position": (string),
      "gender": (string f, m, o),
      "email": (string),
      "picaddr": (string),
      "education": (string),
      "introduction": (string),
      "role": (string),
      "status": {
              complete: {
                courseid: [ c_id ],
                lessonid: [ cls_id ]
            },
            learning: {
                courseid: [ c_id ],
                lessonid: [ cls_id ]
            }
      },
      "timestamp": '2017-06-16T06:25:08+00:00'
    }
    ```

### 修改某使用者資料
PUT `/users/:useId`

#### Request
```
{
  "name": "Tomato",
  "password": "12345678",
  "position": (string),
  "gender": (string f, m, o),
  "email": (string),
  "picaddr": (string),
  "education": (string),
  "introduction": (string)
}
```

#### Response
-	`200(OK)`
user object
- `500(err)`
jeson object
    ```
    {message: "Could not update user with id 'user_id' "}
    ```

## 課綱
### 取得全部課綱
GET `/courses`

#### Request
none
#### Response
-	`200(OK)`
Courses object array
- `500(err)`
jeson object
    ```
    {"message" "Some error"}
    ```
### 取得 某個課綱

GET `/courses/:courseId`

#### Request
none
#### Response
- `200(OK)`
Courses object
    ```
    {
      "c_id": (string),
      "c_name": (string),
      "c_img": (string),
      "c_video"{
          "v_id" : (string),
          "v_name" : (string),
          "v_url" : (string)
      },
      "c_brief": (String),
      "c_teacher": (string),
      "c_college": (string),
      "c_department": (string),
      "c_classes": [{
          "cls_id": (string),
          "cls_name": (string),
          "cls_content": (string),
          "cls_url": (string),
          "cls_img": (string),
          "cls_comment": [{
              "uid": (string),
              "content": (string)
          }],
          "cls_timestamp": ''
       }],
      "c_timestamp": '2017-06-16T06:25:08+00:00'
    }
    ```
- `500(err)`
jeson object
    ```
    {"message" "Some error"}
    ```
### 修改 某個課綱

PUT `/courses/:courseId`

#### Request
```
{
  "c_name": (string),
  "c_img": (string),
  "c_video"{
      "v_name" : (string),
      "v_url" : (string)
      },
  "c_brief": (String),
  "c_teacher": (string),
  "c_college": (string),
  "c_department": (string)
}
```

#### Response
- `200(OK)`
Courses object
- `500(err)`
jeson bject
    ```
     {"message":"Could not update course with userId}
    ```

### 刪除 某課綱
DELETE `/courses/:courseId`
#### Request
none
#### Response
- `200(OK)`
jeson object
    ```
    {message: "User deleted successfully!"}
    ```

- `500(err)`
jeson object
    ```
    {"message":"Could not update course with userId "}
    ```

## 課綱-課程單元
### 取得全部 課程單元
GET `/courses/:courseId/lessons`
#### Request
none
#### Response
- `200(OK)`
lessons Array
    ```
    [{
      "cls_id": (string),
      "cls_name": (string),
      "cls_content": (string),
      "cls_url": (string),
      "cls_img": (string),
      "cls_comment": [{
          "uid": (string),
          "content": (string)
        }]
     }
    ...]
    ```


- `500(err)`
jeson object
    ```
    {message: "Some error"}
    ```
 ### 新增某 課程單元
 POST  `/courses/:courseId/lessons`
 #### Request
 none
 #### Response
 - `200(OK)`
 lessons object
     ```
     {
        cls_name : (String),
        cls_content : (String),
        cls_url : (String),
        cls_img : (String)

     }
     ```

- `500(err)`
jeson object
    ```
    {message: "Could not creat lesson with courseID" }
    ```



### 修改某 課程單元
 PUT  `/courses/:courseId/lessons/:lessonId`
#### Resquest
```
 {
    cls_name : (String),
    cls_content : (String),
    cls_url : (String),
    cls_img : (String)

 }
 ```
#### Response
 - `200(OK)`
 lesson object
 - `500(OK)`
 jeson object
     ```
     {message: "Could not update lesson with lessonId"}
     ```
### 刪除 某課程單元
DELETE `/courses/:courseId/lessons/:lessonId`
#### Resquest
none
#### Response
 - `200(OK)`
 jeson object
    ```
    {message: "User deleted successfully!"}
    ```
 - `500(OK)`
 jeson object
     ```
     {message: "Could not update lesson with lessonId"}
     ```
## 課程紀錄
### 完成的課綱
GET `/courses/:courseId/complete`
#### Resquest
none
#### Response
- `200(OK)`
jeson object
    ```
    {message: "completed Course" }
    ```
- `500(OK)`
jeson object
    ```
    {message: "Could not save complete course with courseId"}
    ```
### 學習中的課綱
GET `/courses/:courseId/learning`
#### Resquest
none
#### Response
- `200(OK)`
jeson object
    ```
     {message: "learning Course" }
    ```
- `500(OK)`
jeson object
    ```
    {message: "Could not save learning course with courseId"}
    ```
### 取得某使用者完成的課綱
GET `complete`
#### Resquest
none
#### Response
- `200(OK)`
complete Array
    ```
    complete: [{
                  "c_id": (string),
                  ...
                  ...
                  ...
                  ...
                  ...
                }...]
    ```
- `500(err)`
jeson object
    ```
    {message: "Can't find complete a Course"}
    ```
### 取得某使用者學習中的課綱
GET `learing`
#### Resquest
none
#### Response
- `200(OK)`
complete Array
    ```
    learing: [{
                  "c_id": (string),
                  ...
                  ...
                  ...
                  ...
                  ...
                }...]
    ```
- `500(err)`
jeson object
    ```
    {message: "Can't find learing a Course"}
    ```
