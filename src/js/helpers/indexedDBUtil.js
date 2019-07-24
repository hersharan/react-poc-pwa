//Checking for IndexedDB support
if (!window.indexedDB) {
  console.log("Your browser does not support IndexedDB");
} else {
  console.log("Your browser supports IndexedDB")
}

var db;
//Opening a Database
function openDb() {
  // Open the database
  //parameters - database name and version number. - integer
  var request = indexedDB.open("POCDB", 4);
  db = this.result

  //Generating handlers
  //Error handlers
  request.onerror = function (event) {
    console.log("Error: ")
  };

  //OnSuccess Handler
  request.onsuccess = function (event) {
    console.log("Success: ")
    db = event.target.result
  };

  //OnUpgradeNeeded Handler
  request.onupgradeneeded = function (event) {
    console.log("On Upgrade Needed")

    db = event.target.result;

    // Create an objectStore for this database
    //Provide the ObjectStore name and provide the keyPath which acts as a primary key
    var objectStore = db.createObjectStore("pocStore", { keyPath: 'id', autoIncrement: true });
  };
}

//Simple function to get the ObjectStore
//Provide the ObjectStore name and the mode ('readwrite')
function getObjectStore(store_name, mode) {
  var tx = db.transaction(store_name, mode);
  return tx.objectStore(store_name);
}

//Adding to the Database
function addPerson(store_name,index,data) {
  // var obj = { fname: "Test", lname: "Test", age: 30, email: "test@company.com" };

  var store = getObjectStore(store_name, 'readwrite');
  var req;
  try {
    req = store.add(data);
  } catch (e) {
    throw e;
  }
  req.onsuccess = function (evt) {
    console.log("Insertion in DB successful", index);
  };
  req.onerror = function () {
    console.log("Insertion in DB Failed ", this.error, index);
  };
}

openDb();
for(var i=0;i<10000000000;i++){
  addPerson('pocStore', i ,{"results":[{"nid":105,"title":"test video 4","videoThumbnail":"","videoUrl":"\/sites\/default\/files\/2019-06\/vl_nightritual_eyecare.mp4","videoSubtitle":"","categoryId":0,"pointValue":0,"brand":86442,"video":""},{"nid":104,"title":"test video 3","videoThumbnail":"","videoUrl":"\/sites\/default\/files\/2019-06\/vl_5w_color_correctors_compressed.mp4","videoSubtitle":"","categoryId":0,"pointValue":0,"brand":86442,"video":""},{"nid":94,"title":"video test ","videoThumbnail":"https:\/\/poc.ajaysinghj8.com\/sites\/default\/files\/styles\/square_images_260_260\/public\/2019-06\/download.jpeg?itok=QhfEugzD","videoUrl":"\/sites\/default\/files\/2019-06\/still_lifemical.mp4","videoSubtitle":"","categoryId":0,"pointValue":0,"brand":86443,"video":""},{"nid":95,"title":"test","videoThumbnail":"https:\/\/poc.ajaysinghj8.com\/sites\/default\/files\/styles\/square_images_260_260\/public\/2019-06\/download.jpeg?itok=QhfEugzD","videoUrl":"\/sites\/default\/files\/2019-05\/samplevideo_1280x720_1mb.mp4","videoSubtitle":"","categoryId":0,"pointValue":0,"brand":86447,"video":""}],"pager":{"count":4,"pages":1,"items_per_page":12,"current_page":0,"next_page":0}});
}