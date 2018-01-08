
https://hidden-crag-31172.herokuapp.com/


## 功能
#### 登入
- 取得某使用者資料
- 修改某使用者資料
- 取得課程目錄列表
#### 目錄-課程
- 取得 全部課程
- 取得 某個課程
- 新增 目錄課程
- 修改 某目錄課程
- 刪除 某目錄課程
#### 課程-單元列表
- 取得全部 課程單元 列表
- 新增某 課程單元
- 修改某 課程單元
- 刪除某 課程單元
#### 課程單元-討論
- 取得 課程單元 留言列表
- 修改 課程單元 留言
- 刪除 課程單元 留言
#### 筆記
- 取得 目錄課程 所有筆記內容
- 取得 課程單元 所有筆記內容
- 取得 個人筆記 所有筆記內容
- 修改 個人筆記 選定筆記內容
- 刪除 個人筆記 選定筆記內容

#### 課程紀錄
- 完成的課綱
    - 完成課程
- 未完成的課綱
    - 未完成的課程   
##### 課程留言評分
##### 課綱簡評

| 	Route  			| HTTP Verb | Description   |
| -------- 			| --------  | --------       |
| /login/google  	| GET       | 使用google登入   |
| /users/           | GET       | 取得 "使用者" 資料 |
| /users/:userId    | GET       | 取得 "某使用者" 資料 |
| /users/:userId	| PUT		| 修改 "某使用者" 資料 |
| /courses          | POST      | 新增 "目錄-課程" 資料 |
| /courses          | GET       | 取得 "某目錄-課程" 資料 |
| /courses/:courseId		| PUT		| 修改 "某目錄-課程" 資料 |
| /courses/:courseId		| DELETE	| 刪除 "某目錄-課程" 資料 |
| /courses/:courseId/lesson    | GET       | 取得 某目錄-課程 所有 "課程單元" 資料|
| /courses/:courseId/lesson    | POST      | 新增 某目錄-課程  "課程單元" 資料|
| /courses/:courseId/lesson/:lessonId |PUT | 修改 某目錄-課程 某一"課程單元"資料|
| /courses/:courseId/lesson/:lessonId |DELETE| 刪除  某目錄-課程 某一"課程單元"資料|
| /courses/:courseId/complete    | POST       | 完成學習某堂課綱|
| /courses/:courseId/learing     | PUT        | 學習中的課綱|

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
	"complete": [CID1,CID2,CID3],
	"learning": [CID3,CID4]
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

## API

### 登入
POST `/login`

#### Request
```json
{
  "username": (string),
  "password": (string)
}
```
#### Response
-	`200 (ok)`
user object
-	`400 (err)`
login error

### 取得某使用者資料
GET `/users/:useId`

#### Request
none
#### Response
-	`200(OK)`
user object

### 修改某使用者資料
PUT `/users/:useId`

#### Request
```json
{
  "userName": (string),
  "password": (string),
  "gender": (string f, m, o),
  "status": {
	"education": (string),
	"info": (string)
  }
}
```
#### Response
-	`200(OK)`
user object

### 取得全部課程
GET `/courses`

#### Request
none
#### Response
-	`200(OK)`
Courses object array
