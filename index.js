// Write your classes here
class Tree{
   constructor(species){
    this.species=species;
    }
<<<<<<< HEAD
   static definition(){
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
=======
   static defintion(){
      return "> A tree is a perennial plant with an elongated stem, or trunk, supporting
> branches and leaves."
>>>>>>> 109349f8a14bea3aa194725d7f14f5ad6534badb
   }
}
class Deciduous extends Tree{
  constructor(species,name){
    super(species)
    this.name=name;
   }
   static definition(){
<<<<<<< HEAD
     return (super.definition()+' Deciduous trees shed their leaves annually.')
=======
     return (super.definition()+'Deciduous trees shed their leaves annually.')
>>>>>>> 109349f8a14bea3aa194725d7f14f5ad6534badb
   }
}
class Evergreen extends Tree{
  constructor(species,name){
    super(species)
    this.name=name;
   }
   static definition(){
<<<<<<< HEAD
     return (super.definition()+' Evergreens keep their leaves all year round.')
=======
     return (super.definition()+'Evergreens keep their leaves all year round.')
>>>>>>> 109349f8a14bea3aa194725d7f14f5ad6534badb
   }
}