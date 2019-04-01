# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all
Review.destroy_all

User.create(email: "username@gmail.com", first_name: "Demo", last_name: "User", password: "password",
latitude: 40.751369, longitude: -73.983927)

User.create(email: "null1139@gmail.com", first_name: "Kevin", last_name: "Smith", password: "password", latitude: 40.774615,
longitude: -73.780564)

User.create(email: "reviewer1@gmail.com", first_name: "Mao", last_name: "Asada", password: "password",
latitude: 40.751369, longitude: -73.983927)

User.create(email: "reviewer2@gmail.com", first_name: "James", last_name: "Bond", password: "password",
latitude: 40.751369, longitude: -73.983927)

User.create(email: "reviewer3@gmail.com", first_name: "Sam", last_name: "West", password: "password", latitude: 40.751369,
longitude: -73.983927)

User.create(email: "reviewer4@gmail.com", first_name: "Yuna", last_name: "Kim", password: "password", latitude: 40.751369,
longitude: -73.983927)

User.all.each do |user|
    user.assign_avatar
end

madangsui = Business.create(name: "MADANGSUI", cuisine: "Korean",
latitude: 40.749872, longitude: -73.985612,
address: "35 W 35th St, New York, NY 10001",
phone_number: "(212) 564-9333", website: "madangsui.com")

madangsui.photos.attach(io: File.open("app/assets/images/business/Madangsui/1.jpg"),
                        filename: "1.jpg")
madangsui.photos.attach(io: File.open("app/assets/images/business/Madangsui/2.jpg"),
                        filename: "2.jpg")
madangsui.photos.attach(io: File.open("app/assets/images/business/Madangsui/3.jpg"),
                        filename: "3.jpg")

hahm_ji_bach = Business.create(name: "Hahm Ji Bach", cuisine: "Korean",
latitude: 40.763089, longitude: -73.814947,
address: "40-11 149th Pl, Flushing, NY 11354",
phone_number: "(718) 460-9289", website: "hahmjibach.com")

hahm_ji_bach.photos.attach(io: File.open("app/assets/images/business/Hahm_Ji_Bach/1.jpg"),
                        filename: "1.jpg")
hahm_ji_bach.photos.attach(io: File.open("app/assets/images/business/Hahm_Ji_Bach/2.jpg"),
                        filename: "2.jpg")
hahm_ji_bach.photos.attach(io: File.open("app/assets/images/business/Hahm_Ji_Bach/3.jpg"),
                        filename: "3.jpg")

bcd_tofu_house = Business.create(name: "BCD Tofu House", cuisine: "Korean",
latitude: 40.747529, longitude: -73.986106,
address: "5 W 32nd St, New York, NY 10001",
phone_number: "(212) 967-1900", website: "bcdtofu.com")

bcd_tofu_house.photos.attach(io: File.open("app/assets/images/business/BCD_Tofu_house/1.jpg"),
                        filename: "1.jpg")
bcd_tofu_house.photos.attach(io: File.open("app/assets/images/business/BCD_Tofu_house/2.jpg"),
                        filename: "2.jpg")
bcd_tofu_house.photos.attach(io: File.open("app/assets/images/business/BCD_Tofu_house/3.jpg"),
                        filename: "3.jpg")

ichiran = Business.create(name: "ICHIRAN Midtown West", cuisine: "Japanese",
latitude: 40.748303, longitude: -73.990516,
address: "132 W 31st St, New York, NY 10001",
phone_number: "(212) 465-0701", website: "ichiranusa.com")

ichiran.photos.attach(io: File.open("app/assets/images/business/Ichiran_Midtown_west/1.jpg"),
                        filename: "1.jpg")
ichiran.photos.attach(io: File.open("app/assets/images/business/Ichiran_Midtown_west/2.jpg"),
                        filename: "2.jpg")
ichiran.photos.attach(io: File.open("app/assets/images/business/Ichiran_Midtown_west/3.jpg"),
                        filename: "3.jpg")

sushi_village = Business.create(name: "Sushi Village", cuisine: "Japanese",
latitude: 40.767610, longitude: -73.791034,
address: "3250 Francis Lewis Blvd, Flushing, NY 11358",
phone_number: "(718) 886-4733", website: "sushivillageflushing.com")

sushi_village.photos.attach(io: File.open("app/assets/images/business/Sushi_Village/1.jpg"),
                        filename: "1.jpg")
sushi_village.photos.attach(io: File.open("app/assets/images/business/Sushi_Village/2.jpg"),
                        filename: "2.jpg")
sushi_village.photos.attach(io: File.open("app/assets/images/business/Sushi_Village/3.jpg"),
                        filename: "3.jpg")

otafuku = Business.create(name: "Otafuku x Medetai", cuisine: "Japanese",
latitude: 40.729589, longitude: -73.988479,
address: "220 E 9th St, New York, NY 10003",
phone_number: "(646) 998-3438", website: "otafukuny.com")

otafuku.photos.attach(io: File.open("app/assets/images/business/Otafuku/1.jpg"),
                        filename: "1.jpg")
otafuku.photos.attach(io: File.open("app/assets/images/business/Otafuku/2.jpg"),
                        filename: "2.jpg")
otafuku.photos.attach(io: File.open("app/assets/images/business/Otafuku/3.jpg"),
                        filename: "3.jpg")

rai_rai_ken = Business.create(name: "Rai Rai Ken", cuisine: "Japanese",
latitude: 40.729213, longitude: -73.985740,
address: "218 E 10th St, New York, NY 10003",
phone_number: "(212) 477-7030", website: "rairaiken-ny.com")

rai_rai_ken.photos.attach(io: File.open("app/assets/images/business/Rai_Rai_Ken/1.jpg"),
                        filename: "1.jpg")
