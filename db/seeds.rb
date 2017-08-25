# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user1 = User.create!(username: "demo@demo.com", password: "password")
user2 = User.create!(username: "othertest", password: "password")
user3 = User.create!(username: "jonathantsao", password: "password")

Video.destroy_all

video1 = Video.create!(title: "Volleyball", description: "fun", views: 20, user_id: user1.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/volleyball1.mov")

video2 = Video.create!(title: "Cute Cousin", description: "interesting", views: 40, user_id: user1.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/life.mp4")

video3 = Video.create!(title: "what", description: "cool", views: 2120, user_id: user2.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/video.mov")

video4 = Video.create!(title: "old video", description: "test", views: 2, user_id: user3.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/v6.mp4")

video5 = Video.create!(title: "Volleyball Again", description: "again..", views: 12452, user_id: user2.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/vball.MOV")

video6 = Video.create!(title: "Biology Fun", description: "k..", views: 1252, user_id: user2.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/biology.mp4")

video7 = Video.create!(title: "Seaworld", description: "sea animal", views: 12452, user_id: user3.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/seaworld.mp4")

video8 = Video.create!(title: "Soap Bubbles..", description: "what..", views: 12, user_id: user3.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/soap.mp4")

video8 = Video.create!(title: "Earth Video", description: "I love nature so much..", views: 122, user_id: user2.id, video_url: "https://s3.us-east-2.amazonaws.com/sharetube-pro/earth.mp4")
