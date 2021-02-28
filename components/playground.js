let site = 'https://opsonite-87ba4.firebaseapp.com/claim/2whVUJLac2HtADTqjzZh?refCode=0128938847&&buttonColour=#00D0BE&&action=What%20is%20Vendly&&icon=https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/lockedHeart.svg?alt=media&token=09271329-807e-435f-8aea-e9ade06f190e&&slice=5000&&currency=Naira&&text=Authored%20by%20shaquille%20for%20multiple%20recipients.%20Prove%20your%20identity&&skin=default&&mobile=https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/Roughee.jpg?alt=media&token=e0ee70df-69fe-425d-b74c-06aa1a5cd07b,https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/p237m1486577.jpg?alt=media&token=9d521554-9ba2-491d-a87f-533762412b3a,https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/howee.jpg?alt=media&token=efa9330c-5d7c-47af-bbee-8fafe85c9324,https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/p1228m2215101.jpg?alt=media&token=60220c26-4b3d-4fe1-9110-84261b10f1ec&&position=left&&author=shaquille&&skinLabel=&&phone=+23480******69&&phone=+23490******80&&state=active&&amount=20000&&vexp=1613993445000&&desc=For%20the%20love%20of%20money!&&desktop=https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/Creo.jpg?alt=media&token=a3d41e51-2ac9-4ccb-96dd-c6d7b2ff921a,https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/39965380_m.jpg?alt=media&token=0d11e688-d0f5-4551-9aef-7fc8e2648d90,https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/132262320_m.jpg?alt=media&token=ae28d071-cf51-4bbf-8183-adbfb6346e53,https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/15997411_m.jpg?alt=media&token=0f747c85-36c2-4f78-b4c7-ead87af5b37e&&twitter=@bobnzelu&&twitter=@netanelben&&twitter=@shaquille&&buttonLabel=Claim&&next=LRcPYR&&exp=1614431302873'
let newSite = site.split('?')
newSite.splice(0, 1)
    newSite = newSite.join()
let siteToDecode = newSite.split('&&')
const decodedSites = siteToDecode.map(site => decodeURIComponent(site))
let newObject = {}
let test = decodedSites.map(item => {
    //we need to replace the first equality signs to something arbitrary and the
    //use split to split the key and value based on that arbitrary value. we are
    //doing
    //this because there is equality signs in the urls of some valus
    let newItem = item.replace("=", "@#@#").split('@#@#')
  
    if (Object.keys(newObject).includes(newItem[0])) {
        // console.log(newObject[newItem[0]])
        if (typeof newObject[newItem[0]] === "string") {
                    newObject ={...newObject,[newItem[0]]:[newObject[newItem[0]], newItem[1]] }
        } else {
            
                newObject ={...newObject,[newItem[0]]:[...newObject[newItem[0]], newItem[1]] }
       }

    }
    else {
         newObject[newItem[0]] = newItem[1]
    }
    
    if(newItem[0] == "mobile" || newItem[0] == 'desktop'){
        // console.log( newItem[1].replace(/,http/g, '@@##http'))
       newObject[newItem[0]] = newItem[1].replace(/,http/g, '@@##http').split('@@##')
    }
})
    

    console.log(newObject)