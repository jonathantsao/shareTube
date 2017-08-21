# Schema

## users
column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
username | string | not null, indexed, unique
email | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique

## videos
column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
title | string | not null
description | string | not null
video_url | string | not null
views | integer | not null
user_id | integer | not null, foreign key, indexed

## comments
column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
body | description | not null
user_id | integer | not null, foreign, indexed
video_id | integer | not null, foreign, indexed

## likes
column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
user_id | integer | not null, foreign, indexed
item_id | integer | not null, foreign, indexed
