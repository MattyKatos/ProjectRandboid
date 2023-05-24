//FS
const fs = require('fs');

//Rand
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//Variables for servertest_SandboxVars.lua
var Distribution = getRandomInt(1, 2)
var StartMonth = getRandomInt(1, 12)
var StartDay = getRandomInt(1, 20)
var StartTime = getRandomInt(1, 8)
var WaterShut = getRandomInt(2, 7)
var ElecShut = getRandomInt(2, 7)
var WaterShutModifier = getRandomInt(1, 50)
var ElecShutModifier = getRandomInt(1, 50)
var FoodLoot = getRandomInt(4, 6)
var CannedFoodLoot = getRandomInt(4, 6)
var LiteratureLoot = getRandomInt(3, 5)
var SurvivalGearsLoot = getRandomInt(3, 5)
var MedicalLoot = getRandomInt(3, 5)
var WeaponLoot = getRandomInt(3, 5)
var RangedWeaponLoot = getRandomInt(3, 5)
var AmmoLoot = getRandomInt(3, 5)
var MechanicsLoot = getRandomInt(3, 5)
var OtherLoot = getRandomInt(3, 5)
var Temperature = getRandomInt(1, 4)
var Rain = getRandomInt(1, 4)
var XpMultiplier = getRandomArbitrary(1, 4)
var Helicopter = getRandomInt(1, 3)
var SurvivorHouseChance = getRandomInt(1, 5)
var VehicleStoryChance = getRandomInt(1, 5)
var ZoneStoryChance = getRandomInt(1, 5)
var AnnotatedMapChance = getRandomInt(1, 5)
var CharacterFreePoints = getRandomInt(0, 10)
var DecayingCorpseHealthImpact = getRandomInt(1, 3)
var BloodLevel = getRandomInt(2, 4)
var ClothingDegradation = getRandomInt(2, 3)
var MaxFogIntensity = getRandomInt(1, 2)
var MaxRainFxIntensity = getRandomInt(1, 2)
var RearVulnerability = getRandomInt(1, 3)
var CarSpawnRate = getRandomInt(1, 4)
var ChanceHasGas = getRandomInt(1, 2)
var InitialGas = getRandomInt(1, 5)
var FuelStationGas = getRandomInt(1, 8)
var LockedCar = getRandomInt(1, 5)
var CarGeneralCondition = getRandomInt(1, 4)
var CarDamageOnImpact = getRandomInt(1, 4)
var DamageToPlayerFromHitByACar = getRandomInt(1, 4)
var CarAlarm = getRandomInt(1, 5)
var RecentlySurvivorVehicles = getRandomInt(1, 3)
var EnablePoisoning = getRandomInt(1, 2)

//Variables servertest_SandboxVars.lua - ZombieLore
var Speed = getRandomInt(1, 3)
var Strength = getRandomInt(1, 3)
var Toughness = getRandomInt(1, 3)
var Transmission = getRandomInt(1, 3)
var Mortality = getRandomInt(1, 6)
var Reanimate = getRandomInt(1, 5)
var CrawlUnderVehicle = getRandomInt(1, 6)
var Memory = getRandomInt(1, 4)
var Sight = getRandomInt(1, 3)
var Hearing = getRandomInt(1, 3)
var ActiveOnly = getRandomInt(1, 3)
var DisableFakeDead = getRandomInt(1, 2)

//Variables servertest_SandboxVars.lua - ZombieConfig
var PopulationMultiplier = getRandomInt(1, 2)
var PopulationStartMultiplier = getRandomArbitrary(0.00, 3.00)
var PopulationPeakMultiplier = getRandomArbitrary(0.00, 3.00)
var PopulationPeakDay = getRandomInt(1, 365)

