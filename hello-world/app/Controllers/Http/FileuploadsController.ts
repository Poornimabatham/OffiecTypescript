import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Application from "@ioc:Adonis/Core/Application";
export default class FileuploadsController {
  public async Fileuploads({ request, response }: HttpContextContract) {
                const images = request.files('images',{
                      size: "20mb",
                      extnames: ["csv", "txt", "jpg", "png", "gif"],
                    })
                    

    console.log(images);
// return images
                for (let image of images) {
                  var upload =await image.move(Application.tmpPath('uploads'))
                  console.log(upload)
                }

    // const coverImage = request.file('cover_image', {
    //     size: "6mb",
    //     extnames: ["csv", "txt", "jpg", "png", "gif"],
    //   })
      
    //   if (!coverImage) {
    //     return
    //   }
      
    //   if (!coverImage.isValid) {
    //     return coverImage.errors
    //   }
      
    //  await coverImage.move(Application.tmpPath('uploads'))



    // Define an enum for the properties to check
enum PersonProperty {
  FirstName = 'firstName',
  LastName = 'lastName',
  Age = 'age',
  Gender = 'gender',
  city='city',
}

// Define an interface for a Person object
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// Create a person object that conforms to the Person interface
const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// Check if the object has a property named 'FirstName'
if (PersonProperty.city in person) {
  console.log(`The object has a property named "${PersonProperty.FirstName}" and its value is "${person[PersonProperty.FirstName]}".`);
} else {
  console.log(`The object does not have a property named "${PersonProperty.FirstName}".`);
}

// Check if the object has a property named 'Gender'
if (PersonProperty.Gender in person) {
  console.log(`The object has a property named "${PersonProperty.Gender}" and its value is "${person[PersonProperty.Gender]}".`);
} else {
  console.log(`The object does not have a property named "${PersonProperty.Gender}".`);
}

      
  }



  
}