rai_rai_ken.photos.attach(io: File.open("app/assets/images/business/Rai_Rai_Ken/2.jpg"),
                        filename: "2.jpg")
rai_rai_ken.photos.attach(io: File.open("app/assets/images/business/Rai_Rai_Ken/3.jpg"),
                        filename: "3.jpg")

tim_ho_wan = Business.create(name: "Tim Ho Wan", cuisine: "Chinese",
latitude: 40.731294, longitude: -73.990143,
address: "85 4th Ave, New York, NY 10003",
phone_number: "(212) 228-2800", website: "timhowanusa.com")

tim_ho_wan.photos.attach(io: File.open("app/assets/images/business/Tim_ho_wan/1.jpg"),
                        filename: "1.jpg")
tim_ho_wan.photos.attach(io: File.open("app/assets/images/business/Tim_ho_wan/2.jpg"),
                        filename: "2.jpg")
tim_ho_wan.photos.attach(io: File.open("app/assets/images/business/Tim_ho_wan/3.jpg"),
                        filename: "3.jpg")


joong_koog_jip = Business.create(name: "Joong Koog Jip", cuisine: "Chinese",
latitude: 40.757469, longitude: -73.779488,
address: "203-16 Northern Blvd, Bayside, NY 11361",
phone_number: "(718) 428-2221", website: "joongkoogjip.com")

joong_koog_jip.photos.attach(io: File.open("app/assets/images/business/Joong_Koog_jip/1.jpg"),
                        filename: "1.jpg")
joong_koog_jip.photos.attach(io: File.open("app/assets/images/business/Joong_Koog_jip/2.jpg"),
                        filename: "2.jpg")
joong_koog_jip.photos.attach(io: File.open("app/assets/images/business/Joong_Koog_jip/3.jpg"),
                        filename: "3.jpg")

cafe_china = Business.create(name: "Cafe China", cuisine: "Chinese",
latitude: 40.750040, longitude: -73.982176,
address: "13 E 37th St, New York, NY 10016",
phone_number: "(212) 213-2810", website: "cafechinanyc.com")

cafe_china.photos.attach(io: File.open("app/assets/images/business/cafe_china/1.jpg"),
                        filename: "1.jpg")
cafe_china.photos.attach(io: File.open("app/assets/images/business/cafe_china/2.jpg"),
                        filename: "2.jpg")
cafe_china.photos.attach(io: File.open("app/assets/images/business/cafe_china/3.jpg"),
                        filename: "3.jpg")

red_house = Business.create(name: "Red House", cuisine: "Chinese",
latitude: 40.733213, longitude: -73.986545,
address: "203 E 14th St, New York, NY 10003",
phone_number: "(212) 228-8288", website: "orderredhouse14th.com")

red_house.photos.attach(io: File.open("app/assets/images/business/red_house/1.jpg"),
                        filename: "1.jpg")
red_house.photos.attach(io: File.open("app/assets/images/business/red_house/2.jpg"),
                        filename: "2.jpg")
red_house.photos.attach(io: File.open("app/assets/images/business/red_house/3.jpg"),
                        filename: "3.jpg")

bean_square = Business.create(name: "Bean Square", cuisine: "Coffee",
latitude: 40.759723, longitude: -73.772462,
address: "210-21 Northern Blvd, Bayside, NY 11360",
phone_number: "(718) 423-8083", website: "beansquare.com")

bean_square.photos.attach(io: File.open("app/assets/images/business/bean_square/1.jpg"),
                        filename: "1.jpg")
bean_square.photos.attach(io: File.open("app/assets/images/business/bean_square/2.jpg"),
                        filename: "2.jpg")
bean_square.photos.attach(io: File.open("app/assets/images/business/bean_square/3.jpg"),
                        filename: "3.jpg")

masala_box = Business.create(name: "Masala Box", cuisine: "Indian",
latitude: 40.762452, longitude: -73.770741,
address: "42-02 Bell Blvd, Flushing, NY 11361",
phone_number: "(718) 281-2699", website: "themasalabox.com")

masala_box.photos.attach(io: File.open("app/assets/images/business/masala_box/1.jpg"),
                        filename: "1.jpg")
masala_box.photos.attach(io: File.open("app/assets/images/business/masala_box/2.jpg"),
                        filename: "2.jpg")
masala_box.photos.attach(io: File.open("app/assets/images/business/masala_box/3.jpg"),
                        filename: "3.jpg")

mint_masala = Business.create(name: "Mint Masala", cuisine: "Indian",
latitude: 40.729530, longitude: -74.001143,
address: "95 Macdougal St, New York, NY 10012",
phone_number: "(212) 777-2888", website: "masalamac.com")

mint_masala.photos.attach(io: File.open("app/assets/images/business/mint_masala/1.jpg"),
                        filename: "1.jpg")
mint_masala.photos.attach(io: File.open("app/assets/images/business/mint_masala/2.jpg"),
                        filename: "2.jpg")
mint_masala.photos.attach(io: File.open("app/assets/images/business/mint_masala/3.jpg"),
                        filename: "3.jpg")

joy_curry = Business.create(name: "Joy Curry & Tandoor", cuisine: "Indian",
latitude: 40.752205, longitude: -73.984023,
address: "32 W 39th St, New York, NY 10018",
phone_number: "(646) 559-7527", website: "joycurry.net")

joy_curry.photos.attach(io: File.open("app/assets/images/business/joy_curry/1.jpg"),
                        filename: "1.jpg")
joy_curry.photos.attach(io: File.open("app/assets/images/business/joy_curry/2.jpg"),
                        filename: "2.jpg")
joy_curry.photos.attach(io: File.open("app/assets/images/business/joy_curry/3.jpg"),
                        filename: "3.jpg")
