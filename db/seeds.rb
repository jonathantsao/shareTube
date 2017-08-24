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

thumbnail = File.open("../../../seeds/missing.png")

file1 = File.open("../../../seeds/vball.MOV")
video1 = Video.create!(title: "Volleyball", description: "fun", views: 20, user_id: user1.id, video: file1, thumbnail: thumbnail)

file2 = File.open("../../../seeds/life.mp4")
video2 = Video.create!(title: "Cute Cousin", description: "interesting", views: 40, user_id: user1.id, video: file2, thumbnail: thumbnail)

file3 = File.open("../../../seeds/v6.mp4")
video3 = Video.create!(title: "what", description: "cool", views: 2120, user_id: user2.id, video: file3, thumbnail: thumbnail)

file4 = File.open("../../../seeds/video.mov")
video4 = Video.create!(title: "old video", description: "test", views: 2, user_id: user3.id, video: file4, thumbnail: thumbnail)

file5 = File.open("../../../seeds/volleyball1.mov")
video5 = Video.create!(title: "Volleyball Again", description: "again..", views: 12452, user_id: user2.id, video: file5, thumbnail: thumbnail)

file6 = File.open("../../../seeds/biology.mp4")
video6 = Video.create!(title: "Biology Fun", description: "k..", views: 1252, user_id: user2.id, video: file6, thumbnail: thumbnail)

file7 = File.open("../../../seeds/seaworld.mp4")
video7 = Video.create!(title: "Seaworld", description: "sea animal", views: 12452, user_id: user3.id, video: file7, thumbnail: thumbnail)

file8 = File.open("../../../seeds/fireworks.mp4")
video8 = Video.create!(title: "Fireworks", description: "again..", views: 122, user_id: user1.id, video: file8, thumbnail: thumbnail)
