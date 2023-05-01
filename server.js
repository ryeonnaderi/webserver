/*
     Dependencies:
          npm i bcrypt
          npm i -D @types/bcrypt
*/

//Node.js
import { HypeAccessEncryptionProtocol } from './ServerAssets/LegendaryHypeTrainContinuumAccessVoid.js';
import { hypeTrainBeaconActivation } from './LegendaryHypeTrainContinuumWarper.js';












var hypeTrainMySQL = require('mysql');

const express = require("express")

const app = express();

app.use(express.static("public"));

const legendaryHypeTrainContinuumConnection = hypeTrainMySQL.createConnection({
     host     : process.env.RDS_HOSTNAME,
     
     user     : process.env.RDS_USERNAME,
     
     password : process.env.RDS_PASSWORD,
     
     port     : process.env.RDS_PORT
});








export function getHypeUsers()
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeUsers');
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeUserWithHypeUserName(hypeUserNames)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT HIL.HypeIdentificationID, 
     HIL.HypeUsername, HIL.HypeDisplayname
     FROM ((HypeIdentificationList AS HIL
     INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
     INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
     WHERE HIL.HypeUsername = ?', hypeUserNames);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeUsersCredentials()
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCredentialsInterface');
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

export function getHypeUser(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeUsers AS HU WHERE HU.HypeID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeUserDisplayNameData(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeNameList AS HU WHERE HIL.HypeNameID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

export function getHypeUserCredentials(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCredentialsInterface AS HCI WHERE HCI.HypeCredentialID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

export function getHypeUserProfileContents(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeProfileContents AS HPC WHERE HPC.HypeProfileContentID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

export function getHypeUniverseNetwork(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeUniverseNetworks AS HUN WHERE HUN.HypeNetworkID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

export function getHypeCart(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCarts AS HC WHERE HC.HypeCartID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

export function getHypeUserIdentities(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeIdentificationInterface AS HII WHERE HII.HypeIdentificationID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

export function getHypeReaction(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeReactions AS HR WHERE HR.HypeReactionID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeComment(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCommentaryUniverse AS HCU WHERE HCU.HypeCommentID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeCartStation(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCartStationInterface AS HCSI WHERE HCSI.HypeCartStationID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeCaptions()
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCaptionInterface');
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeCaption(iDs)
{
    const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCaptionInterface AS HCI WHERE HCI.HypeCaptionID = ?', iDs);
     
    return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeCaptionByCaption(hypeCaptions)
{
    const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCaptionInterface AS HCI WHERE HCI.HypeCaption = ?', hypeCaptions);
     
    return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function getHypeUserIDWithHypeUserName(hypeUserNames)
{
    const hypeTrainBeaconSignalData = getHypeUserWithHypeUserName(hypeUserNames);
    
    if (hypeTrainBeaconSignalData == null) { return null; }
    
    return hypeTrainBeaconSignalData.HypeID
}

export function updateHypeCaption(hypeCaptionID, updatedHypeCaption)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('UPDATE HypeCaptionInterface AS HCI SET HypeCaption = ? WHERE HCI.HypeCaptionID = ?', [updatedHypeCaption, hypeCaptionID]);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

export function updateHypeCaptionUses(hypeCaptionID, updatedHypeCaptionUses)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('UPDATE HypeCaptionInterface AS HCI SET HypeCaptionUses = ? WHERE HCI.HypeCaptionID = ?',[updatedHypeCaptionUses, hypeCaptionID]);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}





function checkHypeDataInstance(hypeBeaconSignalProtocol)
{
     hypeTrainBeaconActivation(hypeBeaconSignalProtocol);
}






function createHypeUserIdentification(hypeUserName, hypeDisplayName, hypeEmail)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeIdentificationInterface (
          
          HypeIdentificationID INT NOT NULL PRIMARY KEY,
          
          HypeUsername VARCHAR(99),
          
          HypeDisplayName VARCHAR(99),
          
          HypeEmail VARCHAR(6999)
     )');
     
     const hypeIdentityID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUserIdentities, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeIdentificationInterface VALUES (?, ?, ?, ?)', [hypeIdentificationID, hypeUserName, hypeDisplayName, hypeEmail]);
     
     return hypeIdentityID;
}

function createHypeUserCredential(hypeAccessKey)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCredentialsInterface (
          
          HypeCredentialID INT NOT NULL PRIMARY KEY,
          
          HypeAccessKey BINARY(64)
     )');
     
     const hypeCredentialID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUserCredentials, 0, 49151);
      
     const encryptedHypeAccessKey = await HypeAccessEncryptionProtocol.encryptHypeAccessKey(hypeAccessKey);
      
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeCredentialsInterface VALUES (?, ?)', [hypeCredentialID, encryptedHypeAccessKey]);
      
     return hypeCredentialID;
}

function createHypeUserDisplayNameData(hypeFirstName, hypeLastName)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeNameList (
          
          HypeNameID INT NOT NULL PRIMARY KEY,
          
          HypeFirstName VARCHAR(99),
          
          HypeLastName VARCHAR(99)
     )');
     
     const hypeNameID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUserDisplayNameData, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeNameList VALUES (?, ?, ?)', [hypeNameID, hypeFirstName, hypeLastName]);
     
     return hypeNameID;
}

function createHypeUserProfileContents(hypeProfilePicPath)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeProfileContents (
          
          HypeProfileContentID INT NOT NULL PRIMARY KEY,
          
          HypeProfilePic LONGBLOB
     )');
     
     const hypeProfileContentID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUserProfileContents, 0, 49151);
     
     const hypeProfilePicData = null; // replace with BINARY image encode function
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeNameList VALUES (?, ?)', [hypeProfileContentID, hypeProfilePicData]);
     
     return hypeProfileContentID;
}

export function createHypeUser(
     hypeUsername,
     hypeDisplayName,
     hypeFirstName,
     hypeLastName,
     hypeEmail,
     hypeAccessKey,
     hypeProfilePicPath
)
{
     const hypeID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUser, 0, 49151);
     
     const hypeCredentialID = createHypeUserCredential(hypeAccessKey);
     
     const hypeIdentificationID = createHypeUserIdentification(hypeUserName, hypeDisplayName, hypeEmail);
     
     const hypeProfileContentsID = createHypeUserProfileContents(hypeProfilePicPath);
     
     const hypeNameID = createHypeUserDisplayNameData(hypeFirstName, hypeLastName);
     
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeUsers (
          
          HypeID INT NOT NULL PRIMARY KEY, 
          
          HypeProfileContentID INT,
          
          HypeCredentialID INT,
          
          HypeIdentificationID INT,
          
          HypeNameID INT,
          
          FOREIGN KEY (HypeNameID) REFERENCES HypeNameList(HypeNameID),
          
          FOREIGN KEY (HypeProfileContentID) REFERENCES HypeProfileContents(HypeProfileContentID),
          
          FOREIGN KEY (HypeCredentialID) REFERENCES HypeCredentialsInterface(HypeCredentialID),
          
          FOREIGN KEY (HypeIdentificationID) REFERENCES HypeIdentificationList(HypeIdentificationID)
     )');
     
     return hypeTrainBeaconActivation('INSERT INTO HypeUsers VALUES (?, ?, ?, ?, ?)', [hypeID, hypeProfileContentsID, hypeCredentialID, hypeIdentificationID, hypeNameID]);
}











function addHypeCartIntoHypeUniversalNetwork(hypeTopicID, currentInteractedHypeUserID, hypeTopicRelationID)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeUniverseNetworks (
          
          HypeNetworkID INT NOT NULL PRIMARY KEY,
          
          HypeTopicID INT,
          
          CurrentInteractedHypeUserID INT,
          
          HypeTopicRelationID INT
     )');
     
     const hypeNetworkID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeUniversalNetwork, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeUniverseNetworks VALUES (?, ?, ?, ?)', [hypeNetworkID, hypeTopicID, currentInteractedHypeUserID, hypeTopicRelationID]);
     
     return hypeNetworkID;
}
function addHypeReactionsToHypeCart(hypeContentID, hypeReactionType, hypeReactionCount)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeReactions (
          
          HypeReactionID INT NOT NULL PRIMARY KEY,
          
          HypeContentID INT,
          
          HypeReactionType INT,
          
          HypeReactionCount BIGINT
     )');
     
     const hypeReactionID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeReaction, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeReactions VALUES (?, ?, ?, ?)', [hypeReactionID, hypeContentID, hypeReactionType, hypeReactionCount]);
     
     return hypeReactionID;
}
function addHypeCommentaryUniverse(hypeCommentorID, hypeComment, hypeReactionID, mySQLHypeModifiedDateString, mySQLHypeDateString)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCommentaryUniverse (
          
          HypeCommentID INT NOT NULL PRIMARY KEY,
          
          HypeCommentorID INT,
          
          HypeComment VARCHAR(699),
          
          HypeReactionID INT,
          
          HypeModifiedDate DATETIME,
          
          HypeDate DATETIME,
          
          FOREIGN KEY (HypeCommentorID) REFERENCES HypeUsers(HypeID),
          
          FOREIGN KEY (HypeReactionID) REFERENCES HypeReactions(HypeReactionID)
     )');
     
     const hypeCommentID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeComment, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeCommentaryUniverse VALUES (?, ?, ?, ?, ?, ?)', [hypeCommentID, hypeCommentorID, hypeComment, hypeReactionID, mySQLHypeModifiedDateString, mySQLHypeDateString]);
     
     return hypeCommentID;
}
function addHypeCaption(hypeCaption)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCaptionInterface (
          
          HypeCaptionID INT NOT NULL PRIMARY KEY,
          
          HypeCaption VARCHAR(6999),
          
          HypeCaptionUses BIGINT
     )');
     
     const hypeCaptionData = getHypeCaptionByCaption([hypeCaption]);
     
     if (hypeCaptionData != null)
     {
          updateHypeCaptionUses(hypeCaptionData.HypeCaptionID, hypeCaptionData.HypeCaptionUses + 1);
          
          return hypeCaptionData.HypeCaptionID;
     }
     else
     {
          const hypeCaptionID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeCaption, 0, 49151);
          
          const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeCaptionInterface VALUES (?, ?, ?)', [hypeCaptionID, hypeCaption, 0]);
          
          return hypeCaptionID;
     }
}
function addHypeCartIntoHypeCartStationInterface(hypeCaptionID, hypeCartTitle, hypes, hypeInteractions, hypeCommentID, hypeModifiedDateString, hypeDateString)
{
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCartStationInterface (
          
          HypeCartStationID INT NOT NULL PRIMARY KEY,
          
          HypeCaptionID INT,
          
          HypeCartTitle VARCHAR(699),
          
          Hypes BIGINT,
          
          HypeInteractions BIGINT,
          
          HypeCommentID INT,
          
          HypeModifiedDate DATETIME,
          
          HypeDate DATETIME,
          
          FOREIGN KEY (HypeCommentID) REFERENCES HypeCommentaryUniverse(HypeCommentID) ,
          
          FOREIGN KEY (HypeCaptionID) REFERENCES HypeCaptionInterface(HypeCaptionID) 
     )');
     
     const hypeCartStationID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeCartStation, 0, 49151);
     
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('INSERT INTO HypeCartStationInterface VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [hypeCartStationID, hypeCaptionID, hypeCartTitle, hypes, hypeInteractions, hypeCommentID, hypeModifiedDateString, hypeDateString]);
     
     return hypeCartStationID;
}
export function createHypeCart(
     hypeCartTitle, 
     hypeCartCaption, 
     hypeUserName, 
     hypeTopicID, 
     hypeTopicRelationID,
     hypeReactionTypeID,
     hypeContentID,
     hypeModifiedDateData,
     hypeDateData
)
{
     const hypeCartID = await confirmHypeUniversalGateWayID([createHypeUniverseGateKey(0, 49151)], getHypeCart, 0, 49151);
     
     const hypeUserID = getHypeUserIDWithHypeUserName([hypeUserName]);
     
     const hypeReachID = addHypeCartIntoHypeUniversalNetwork(hypeTopicID, -1, hypeTopicRelationID);
     
     const hypeCommentID = -1;
     
     const hypeCaptionID = addHypeCaption(hypeCartCaption);
     
     
     
     const isoHypeModifiedDateString : String = hypeModifiedDateData.toISOString();
     
     const isoHypeDateString : String = hypeDateData.toISOString();
     
     cursor.execute("SET time_zone = '+00:00'")
     
     const isoHypeModifiedDate = new Date(isoHypeModifiedDateString);
     
     const isoHypeModifiedDate = new Date(isoHypeModifiedDateString);
     
     const isoHypeDate = new Date(isoHypeDateString);
     
     const mySQLHypeModifiedDateString = isoHypeModifiedDate.toJSON().slice(0, 19).replace('T', ' ');
     
     const mySQLHypeDateString = isoHypeDate.toJSON().slice(0, 19).replace('T', ' ');
     
     
     
     const hypeCartStationID = addHypeCartIntoHypeCartStationInterface(hypeCaptionID, hypeCartTitle, 0, 0, hypeCommentID, mySQLHypeModifiedDateString, mySQLHypeDateString);
     
     checkHypeDataInstance('CREATE TABLE IF NOT EXISTS HypeCarts (
          
          HypeCartID INT NOT NULL PRIMARY KEY,
          
          HypeUserID INT,
          
          HypeCartStationID INT,
          
          HypeReachID INT,
          
          HypeInteractions BIGINT,
          
          FOREIGN KEY (HypeUserID) REFERENCES HypeUsers(HypeID),
          
          FOREIGN KEY(HypeReachID) REFERENCES HypeUniverseNetworks(HypeNetworkID),
          
          FOREIGN KEY(HypeCartStationID) REFERENCES HypeCartStationInterface(HypeCartStationID)
     )');
     
     return hypeTrainBeaconActivation('INSERT INTO HypeCarts VALUES (?, ?, ?, ?, ?)', [hypeCartID, hypeUserID, hypeCartStationID, hypeReachID, 0]);
}

function createHypeUniverseGateKey(minKeyV, maxKeyV)
{
     return Math.floor(Math.random() * (maxKeyV - minKeyV) + minKeyV);
}

function confirmHypeUniversalGateWayID(gatewayKey, beaconReachFunction, minKeyV, maxKeyV)
{
     if (beaconReachFunction(gatewayKey) != null)
     {
          return confirmHypeUniversalGateWayID([createHypeUniverseGateKey(minKeyV, maxKeyV - 1)], beaconReachFunction);
     }
     else
     {
          return gatewayKey;
     }
}




function confirmHypeTrainUniversalContinuumSignalData(hypeBeaconData)
{
     if (hypeBeaconData.hypeContinuumNetworkPortalError != null) { return null; }
     
     return hypeBeaconData;
}







// -- HypeTrainNetworkCreationInterface
// CREATE TABLE IF NOT EXISTS HypeNameList (

//   HypeNameID INT NOT NULL PRIMARY KEY,

//   HypeFirstName VARCHAR(99),
  
//   HypeLastName VARCHAR(99)

// );



// CREATE TABLE IF NOT EXISTS HypeIdentificationList (

//   HypeIdentificationID INT NOT NULL PRIMARY KEY,

//   HypeUsername VARCHAR(99),
  
//   HypeDisplayName VARCHAR(99)

// );



// CREATE TABLE IF NOT EXISTS HypeProfileContents (

//   HypeProfileContentID INT NOT NULL PRIMARY KEY,

//   HypeProfilePic LONGBLOB

// );



// CREATE TABLE IF NOT EXISTS HypeCredentialsInterface (

//   HypeCredentialID INT NOT NULL PRIMARY KEY,

//   HypeAccessKey BINARY(64)

// );



// CREATE TABLE IF NOT EXISTS HypeReactions (

//   HypeReactionID INT NOT NULL PRIMARY KEY,
  
//   HypeContentID INT,
  
//   HypeReactionType INT,

//   HypeReactionCount BIGINT
// );





// CREATE TABLE IF NOT EXISTS HypeUsers (

//   HypeID INT NOT NULL PRIMARY KEY, 

//   HypeProfileContentID INT,

//   HypeCredentialID INT,
  
//   HypeIdentificationID INT,

//   HypeNameID INT,

//   FOREIGN KEY (HypeNameID) REFERENCES HypeNameList(HypeNameID),

//   FOREIGN KEY (HypeProfileContentID) REFERENCES HypeProfileContents(HypeProfileContentID),

//   FOREIGN KEY (HypeCredentialID) REFERENCES HypeCredentialsInterface(HypeCredentialID),
  
//   FOREIGN KEY (HypeIdentificationID) REFERENCES HypeIdentificationList(HypeIdentificationID)
// );



// CREATE TABLE IF NOT EXISTS HypeCommentaryUniverse (

//   HypeCommentID INT NOT NULL PRIMARY KEY,
  
//   HypeCommentorID INT,

//   HypeComment VARCHAR(699),
  
//   HypeReactionID INT,
  
//   HypeModifiedDate DATETIME,
  
//   HypeDate DATETIME,
  
//   FOREIGN KEY (HypeCommentorID) REFERENCES HypeUsers(HypeID),
  
//   FOREIGN KEY (HypeReactionID) REFERENCES HypeReactions(HypeReactionID) 
// );



// CREATE TABLE IF NOT EXISTS HypeUniverseNetworks (

//   HypeNetworkID INT NOT NULL PRIMARY KEY,

//   HypeTopicID INT,

//   CurrentInteractedHypeUserID INT,

//   HypeTopicRelationID INT

// );










// CREATE TABLE IF NOT EXISTS HypeCaptionInterface (
//   HypeCaptionID INT NOT NULL PRIMARY KEY,
  
//   HypeCaption VARCHAR(6999),
  
//   HypeCaptionUses BIGINT
// );


// CREATE TABLE IF NOT EXISTS HypeCartStationInterface (

//   HypeCartStationID INT NOT NULL PRIMARY KEY,
  
//   HypeCaptionID INT,

//   HypeCartTitle VARCHAR(699),
  
//   Hypes BIGINT,
  
//   HypeInteractions BIGINT,
  
//   HypeCommentID INT,
  
//   HypeModifiedDate DATETIME,
  
//   HypeDate DATETIME,
  
//   FOREIGN KEY (HypeCommentID) REFERENCES HypeCommentaryUniverse(HypeCommentID) ,
  
//   FOREIGN KEY (HypeCaptionID) REFERENCES HypeCaptionInterface(HypeCaptionID) 
// );



// CREATE TABLE IF NOT EXISTS HypeCarts (

//   HypeCartID INT NOT NULL PRIMARY KEY,

//   HypeUserID INT,

//   HypeCartStationID INT,

//   HypeReachID INT,
  
//   HypeInteractions BIGINT,

//   FOREIGN KEY (HypeUserID) REFERENCES HypeUsers(HypeID),

//   FOREIGN KEY(HypeReachID) REFERENCES HypeUniverseNetworks(HypeNetworkID),
  
//   FOREIGN KEY(HypeCartStationID) REFERENCES HypeCartStationInterface(HypeCartStationID)
// );



// CREATE TABLE IF NOT EXISTS HypeContentNetwork (

//   HypeContentID INT NOT NULL PRIMARY KEY,
  
//   HypeCommentID INT,
  
//   HypeCartID INT,
  
//   FOREIGN KEY (HypeCommentID) REFERENCES HypeCommentaryUniverse(HypeCommentID),
  
//   FOREIGN KEY (HypeCartID) REFERENCES HypeCarts(HypeCartID) 
// );










/*
     HypeUser Creation Protocol:
          Insert into HypeNameList  ->  HypeProfileContents  ->  HypeCredentialsInterface  ->  HypeIdentificationList  ->  *[ HypeUsers ]*  <-
    
    HypeCart Creation Protocol:
         Insert into HypeUniverseNetworks  ->  HypeReactions  ->  HypeCommentaryUniverse  ->  HypeCartStationInterface  ->  *[ HypeCarts ]*  <-
*/










/*
— Query HypeUsers at specific HypeID
SELECT * FROM HypeUsers WHERE HypeID = ?;


— Query all HypeUser’s names.
SELECT HNL.HypeNameID, HNL.HypeFirstName, HNL.HypeLastName
FROM HypeNameList AS HNL
INNER JOIN HypeUsers ON HNL.HypeNameID = HypeUsers.HypeID;

— Query HypeUser’s name at a specific HypeID.
SELECT HNL.HypeNameID, HNL.HypeFirstName, HNL.HypeLastName
FROM HypeNameList AS HNL
INNER JOIN HypeUsers ON HNL.HypeNameID = HypeUsers.HypeID WHERE HNL.HypeNameID = 1;



— Query all HypeUser’s by HypeNameID
SELECT HU.HypeID, HU.HypeProfileContentID, HU.HypeCredentialID, HU.HypeIdentificationID, HU.HypeNameID
FROM HypeUsers AS HU
INNER JOIN HypeNameList AS HNL ON HU.HypeID = HNL.HypeNameID;



— Query all HypeUser’s by HypeIdentificationID
SELECT HU.HypeID, HU.HypeProfileContentID, HU.HypeCredentialID, HU.HypeIdentificationID, HU.HypeNameID
FROM HypeUsers AS HU
INNER JOIN HypeIdentificationList AS HIL ON HU.HypeID = HIL.HypeIdentificationID;



— Query HypeUser’s by HypeIdentificationID that contains both HypeUsername / DisplayName
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID);



— Query HypeUser from HypeUsername
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HIL.HypeUsername = ?;



— Query HypeUser from HypeDisplayname
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HIL.HypeDisplayname = ?;



— Query HypeUser from HypeUsername containing input characters
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HIL.HypeUsername like ?;



— Query HypeUser from HypeDisplayname containing input characters
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HIL.HypeDisplayname like ?;



— Query HypeUser from HypeFirstName containing input characters
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HNL.HypeFirstName like ?;



— Query HypeUser from HypeLastName containing input characters
SELECT HIL.HypeIdentificationID, HIL.HypeUsername, HIL.HypeDisplayname
FROM ((HypeIdentificationList AS HIL
INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID)
INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID)
WHERE HNL.HypeLastName like ?;










— Query all HypeCarts
SELECT * FROM HypeCarts;



— Query all HypeCarts empowered by HypeUsers’ HypeID
SELECT * FROM HypeCarts 
CROSS JOIN HypeUsers AS HU
WHERE HypeCarts.HypeUserID = HU.HypeID;



— Query HypeCarts associated by specified HypeCart HypeUserID
SELECT * FROM HypeCarts 
CROSS JOIN HypeUsers AS HU
WHERE HypeCarts.HypeUserID = ?;



— Query HypeCarts by HypeCartID
SELECT * FROM HypeCarts 
CROSS JOIN HypeUsers AS HU
WHERE HypeCarts.HypeCartID = ?;
*/