//Complie servertest_SandboxVars.lua
var hardcode = 'SandboxVars = {VERSION = 5,Zombies = 4,DayLength = 3,StartYear = 1,ErosionSpeed = 3,ErosionDays = 0,XpMultiplierAffectsPassive = false,ZombieAttractionMultiplier = 1.0,VehicleEasyUse = false,Farming = 3,CompostTime = 2,StatsDecrease = 4,NatureAbundance = 3,Alarm = 4,LockedHouses = 6,StarterKit = false,Nutrition = true,FoodRotSpeed = 3,FridgeFactor = 3,LootRespawn = 1,SeenHoursPreventLootRespawn = 0,WorldItemRemovalList = "Base.Hat,Base.Glasses,Base.Maggots",HoursForWorldItemRemoval = 24.0,ItemRemovalListBlacklistToggle = false,TimeSinceApo = 1,PlantResilience = 3,PlantAbundance = 3,EndRegen = 3,MetaEvent = 2,SleepingEvent = 1,GeneratorSpawning = 3,GeneratorFuelConsumption = 0.5,ConstructionBonusPoints = 3,NightDarkness = 3,NightLength = 3,InjurySeverity = 2,BoneFracture = true,HoursForCorpseRemoval = 216.0,FireSpread = true,DaysForRottenFoodRemoval = -1,AllowExteriorGenerator = true,EnableSnowOnGround = true,MultiHitZombies = false,AttackBlockMovements = true,AllClothesUnlocked = false,EnableTaintedWaterText = true,TrafficJam = true,CarGasConsumption = 1.0,PlayerDamageFromCrash = true,SirenShutoffHours = 0.00,EnableVehicles = true,';
var variables = "Distribution = " + Distribution + "," + "StartMonth = " + StartMonth + "," + "StartDay = " + StartDay + "," + "StartTime = " + StartTime + "," + "WaterShut = " + WaterShut + "," + "ElecShut = " + ElecShut + "," + "WaterShutModifier = " + WaterShutModifier + "," + "ElecShutModifier = " + ElecShutModifier + "," + "FoodLoot = " + FoodLoot + "," + "CannedFoodLoot = " + CannedFoodLoot + "," + "LiteratureLoot = " + LiteratureLoot + "," + "SurvivalGearsLoot = " + SurvivalGearsLoot + "," + "MedicalLoot = " + MedicalLoot + "," + "WeaponLoot = " + WeaponLoot + "," + "RangedWeaponLoot = " + RangedWeaponLoot + "," + "AmmoLoot = " + AmmoLoot + "," + "MechanicsLoot = " + MechanicsLoot + "," + "OtherLoot = " + OtherLoot + "," + "Temperature = " + Temperature + "," + "Rain = " + Rain + "," + "XpMultiplier = " + XpMultiplier + "," + "Helicopter = " + Helicopter + "," + "SurvivorHouseChance = " + SurvivorHouseChance + "," + "VehicleStoryChance = " + VehicleStoryChance + "," + "ZoneStoryChance = " + ZoneStoryChance + "," + "AnnotatedMapChance = " + AnnotatedMapChance + "," + "CharacterFreePoints = " + CharacterFreePoints + "," + "DecayingCorpseHealthImpact = " + DecayingCorpseHealthImpact + "," + "BloodLevel = " + BloodLevel + "," + "ClothingDegradation = " + ClothingDegradation + "," + "MaxFogIntensity = " + MaxFogIntensity + "," + "MaxRainFxIntensity = " + MaxRainFxIntensity + "," + "RearVulnerability = " + RearVulnerability + "," + "CarSpawnRate = " + CarSpawnRate + "," + "ChanceHasGas = " + ChanceHasGas + "," + "InitialGas = " + InitialGas + "," + "FuelStationGas = " + FuelStationGas + "," + "LockedCar = " + LockedCar + "," + "CarGeneralCondition = " + CarGeneralCondition + "," + "CarDamageOnImpact = " + CarDamageOnImpact + "," + "DamageToPlayerFromHitByACar = " + DamageToPlayerFromHitByACar + "," + "CarAlarm = " + CarAlarm + "," + "RecentlySurvivorVehicles = " + RecentlySurvivorVehicles + "," + "EnablePoisoning = " + EnablePoisoning + ","
var map = 'Map = {AllowMiniMap = false,AllowWorldMap = true,MapAllKnown = false,},'
var ZombieLore = 'ZombieLore = {Cognition = 3,ThumpNoChasing = false,ThumpOnConstruction = true,TriggerHouseAlarm = false,ZombiesDragDown = true,ZombiesFenceLunge = true,' + "Speed = " + Speed + "," + "Strength = " + Strength + "," + "Toughness = " + Toughness + "," + "Transmission = " + Transmission + "," + "Mortality = " + Mortality + "," + "Reanimate = " + Reanimate + "," + "CrawlUnderVehicle = " + CrawlUnderVehicle + "," + "Memory = " + Memory + "," + "Sight = " + Sight + "," + "Hearing = " + Hearing + "," + "ActiveOnly = " + ActiveOnly + "," + "DisableFakeDead = " + DisableFakeDead + ",},"
var ZombieConfig = 'ZombieConfig = {RespawnHours = 72.0,RespawnUnseenHours = 16.0,RespawnMultiplier = 0.1,RedistributeHours = 12.0,FollowSoundDistance = 100,RallyGroupSize = 20,RallyTravelDistance = 20,RallyGroupSeparation = 15,RallyGroupRadius = 3,' + "PopulationMultiplier = " + PopulationMultiplier + "," + "PopulationStartMultiplier = " + PopulationStartMultiplier + "," + "PopulationPeakMultiplier = " + PopulationPeakMultiplier + "," + "PopulationPeakDay = " + PopulationPeakDay + ",},"
var luaCode = hardcode + variables + map + ZombieLore + ZombieConfig + '}'
var luaPath = 'servertest_SandboxVars.lua'

