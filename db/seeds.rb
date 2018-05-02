# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'factory_bot'
#
# FactoryBot.define do
#   factory :user do
#     sequence(:user_name) { |n| "user#{n}"}
#     sequence(:email) {|n| "user#{n}@example.com" }
#     password 'password'
#     password_confirmation 'password'
#     role 'member'
#   end
# end
# henryk = FactoryBot.create(:user, role: "admin")
# jascha = FactoryBot.create(:user)
# mstislav = FactoryBot.create(:user)
# user123 = FactoryBot.create(user_name: "bob", role: "admin", email: "clown@gmail.com", password: "password")

apt1 = Apartment.find_or_create_by!({
  title: "4 BR 2 BA Apt by the Charles River!",
  description: "BREATHTAKING apartment.",
  price: "$900", address: "32 State Street, Boston, MA 02144",
  bedrooms: "4",
  bathrooms: "2",
  sq_ft: "1020",
  pets: "All pets are welcome!",
  date_available: "2018-10-01"
})

apt2 = Apartment.find_or_create_by!({
  title: "2 BR 3BA Apt in Historic Beacon Hill",
  description: "Close to various bars and restaurants. AMAZING LOCATION!",
  price: "$750", address: "25 Beacon Street, Boston, MA 02215",
  bedrooms: "2",
  bathrooms: "3",
  sq_ft: "750",
  pets: "No Pets.", date_available: "2018-07-01"
})

apt3 = Apartment.find_or_create_by!({
  title: "Nice 3BR 1.5 BA close to Fenway Park!",
  description: "Located in fantastic, family-oriented neighborhood",
  price: "$800",
  address: "47 8th Street, Boston, MA 02122",
  bedrooms: "3",
  bathrooms: "1.5",
  sq_ft: "900",
  pets: "No Dogs allowed, but cats are okay. Meow!",
  date_available: "2018-09-01"
})

# aptphoto1 = Photo.find_or_create_by(apartment_id: 1, photo_description: "Amazing Photo!", image: "logo.jpg")
# aptphoto2 = Photo.find_or_create_by(apartment_id: 2, photo_description: "cool photo!" , image: "blacklogo.jpg")

apt1photo1 = Photo.find_or_create_by!({
  apartment_id: 1,
  photo_description: "Elegant Living Room with Marvelous Views !!!",
  image: "livingroom1.jpeg"})
apt1photo2 = Photo.find_or_create_by!({
  apartment_id: 1,
  photo_description: "Gorgeous bedroom with amazing views of the Boston Common!",
  image_url: "https://heifetz.s3.amazonaws.com/uploads/photo/image/21/br2.jpeg"
})
aptphoto1 = Photo.find_or_create_by(apartment_id: 2, photo_description: "Living Room", image: "livingroom2.jpeg"),
aptphoto2 = Photo.find_or_create_by(apartment_id: 2, photo_description: "Gorgeous Kitchen!", image: "kitchen2.jpeg"),
aptphoto3 = Photo.find_or_create_by(apartment_id: 3, photo_description: "SPACIOUS Kitchen with BEAUTIFUL hardwood floors !!!", image: "kitchen3.jpeg")
aptphoto5 = Photo.find_or_create_by(apartment_id":3,"id":10,"photo_description":"INCREDIBLE Living Room!","image":"livingroom3.jpeg"
