function AddressBook() 
{
this.contacts = []
}
AddressBook.prototype.addContact = function(contact)
 {
this.contacts.push(contact);
}
function Contact(first_name,second_name,phone_number,email,address)
{
  this.first_name=first_name;
  this.second_name=second_name;
  this.phone_number=phone_number;
  this.email=email;
  this.address=["street","city","country"];
}
Contact.prototype.full_name = function() 
{
  return this.first_name + " " + this.second_name;
};
var addressBook = new AddressBook();
var contact = new Contact("Mireal", "Tugiramasiko", "0779300071", "tmireal92@gmail.com");
addressBook.addContact(contact);


