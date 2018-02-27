# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apt1 = Apartment.find_or_create_by(title: "Nice 3BR 1.5 BA in Great Location!", description: "this apartment is located in fantastic, family-oriented neighborhood. NO DOGS ALLOWED", price: "$800", address: "47 8th Ave NE Hickory, NC 28602", bedrooms: "3", bathrooms: "1.5", sq_ft: "900", pets?: "No Dogs allowed, but cats are okay. Meow!")
apt2 = Apartment.find_or_create_by(title: "2 BR 3BA Apt in Historic Downtown", description: "this apt is close to various bars and restaurants. Amazing location!", price: "$750", address: "24 2nd Ave SW Hickory, NC 28601", bedrooms: "2", bathrooms: "3", sq_ft: "750", pets?: "No Pets.")
apt3 = Apartment.find_or_create_by(title: "4 BR 2 BA Apt in Viewmont!", description: "Breath-taking apartment in AMAZING neighborhood. All pets are welcome! MEOW, WHOOOF", price: "$900", address: "37 6th St NW Hickory, NC 28601", bedrooms: "4", bathrooms: "2", sq_ft: "1020", pets?: "All pets are welcome!")
