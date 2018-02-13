# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Babe.create([{name: 'Amy', age: 16}, {name: 'Nancy', age: 17}])
Review.create([
  {babe_id: 1, content: 'Review 1'},
  {babe_id: 1, content: 'Review 2'},
  {babe_id: 2, content: 'Review 3'},
  {babe_id: 2, content: 'Review 4'},
])