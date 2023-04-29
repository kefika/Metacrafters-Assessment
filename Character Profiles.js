/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Notebook = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNotes (_title, _name, _type, _item) {
    
    const Notes = {
        "title": _title,
        "name": _name,
        "type": _type,
        "item": _item

    }
    Notebook.push(Notes);
    console.log("Viewed Character Profile of " + _title);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNotebook () {
    for(let c = 0; c < Notebook.length; c++) {
        console.log("\nTitle: " + Notebook[c].title);
        console.log("Name:  " + Notebook[c].name);
        console.log("Type:  " + Notebook[c].type);
        console.log("Item:  " + Notebook[c].item);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Character Profiles Viewed: " + Notebook.length);
}

// call your functions below this line
mintNotes("Mercenary", "Naib Subedar", "Rescue", "Elbow Pads");
mintNotes("Little Girl", "Memory", "Assist", "Pages");
mintNotes("Lawyer", "Freddy Riley", "Decode", "Map");
mintNotes("Entomologist", "Melly Plinius", "Contain", "Swarm of Bees");
listNotebook();
console.log("\n");
getTotalSupply();