//Write servertest_SandboxVars.lua
fs.writeFile(luaPath, luaCode, (err) => {
    if (err) {
        console.error('Error writing Lua file:', err);
    } else {
        console.log('Lua file created successfully!');
    }
});

//Load Variables for servertest.ini from mem.json
const mem = JSON.parse(fs.readFileSync('./mem.json',{ encoding:'utf8', flag: 'r'}));
var WipeNumber = mem.memory.wipenumber
var ResetID = mem.memory.resetid
var PlayerID = mem.memory.playerid

//Compile servertest.ini
var iniinc = 'ServerWelcomeMessage=BROTON PROJECT RANDBOID <LINE> <LINE> We are on wipe number '+WipeNumber+'\r\n'+'ResetID='+ResetID+'\r\n'+'ServerPlayerID='+PlayerID
var inistatic = '\r\nPVP=true\r\nPauseEmpty=true\r\nGlobalChat=true\r\nChatStreams=s,r,a,w,y,sh,f,all\r\nOpen=true\r\nAutoCreateUserInWhiteList=false\r\nDisplayUserName=true\r\nShowFirstAndLastName=false\r\nSpawnPoint=0,0,0\r\nSafetySystem=true\r\nShowSafety=true\r\nSafetyToggleTimer=2\r\nSafetyCooldownTimer=3\r\nSpawnItems=\r\nDefaultPort=16261\r\nUDPPort=16262\r\nMods=\r\nMap=Muldraugh, KY\r\nDoLuaChecksum=true\r\nDenyLoginOnOverloadedServer=true\r\nPublic=false\r\nPublicName=BROTON PROJECT RANDBOID\r\nPublicDescription=Server auto resets on the 1st of each month. Sever config files are automatically randomized. Factions & Safehouse are on.\r\nMaxPlayers=32\r\nPingLimit=400\r\nHoursForLootRespawn=0\r\nMaxItemsForLootRespawn=4\r\nConstructionPreventsLootRespawn=true\r\nDropOffWhiteListAfterDeath=false\r\nNoFire=false\r\nAnnounceDeath=true\r\nMinutesPerPage=0.25\r\nSaveWorldEveryMinutes=0\r\nPlayerSafehouse=true\r\nAdminSafehouse=false\r\nSafehouseAllowTrepass=true\r\nSafehouseAllowFire=true\r\nSafehouseAllowLoot=true\r\nSafehouseAllowRespawn=true\r\nSafehouseDaySurvivedToClaim=0\r\nSafeHouseRemovalTime=144\r\nSafehouseAllowNonResidential=true\r\nAllowDestructionBySledgehammer=true\r\nSledgehammerOnlyInSafehouse=false\r\nKickFastPlayers=false\r\nRCONPort=27015\r\nRCONPassword=\r\nDiscordEnable=false\r\nDiscordToken=\r\nDiscordChannel=\r\nDiscordChannelID=\r\nPassword=HelloBrother\r\nMaxAccountsPerUser=0\r\nAllowCoop=true\r\nSleepAllowed=false\r\nSleepNeeded=false\r\nKnockedDownAllowed=true\r\nSneakModeHideFromOtherPlayers=true\r\nWorkshopItems=\r\nSteamScoreboard=true\r\nSteamVAC=true\r\nUPnP=true\r\nVoiceEnable=true\r\nVoiceMinDistance=10.0\r\nVoiceMaxDistance=100.0\r\nVoice3D=true\r\nSpeedLimit=70.0\r\nLoginQueueEnabled=false\r\nLoginQueueConnectTimeout=60\r\nserver_browser_announced_ip=\r\nPlayerRespawnWithSelf=false\r\nPlayerRespawnWithOther=false\r\nFastForwardMultiplier=40.0\r\nDisableSafehouseWhenPlayerConnected=false\r\nFaction=true\r\nFactionDaySurvivedToCreate=0\r\nFactionPlayersRequiredForTag=1\r\nDisableRadioStaff=false\r\nDisableRadioAdmin=true\r\nDisableRadioGM=true\r\nDisableRadioOverseer=false\r\nDisableRadioModerator=false\r\nDisableRadioInvisible=true\r\nClientCommandFilter=-vehicle.*;+vehicle.damageWindow;+vehicle.fixPart;+vehicle.installPart;+vehicle.uninstallPart\r\nClientActionLogs=ISEnterVehicle;ISExitVehicle;ISTakeEngineParts;\r\nPerkLogs=true\r\nItemNumbersLimitPerContainer=0\r\nBloodSplatLifespanDays=0\r\nAllowNonAsciiUsername=false\r\nBanKickGlobalSound=true\r\nRemovePlayerCorpsesOnCorpseRemoval=false\r\nTrashDeleteAll=true\r\nPVPMeleeWhileHitReaction=false\r\nMouseOverToSeeDisplayName=true\r\nHidePlayersBehindYou=true\r\nPVPMeleeDamageModifier=30.0\r\nPVPFirearmDamageModifier=50.0\r\nCarEngineAttractionModifier=0.5\r\nPlayerBumpPlayer=false\r\nMapRemotePlayerVisibility=2\r\nBackupsCount=5\r\nBackupsOnStart=true\r\nBackupsOnVersionChange=true\r\nBackupsPeriod=0\r\nAntiCheatProtectionType1=true\r\nAntiCheatProtectionType2=true\r\nAntiCheatProtectionType3=true\r\nAntiCheatProtectionType4=true\r\nAntiCheatProtectionType5=true\r\nAntiCheatProtectionType6=true\r\nAntiCheatProtectionType7=true\r\nAntiCheatProtectionType8=true\r\nAntiCheatProtectionType9=true\r\nAntiCheatProtectionType10=true\r\nAntiCheatProtectionType11=true\r\nAntiCheatProtectionType12=true\r\nAntiCheatProtectionType13=true\r\nAntiCheatProtectionType14=true\r\nAntiCheatProtectionType15=true\r\nAntiCheatProtectionType16=true\r\nAntiCheatProtectionType17=true\r\nAntiCheatProtectionType18=true\r\nAntiCheatProtectionType19=true\r\nAntiCheatProtectionType20=true\r\nAntiCheatProtectionType21=true\r\nAntiCheatProtectionType22=true\r\nAntiCheatProtectionType23=true\r\nAntiCheatProtectionType24=true\r\nAntiCheatProtectionType2ThresholdMultiplier=3.0\r\nAntiCheatProtectionType3ThresholdMultiplier=1.0\r\nAntiCheatProtectionType4ThresholdMultiplier=1.0\r\nAntiCheatProtectionType9ThresholdMultiplier=1.0\r\nAntiCheatProtectionType15ThresholdMultiplier=1.0\r\nAntiCheatProtectionType20ThresholdMultiplier=1.0\r\nAntiCheatProtectionType22ThresholdMultiplier=1.0\r\nAntiCheatProtectionType24ThresholdMultiplier=6.0'
var iniCode = iniinc+inistatic
var iniPath = 'servertest.ini'

//Write servertest.ini
fs.writeFile(iniPath, iniCode, (err) => {
    if (err) {
        console.error('Error writing ini file:', err);
    } else {
        console.log('ini file created successfully!');
    }
});

//Update mem
var updateWipeNumber = WipeNumber+1
var updateResetID = ResetID+1
var updatePlayerID = PlayerID+1
var jsonCode = '{"memory":{"wipenumber":'+updateWipeNumber+',"resetid":'+updateResetID+',"playerid":'+updatePlayerID+'}}'
var jsonPath = 'mem.json'

//Write mem.json
fs.writeFile(jsonPath, jsonCode, (err) => {
    if (err) {
        console.error('Error writing json file:', err);
    } else {
        console.log('json file created successfully!');
    }
});