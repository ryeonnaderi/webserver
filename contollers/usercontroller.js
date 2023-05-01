
 const HypeAccessEncryptionProtocol = 
{
     encryptHypeAccessKey : (hypeAccessKey ) =>
             bcrypt.genSalt(10)
             .then((salt => bcrypt.hash(hypeAccessKey, salt)))
             .then(hash => hash),
    
     compareHypeAccessKey : (pureHypeAccessKey , hashAccessKey) =>
             bcrypt.compare(pureHypeAccessKey, hashAccessKey)
             .then(resp => resp)
}
function getHypeUsers()
{
     const hypeTrainBeaconSignalData = HypeTrainBeaconActivation('SELECT * FROM HypeUsers');
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeUserWithHypeUserName(hypeUserNames)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT HIL.HypeIdentificationID,  HIL.HypeUsername, HIL.HypeDisplayname,FROM ((HypeIdentificationList AS HIL INNER JOIN HypeNameList AS HNL ON HIL.HypeIdentificationID = HNL.HypeNameID) INNER JOIN HypeUsers ON HIL.HypeIdentificationID = HypeUsers.HypeID) WHERE HIL.HypeUsername = ?', hypeUserNames);

    
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeUsersCredentials()
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCredentialsInterface');
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeUser(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeUsers AS HU WHERE HU.HypeID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData);
}

 function getHypeUserDisplayNameData(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeNameList AS HU WHERE HIL.HypeNameID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeUserCredentials(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeCredentialsInterface AS HCI WHERE HCI.HypeCredentialID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}

 function getHypeUserProfileContents(iDs)
{
     const hypeTrainBeaconSignalData = hypeTrainBeaconActivation('SELECT * FROM HypeProfileContents AS HPC WHERE HPC.HypeProfileContentID = ?', iDs);
     
     return confirmHypeTrainUniversalContinuumSignalData(hypeTrainBeaconSignalData); 
}