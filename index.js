//########## DON'T EDIT ##########\\
//Script V2
const fs = require('fs');
const linebreak = '\r\n'

//Returns any number between min and max
function randARB(min, max) {
    return Math.random() * (max - min) + min;
}

//Returns a whole number between min and max
function randINT(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

//Returns "true" or "false"
function randTF() {
    if (Math.random() < 0.5){return "true"}else{return "false"};
  }

//########## SERVER INFO ##########\\
var serverloc ="./"
//var serverloc = "/home/pzserver/Zomboid/Server/"
var ininame = "pzserver.ini"
var luaname = "pzserver_SandboxVars.lua"

//Load saved Variables for server.ini from mem.json
const mem = JSON.parse(fs.readFileSync(serverloc + 'mem.json', { encoding: 'utf8', flag: 'r' }));
var WipeNumber = mem.memory.wipenumber
var WipeID = mem.memory.resetid
var PlayerID = mem.memory.playerid

//########## HELP ##########\\
//To randomize numbers and allow non-whole numbers use
//randARB(low,high)
//To randomize numbers and make sure the final response is a whole number use
//randINT(low,high)
//Variable info is shown under each variable.
//To pick a random true or false use
//randTF()

//########## Variables for SandboxVars.lua ##########\\
//##### GAME INFO #####\\
var VERSION = 5
//No Version options. Do not edit.

//##### ZOMBIES #####\\
var Zombies = 4
//Changing this sets the "Population Multiplier" advanced option.
//Default=4
//1 = Insane
//2 = Very High
//3 = High
//4 = Normal
//5 = Low
var Distribution = randINT(1, 2)
// Default=1
// 1 = Urban Focused
// 2 = No Focus

//##### DAY & NIGHT #####\\
var DayLength = 3
// Default=3
// 1 = 15 Minutes
// 2 = 30 Minutes
// 3 = 1 Hour
// 4 = 2 Hours
// 5 = 3 Hours
// 6 = 4 Hours
// 7 = 5 Hours
// 8 = 6 Hours
// 9 = 7 Hours
// 10 = 8 Hours
// 11 = 9 Hours
// 12 = 10 Hours
// 13 = 11 Hours
// 14 = 12 Hours
// 15 = 13 Hours
// 16 = 14 Hours
// 17 = 15 Hours
// 18 = 16 Hours
// 19 = 17 Hours
// 20 = 18 Hours
// 21 = 19 Hours
// 22 = 20 Hours
// 23 = 21 Hours
// 24 = 22 Hours
// 25 = 23 Hours
// 26 = 24 Hours
var NightLength = 3
// Governs the time from dusk to dawn.
// Default=3
// 1 = Always Night
// 2 = Long
// 3 = Normal
// 4 = Short
var NightDarkness = 3
// Governs the ambient lighting at night.
// Default=3
// 1 = Pitch Black
// 2 = Dark
// 3 = Normal

//##### WEATHER #####\\
var Temperature = randINT(1, 4)
// Controls the global temperature. Default=3
// 1 = Very Cold
// 2 = Cold
// 3 = Normal
// 4 = Hot
var Rain = randINT(1, 4)
// Controls how often it rains. Default=3
// 1 = Very Dry
// 2 = Dry
// 3 = Normal
// 4 = Rainy
var MaxFogIntensity = randINT(1, 2)
// Controls the maximum intensity of fog.
// Default=1
// 1 = Normal
// 2 = Moderate
var MaxRainFxIntensity = randINT(1, 2)
// Controls the maximum intensity of rain.
// Default=1
// 1 = Normal
// 2 = Moderate
var EnableSnowOnGround = true
// If disabled snow will not accumulate on ground but will still be visible on vegetation and rooftops.
// Options = true/false
// Default = false

//##### START TIME #####\\
var StartYear = 1
//I honestly have no idea how this works.
var StartMonth = randINT(1, 12)
//Default=7
//1 = January
//2 = February
//3 = March
//4 = April
//5 = May
//6 = June
//7 = July
//8 = August
//9 = September
//10 = October
//11 = November
//12 = December
var StartDay = randINT(1, 20)
//Day of the month to start on. Make sure to pick a day that exists.
var StartTime = randINT(1, 8)
//Default=2
//1 = 7 AM
//2 = 9 AM
//3 = 12 PM
//4 = 2 PM
//5 = 5 PM
//6 = 9 PM
//7 = 12 AM
//8 = 2 AM
var TimeSinceApo = randINT(1,12)
// This will affect starting world erosion and food spoilage. Default=1
// I have no idea what the time units are, the devs didn't specifiy in the LUA file, my best guess is months.
// 1 = 0 Time units
// 2 = 1 Time units
// 3 = 2 Time units
// 4 = 3 Time units
// 5 = 4 Time units
// 6 = 5 Time units
// 7 = 6 Time units
// 8 = 7 Time units
// 9 = 8 Time units
// 10 = 9 Time units
// 11 = 10 Time units
// 12 = 11 Time units

//##### Utilities #####\\
var WaterShut = randINT(2, 7)
//Default=2
//1 = Instant
//2 = 0-30 Days
//3 = 0-2 Months
//4 = 0-6 Months
//5 = 0-1 Year
//6 = 0-5 Years
//7 = 2-6 Months
var WaterShutModifier = randINT(1, 50)
//Minimum=-1 Maximum=2147483647 Default=14
var ElecShut = randINT(2, 7)
//Default=2
//1 = Instant
//2 = 0-30 Days
//3 = 0-2 Months
//4 = 0-6 Months
//5 = 0-1 Year
//6 = 0-5 Years
//7 = 2-6 Months
var ElecShutModifier = randINT(1, 50)
//Minimum=-1 Maximum=2147483647 Default=14

//##### LOOT #####\\
var FoodLoot = randINT(4, 6)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var CannedFoodLoot = randINT(4, 6)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var LiteratureLoot = randINT(3, 5)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var SurvivalGearsLoot = randINT(3, 5)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var MedicalLoot = randINT(3, 5)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var WeaponLoot = randINT(3, 5)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var RangedWeaponLoot = randINT(3, 5)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var AmmoLoot = randINT(3, 5)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var MechanicsLoot = randINT(3, 5)
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var OtherLoot = randINT(3, 5)
// Everything else. Also affects foraging for all items in Town/Road zones.
// Default=4
// 1 = None (not recommended)
// 2 = Insanely Rare
// 3 = Extremely Rare
// 4 = Rare
// 5 = Normal
// 6 = Common
var LootRespawn = randINT(1,4)
// Items will respawn in already-looted containers in towns and trailer parks. Items will not respawn in player-made containers. Default=None
// 1 = None
// 2 = Every Day
// 3 = Every Week
// 4 = Every Month
var SeenHoursPreventLootRespawn = randINT(0,24)
// When > 0, loot will not respawn in zones that have been visited within this number of in-game hours.
// Minimum=0
// Maximum=2147483647
// Default=0

//##### FOOD #####\\
var Nutrition = "true"
// Nutritional value of food affects the player's condition.
// options = true/false
// Default = true
var FoodRotSpeed = 3
// Define how fast the food will spoil inside or outside fridge. Default=Normal
// 1 = Very Fast
// 2 = Fast
// 3 = Normal
// 4 = Slow
var FridgeFactor = 3
// Define how much a fridge will be effective. Default=Normal
// 1 = Very Low
// 2 = Low
// 3 = Normal
// 4 = High

//##### FARMING #####\\
//These options confuse the fuck out of me. I don't know how they all work together. Good luck.
var ErosionSpeed = 3
// Number of days until 100% growth. Default=Normal (100 Days)
// 1 = Very Fast (20 Days)
// 2 = Fast (50 Days)
// 3 = Normal (100 Days)
// 4 = Slow (200 Days)
var ErosionDays = 0
// Number of days until 100% growth.
// Minimum=-1 (No Growth)
// Maximum 36500 (100 years)
// Default=0 (use the Erosion Speed option)
var Farming = 3
// Controls the speed of plant growth. Default=3
// 1 = Very Fast
// 2 = Fast
// 3 = Normal
// 4 = Slow
var CompostTime = 2
// Controls the time it takes for food to break down in a composter.
// Default=2
// 1 = 1 Week
// 2 = 2 Weeks
// 3 = 3 Weeks
// 4 = 4 Weeks
// 5 = 6 Weeks
// 6 = 8 Weeks
// 7 = 10 Weeks
var PlantResilience = 3
// Will influence how much water the plant will lose per day and their ability to avoid disease.
// Default=3
// 1 = Very High
// 2 = High
// 3 = Normal
// 4 = Low
var PlantAbundance = 3
//Controls the yield of plants when harvested. Default=Normal
//1 = Very Poor
//2 = Poor
//3 = Normal
//4 = Abundant

//##### FISHING & FORAGING #####\\   
var NatureAbundance = 3
// Controls the abundance of fish and general forage. Default=Normal
// 1 = Very Poor
// 2 = Poor
// 3 = Normal
// 4 = Abundant
EnableTaintedWaterText = "true"
// if disabled, tainted water will not have a warning marking it as such
// Options = true/false
// Default = false

//##### PLAYER XP & Skills #####\\
var XpMultiplier = randARB(1, 5)
// Modifies the base XP gain from actions by this number.
// Minimum=0.00
// Maximum=1000.00
// Default=1.00
var XpMultiplierAffectsPassive = randTF()
// Determines if the XP multiplier affects passively levelled skills eg. Fitness and Strength.
// Options = true/false
// Default = false
var CharacterFreePoints = randINT(0, 10)
// Adds free points during character creation. Higher numbers make players more overpowered.
// Minimum=-100
// Maximum=100
// Default=0
var MultiHitZombies = randTF()
// When enabled certain melee weapons will be able to strike multiple zombies in one hit.
// Options = true/false
// Default = false
var AttackBlockMovements = randTF()
// Disable to walk unimpeded while melee attacking.
// Options = true/false
// Default = false
var AllClothesUnlocked = randTF()
// I assume this modifies the character creator? If that's the case this being on would be really OP.
// Options = true/false
// Default = false
var RearVulnerability = randINT(1, 3)
// Chance of being bitten when a zombie attacks from behind.
// Default=3
// 1 = Low
// 2 = Medium
// 3 = High

//##### Player Needs #####\\
var StatsDecrease = 3
// How fast character's hunger, thirst and fatigue will decrease.
// Default=3
// 1 = Very Fast
// 2 = Fast
// 3 = Normal
// 4 = Slow
// 5 = Very Slow
var EndRegen = 3
// Recovery from being tired from performing actions Default=Normal
// 1 = Very Fast
// 2 = Fast
// 3 = Normal
// 4 = Slow
var InjurySeverity = 2
// Increase and decrease the impact injuries have on your body, and their healing time.
// Default=2
// 1 = Low
// 2 = Normal
var BoneFracture = "true"
// Enable or disable broken limbs when survivors receive injuries from impacts, zombie damage and falls.
// Options = true/false
// Default = true
var DecayingCorpseHealthImpact = randINT(1, 3)
// Governs impact that nearby decaying bodies has on the player's health and emotions.
// Default=3
// 1 = None
// 2 = Low
// 3 = Normal
var ClothingDegradation = randINT(2, 3)
// Governs how quickly clothing degrades, becomes dirty, and bloodied.
// Default=3
// 1 = Disabled
// 2 = Slow
// 3 = Normal
var EnablePoisoning = randINT(1, 2)
// Governs if poisoning food is enabled. Default=True
// 1 = True
// 2 = False

//##### PLAYER CONSTRUCTION#####\\
var ConstructionBonusPoints = randINT(3,4)
// Gives player-built constructions extra hit points so they are more resistant to zombie damage.
// Default=3
// 1 = Very Low
// 2 = Low
// 3 = Normal
// 4 = High
var AllowExteriorGenerator = true
// If enabled, generators will work on exterior tiles, allowing for example to power gas pump.
// Options = true/false
// Default = true

//##### STARTER KIT #####\\
var StarterKit = "false"
// Spawn with chips, water bottle, school bag, baseball bat and a hammer.
// Options = true/false
// Default = false

//##### BUILDINGS #####\\
var LockedHouses = 6
// How frequently homes and buildings will be discovered locked
// Default=6
// 1 = Never
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often
// 6 = Very Often
var Alarm = 4
// Default=Sometimes
// 1 = Never
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often
// 6 = Very Often
var LightBulbLifespan = 1.0
//The higher the value, the longer lightbulbs last before breaking.
// If 0, lightbulbs will never break.
//Does not affect vehicle headlights.
//Minimum=0.00
//Maximum=1000.00
//Default=1.00

//##### VEHICLES #####\\
var ZombieAttractionMultiplier = 1.0
// Use this to multiply or reduce engine general loudness. Minimum=0.00 Maximum=100.00 Default=1.00
var VehicleEasyUse = "false"
// Governs whether cars are locked, need keys to start etc.
// Options = true/false
// Default = false
var TrafficJam = randTF()
// Enable or disable traffic jams that spawn on the main roads of the map.
// Options = true/false
// Default = false
var CarSpawnRate = randINT(1, 4)
// Governs how frequently cars are discovered on the map
// Default=3
// 1 = None
// 2 = Very Low
// 3 = Low
// 4 = Normal
var ChanceHasGas = randINT(1, 2)
// Governs the chances of finding vehicles with gas in the tank.
// Default=1
// 1 = Low
// 2 = Normal
var InitialGas = randINT(1, 5)
// Governs how full gas tanks will be in discovered cars.
// Default=2
// 1 = Very Low
// 2 = Low
// 3 = Normal
// 4 = High
// 5 = Very High
var LockedCar = randINT(1, 5)
// Default=3
// 1 = Never
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often
var CarGeneralCondition = randINT(1, 4)
// General condition of vehicles discovered on the map
// Default=2
// 1 = Very Low
// 2 = Low
// 3 = Normal
// 4 = High
var CarDamageOnImpact = randINT(1, 4)
// Governs the amount of damage dealt to vehicles that crash.
// Default=3
// 1 = Very Low
// 2 = Low
// 3 = Normal
// 4 = High
var PlayerDamageFromCrash = "true"
// Enable or disable player getting damage from being in a car accident.
// Options = true/false
// Default = true
var DamageToPlayerFromHitByACar = randINT(1, 4)
// Damage received by the player from the car in a collision.
// Default=1
// 1 = None
// 2 = Low
// 3 = Normal
// 4 = High
var CarAlarm = randINT(1, 5)
// How frequently cars will be discovered with an alarm.
// Default=2
// 1 = Never
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often
var RecentlySurvivorVehicles = randINT(1, 3)
// Governs whether player can discover a car that has been maintained and cared for after the infection struck.
// Default=2
// 1 = None
// 2 = Low
// 3 = Normal
var SirenShutoffHours = 0.00
// How many in-game hours before a wailing siren shuts off.
// Minimum=0.00
// Maximum=168.00
// Default=0.00
var EnableVehicles = true
// Enables vehicles to spawn.
// Options = true/false
// Default = true

//##### FUEL #####\\
var GeneratorFuelConsumption = 0.5
// How much fuel is consumed per in-game hour.
// Minimum=0.00
// Maximum=100.00
// Default=1.00
var FuelStationGas = randINT(1, 8)
// Governs how full gas tanks in fuel station will be, initially.
// Default=5
// 1 = Empty
// 2 = Super Low
// 3 = Very Low
// 4 = Low
// 5 = Normal
// 6 = High
// 7 = Very High
// 8 = Full
var CarGasConsumption = randARB(0.5,2)
// How gas-hungry vehicles on the map are.
// Minimum=0.00
// Maximum=100.00
// Default=1.00

//##### WORLD ITEM REMOVAL #####\\
var WorldItemRemovalList = '"Base.Hat,Base.Glasses,Base.Maggots"'
var HoursForWorldItemRemoval = 24.0
//Number of hours since an item was dropped on the ground before it is removed.
//Items are removed the next time that part of the map is loaded. 
//Zero means items are not removed.
//Minimum=0.00
//Maximum=2147483647.00
//Default=24.00
var ItemRemovalListBlacklistToggle = "false"
// If true, any items *not* in WorldItemRemovalList will be removed.
// Options = true/false
// Default = false
var HoursForCorpseRemoval = 216.0
// How long before zombie bodies disappear.
// Minimum=-1.00
// Maximum=2147483647.00
// Default=216.00
var DaysForRottenFoodRemoval = -1
// Number of in-game days before rotten food is removed from the map.
// -1 means rotten food is never removed.
// Minimum=-1
// Maximum=2147483647
// Default=-1

//##### RANDOM EVENTS#####\\
var Helicopter = randINT(1, 3)
//How regularly helicopters pass over the event zone.
// Default=2
// 1 = Never
// 2 = Once
// 3 = Sometimes
var MetaEvent = 2
// How often zombie attracting metagame events like distant gunshots will occur.
// Default=2
// 1 = Never
// 2 = Sometimes
var SleepingEvent = 1
// Governs night-time metagame events during the player's sleep.
// Default=1
// 1 = Never
// 2 = Sometimes
var GeneratorSpawning = 3
// Increase/decrease the chance of electrical generators spawning on the map.
// Default=3
// 1 = Extremely Rare
// 2 = Rare
// 3 = Sometimes
// 4 = Often
var SurvivorHouseChance = randINT(1, 5)
// Increase/decrease probability of discovering randomized safe houses on the map: either burnt out, containing loot stashes, dead survivor bodies etc.
// Default=3
// 1 = Never
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often
var VehicleStoryChance = randINT(1, 5)
// Default=3
// 1 = Never
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often
var ZoneStoryChance = randINT(1, 5)
// Default=3
// 1 = Never
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often
var AnnotatedMapChance = randINT(1, 5)
// Impacts on how often a looted map will have annotations marked on it by a deceased survivor.
// Default=4
// 1 = Never
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often

//##### BLOOD #####\
var BloodLevel = randINT(2, 4)
// How much blood is sprayed on floor and walls.
// Default=3
// 1 = None
// 2 = Low
// 3 = Normal
// 4 = High
var MaggotSpawn = randINT(1, 2)
// Default=1
// 1 = In and around bodies
// 2 = In bodies only

//##### ANTI GRIEF #####\\
var FireSpread = "true"
// Does fire spread?
// Options = true/false
// Default = true

//########## SandboxVars.lua - Map ##########\\
var AllowMiniMap = "false"
// Options = true/false
// Default = false
var AllowWorldMap = "true"
// Options = true/false
// Default = true
var MapAllKnown = "false"
// Options = true/false
// Default = false

//########## SandboxVars.lua - ZombieLore ##########\\
var Cognition = 3
// Controls zombie intelligence.
// Default=3
// 1 = Navigate + Use Doors
// 2 = Navigate
// 3 = Basic Navigation
var ThumpNoChasing = randTF()
// Zombies that have not seen/heard player can attack doors and constructions while roaming.
// Options = true/false
// Default = false
var ThumpOnConstruction = randTF()
// Governs whether or not zombies can destroy player constructions and defences.
// Options = true/false
// Default = true
var TriggerHouseAlarm = randTF()
// Allows zombies to trigger house alarms when breaking through windows and doors.
// Options = true/false
// Default = false
var ZombiesDragDown = randTF()
// When enabled if multiple zombies are attacking they can drag you down to feed. Dependent on zombie strength.
// Options = true/false
// Default = true
var ZombiesFenceLunge = randTF()
// When enabled zombies will have a chance to lunge after climbing over a fence if you're too close.
// Options = true/false
// Default = true
var Speed = randINT(1, 3)
// Controls the zombie movement rate.
// Default=2
// 1 = Sprinters
// 2 = Fast Shamblers
// 3 = Shamblers
var Strength = randINT(1, 3)
// Controls the damage zombies inflict per attack.
// Default=2
// 1 = Superhuman
// 2 = Normal
// 3 = Weak
var Toughness = randINT(1, 3)
// Controls the difficulty to kill zombies.
// Default=2
// 1 = Tough
// 2 = Normal
// 3 = Fragile
var Transmission = randINT(1, 3)
// Controls how the zombie virus spreads.
// Default=1
// 1 = Blood + Saliva
// 2 = Saliva Only
// 3 = Everyone's Infected
var Mortality = randINT(1, 6)
// Controls how quickly the infection takes effect.
// Default=5
// 1 = Instant
// 2 = 0-30 Seconds
// 3 = 0-1 Minutes
// 4 = 0-12 Hours
// 5 = 2-3 Days
// 6 = 1-2 Weeks
var Reanimate = randINT(1, 5)
// Controls how quickly corpses rise as zombies.
// Default=3
// 1 = Instant
// 2 = 0-30 Seconds
// 3 = 0-1 Minutes
// 4 = 0-12 Hours
// 5 = 2-3 Days
var CrawlUnderVehicle = randINT(1, 6)
// Controls which zombies can crawl under vehicles.
// Default=5
// 1 = Crawlers Only
// 2 = Extremely Rare
// 3 = Rare
// 4 = Sometimes
// 5 = Often
// 6 = Very Often
var Memory = randINT(1, 4)
// Controls how long zombies remember players after seeing or hearing.
// Default=2
// 1 = Long
// 2 = Normal
// 3 = Short
// 4 = None
var Sight = randINT(1, 3)
// Controls zombie vision radius.
// Default=2
// 1 = Eagle
// 2 = Normal
// 3 = Poor
var Hearing = randINT(1, 3)
// Controls zombie hearing radius.
// Default=2
// 1 = Pinpoint
// 2 = Normal
// 3 = Poor
var ActiveOnly = randINT(1, 3)
// Governs whether zombies are more active during the day, or whether they act more nocturnally.
// Active zombies will use the speed set in the "Speed" setting. Inactive zombies will be slower, and tend not to give chase.
// Default=1
// 1 = Both
// 2 = Night
// 3 = Day
var DisableFakeDead = randINT(1, 2)
// Default=1
// 1 = Some zombies in the world will pretend to be dead
// 2 = Some zombies in the world, as well as some you 'kill', can pretend to be dead

//########## SandboxVars.lua - ZombieConfig ##########\\
var RespawnHours = randARB(0.00,144.00)
// The number of hours that must pass before zombies may respawn in a cell. If zero, spawning is disabled.
// Minimum=0.00
// Maximum=8760.00
// Default=72.00
var RespawnUnseenHours = randARB(16.00,32.00)
// The number of hours that a chunk must be unseen before zombies may respawn in it.
// Minimum=0.00
// Maximum=8760.00
// Default=16.00
var RespawnMultiplier = randARB(0.00,0.15)
// The fraction of a cell's desired population that may respawn every RespawnHours.
// Minimum=0.00
// Maximum=1.00
// Default=0.10
var RedistributeHours = randARB(10.00,24.00)
// The number of hours that must pass before zombies migrate to empty parts of the same cell. If zero, migration is disabled. Minimum=0.00 Maximum=8760.00 Default=12.00
var FollowSoundDistance = randINT(10,110)
// The distance a zombie will try to walk towards the last sound it heard. Minimum=10 Maximum=1000 Default=100
var RallyGroupSize = randINT(0,25)
// The size of groups real zombies form when idle.
// Zero means zombies don't form groups.
// Groups don't form inside buildings or forest zones.
// Minimum=0
// Maximum=1000
// Default=20
var RallyTravelDistance = randINT(5,25)
// The distance real zombies travel to form groups when idle.
// Minimum=5
// Maximum=50
// Default=20
var RallyGroupSeparation = randINT(12,25)
// The distance between zombie groups.
// Minimum=5
// Maximum=25
// Default=15
var RallyGroupRadius = randINT(1,10)
// How close members of a group stay to the group's leader.
// Minimum=1
// Maximum=10
// Default=3
var PopulationMultiplier = randARB(0.5, 2)
// Set by the "Zombie Count" population option.
// Minimum=0.00
// Maximum=4.00
// Default=1.00
var PopulationStartMultiplier = randARB(0.00, 3.00)
// Adjusts the desired population at the start of the game.
// Minimum=0.00
// Maximum=4.00
// Default=1.00
var PopulationPeakMultiplier = randARB(0.00, 3.00)
// Adjusts the desired population on the peak day.
// Minimum=0.00
// Maximum=4.00
// Default=1.50
var PopulationPeakDay = randINT(1, 365)
// The day when the population reaches it's peak. Minimum=1 Maximum=365 Default=28

//########## SERVER.INI VARIABLES ##########\\
var ServerWelcomeMessage='BROTON PROJECT RANDBOID <LINE> <LINE> We are on wipe number '+WipeNumber
var ResetID=WipeID
var ServerPlayerID=PlayerID
var PVP='true'
var PauseEmpty='true'
var GlobalChat='true'
var ChatStreams='s,r,a,w,y,sh,f,all'
var Open='true'
var AutoCreateUserInWhiteList='false'
var DisplayUserName='true'
var ShowFirstAndLastName='false'
var SpawnPoint='0,0,0'
var SafetySystem='true'
var ShowSafety='true'
var SafetyToggleTimer=2
var SafetyCooldownTimer=3
var SpawnItems=''
var DefaultPort=16261
var UDPPort=16262
var Mods=''
var Map='Muldraugh, KY'
var DoLuaChecksum='true'
var DenyLoginOnOverloadedServer='true'
var Public='false'
var PublicName='BROTON PROJECT RANDBOID'
var PublicDescription='Server auto resets on the 1st of each month. Sever config files are automatically randomized. Factions & Safehouse are on.'
var MaxPlayers=32
var PingLimit=400
var HoursForLootRespawn=0
var MaxItemsForLootRespawn=4
var ConstructionPreventsLootRespawn='true'
var DropOffWhiteListAfterDeath='false'
var NoFire='false'
var AnnounceDeath='true'
var MinutesPerPage=0.25
var SaveWorldEveryMinutes=0
var PlayerSafehouse='true'
var AdminSafehouse='false'
var SafehouseAllowTrepass='true'
var SafehouseAllowFire='true'
var SafehouseAllowLoot='true'
var SafehouseAllowRespawn='true'
var SafehouseDaySurvivedToClaim=0
var SafeHouseRemovalTime=144
var SafehouseAllowNonResidential='true'
var AllowDestructionBySledgehammer='true'
var SledgehammerOnlyInSafehouse='false'
var KickFastPlayers='false'
var RCONPort=27015
var RCONPassword=''
var DiscordEnable='false'
var DiscordToken=''
var DiscordChannel=''
var DiscordChannelID=''
var Password='HelloBrother'
var MaxAccountsPerUser=0
var AllowCoop='true'
var SleepAllowed='false'
var SleepNeeded='false'
var KnockedDownAllowed='true'
var SneakModeHideFromOtherPlayers='true'
var WorkshopItems=''
var SteamScoreboard='true'
var SteamVAC='true'
var UPnP='true'
var VoiceEnable='true'
var VoiceMinDistance=10.0
var VoiceMaxDistance=100.0
var Voice3D='true'
var SpeedLimit=70.0
var LoginQueueEnabled='false'
var LoginQueueConnectTimeout=60
var server_browser_announced_ip=''
var PlayerRespawnWithSelf='false'
var PlayerRespawnWithOther='false'
var FastForwardMultiplier=40.0
var DisableSafehouseWhenPlayerConnected='false'
var Faction='true'
var FactionDaySurvivedToCreate=0
var FactionPlayersRequiredForTag=1
var DisableRadioStaff='false'
var DisableRadioAdmin='true'
var DisableRadioGM='true'
var DisableRadioOverseer='false'
var DisableRadioModerator='false'
var DisableRadioInvisible='true'
var ClientCommandFilter='-vehicle.*;+vehicle.damageWindow;+vehicle.fixPart;+vehicle.installPart;+vehicle.uninstallPart'
var ClientActionLogs='ISEnterVehicle;ISExitVehicle;ISTakeEngineParts;'
var PerkLogs='true'
var ItemNumbersLimitPerContainer=0
var BloodSplatLifespanDays=0
var AllowNonAsciiUsername='false'
var BanKickGlobalSound='true'
var RemovePlayerCorpsesOnCorpseRemoval='false'
var TrashDeleteAll='true'
var PVPMeleeWhileHitReaction='false'
var MouseOverToSeeDisplayName='true'
var HidePlayersBehindYou='true'
var PVPMeleeDamageModifier=30.0
var PVPFirearmDamageModifier=50.0
var CarEngineAttractionModifier=0.5
var PlayerBumpPlayer='false'
var MapRemotePlayerVisibility=2
var BackupsCount=5
var BackupsOnStart='true'
var BackupsOnVersionChange=true
var BackupsPeriod=0
var AntiCheatProtectionType1='true'
var AntiCheatProtectionType2='true'
var AntiCheatProtectionType3='true'
var AntiCheatProtectionType4='true'
var AntiCheatProtectionType5='true'
var AntiCheatProtectionType6='true'
var AntiCheatProtectionType7='true'
var AntiCheatProtectionType8='true'
var AntiCheatProtectionType9='true'
var AntiCheatProtectionType10='true'
var AntiCheatProtectionType11='true'
var AntiCheatProtectionType12='true'
var AntiCheatProtectionType13='true'
var AntiCheatProtectionType14='true'
var AntiCheatProtectionType15='true'
var AntiCheatProtectionType16='true'
var AntiCheatProtectionType17='true'
var AntiCheatProtectionType18='true'
var AntiCheatProtectionType19='true'
var AntiCheatProtectionType20='true'
var AntiCheatProtectionType21='true'
var AntiCheatProtectionType22='true'
var AntiCheatProtectionType23='true'
var AntiCheatProtectionType24='true'
var AntiCheatProtectionType2ThresholdMultiplier=3.0
var AntiCheatProtectionType3ThresholdMultiplier=1.0
var AntiCheatProtectionType4ThresholdMultiplier=1.0
var AntiCheatProtectionType9ThresholdMultiplier=1.0
var AntiCheatProtectionType15ThresholdMultiplier=1.0
var AntiCheatProtectionType20ThresholdMultiplier=1.0
var AntiCheatProtectionType22ThresholdMultiplier=1.0
var AntiCheatProtectionType24ThresholdMultiplier=6.0

//########## DO NOT EDIT ##########\\
//Complie SandboxVars.lua
var vars = "VERSION = " + VERSION + ","+"Zombies = " + Zombies + ","+"Distribution = " + Distribution + ","+"DayLength = " + DayLength + ","+"StartYear = " + StartYear + ","+"StartMonth = " + StartMonth + ","+"StartDay = " + StartDay + ","+"StartTime = " + StartTime + ","+"WaterShut = " + WaterShut + ","+"ElecShut = " + ElecShut + ","+"WaterShutModifier = " + WaterShutModifier + ","+"ElecShutModifier = " + ElecShutModifier + ","+"FoodLoot = " + FoodLoot + ","+"CannedFoodLoot = " + CannedFoodLoot + ","+"LiteratureLoot = " + LiteratureLoot + ","+"SurvivalGearsLoot = " + SurvivalGearsLoot + ","+"MedicalLoot = " + MedicalLoot + ","+"WeaponLoot = " + WeaponLoot + ","+"RangedWeaponLoot = " + RangedWeaponLoot + ","+"AmmoLoot = " + AmmoLoot + ","+"MechanicsLoot = " + MechanicsLoot + ","+"OtherLoot = " + OtherLoot + ","+"Temperature = " + Temperature + ","+"Rain = " + Rain + ","+"ErosionSpeed = " + ErosionSpeed + ","+"ErosionDays = " + ErosionDays + ","+"XpMultiplier = " + XpMultiplier + ","+"XpMultiplierAffectsPassive = " + XpMultiplierAffectsPassive + ","+"ZombieAttractionMultiplier = " + ZombieAttractionMultiplier + ","+"VehicleEasyUse = " + VehicleEasyUse + ","+"Farming = " + Farming + ","+"CompostTime = " + CompostTime + ","+"StatsDecrease = " + StatsDecrease + ","+"NatureAbundance = " + NatureAbundance + ","+"Alarm = " + Alarm + ","+"LockedHouses = " + LockedHouses + ","+"StarterKit = " + StarterKit + ","+"Nutrition = " + Nutrition + ","+"FoodRotSpeed = " + FoodRotSpeed + ","+"FridgeFactor = " + FridgeFactor + ","+"LootRespawn = " + LootRespawn + ","+"SeenHoursPreventLootRespawn = " + SeenHoursPreventLootRespawn + ","+"WorldItemRemovalList = " + WorldItemRemovalList + ","+"HoursForWorldItemRemoval = " + HoursForWorldItemRemoval + ","+"ItemRemovalListBlacklistToggle = " + ItemRemovalListBlacklistToggle + ","+"TimeSinceApo = " + TimeSinceApo + ","+"PlantResilience = " + PlantResilience + ","+"PlantAbundance = " + PlantAbundance + ","+"EndRegen = " + EndRegen + ","+"Helicopter = " + Helicopter + ","+"MetaEvent = " + MetaEvent + ","+"SleepingEvent = " + SleepingEvent + ","+"GeneratorSpawning = " + GeneratorSpawning + ","+"GeneratorFuelConsumption = " + GeneratorFuelConsumption + ","+"SurvivorHouseChance = " + SurvivorHouseChance + ","+"VehicleStoryChance = " + VehicleStoryChance + ","+"ZoneStoryChance = " + ZoneStoryChance + ","+"AnnotatedMapChance = " + AnnotatedMapChance + ","+"CharacterFreePoints = " + CharacterFreePoints + ","+"ConstructionBonusPoints = " + ConstructionBonusPoints + ","+"NightDarkness = " + NightDarkness + ","+"NightLength = " + NightLength + ","+"InjurySeverity = " + InjurySeverity + ","+"BoneFracture = " + BoneFracture + ","+"HoursForCorpseRemoval = " + HoursForCorpseRemoval + ","+"DecayingCorpseHealthImpact = " + DecayingCorpseHealthImpact + ","+"BloodLevel = " + BloodLevel + ","+"ClothingDegradation = " + ClothingDegradation + ","+"FireSpread = " + FireSpread + ","+"DaysForRottenFoodRemoval = " + DaysForRottenFoodRemoval + ","+"AllowExteriorGenerator = " + AllowExteriorGenerator + ","+"MaxFogIntensity = " + MaxFogIntensity + ","+"MaxRainFxIntensity = " + MaxRainFxIntensity + ","+"EnableSnowOnGround = " + EnableSnowOnGround + ","+"MultiHitZombies = " + MultiHitZombies + ","+"RearVulnerability = " + RearVulnerability + ","+"AttackBlockMovements = " + AttackBlockMovements + ","+"AllClothesUnlocked = " + AllClothesUnlocked + ","+"EnableTaintedWaterText = " + EnableTaintedWaterText + ","+"CarSpawnRate = " + CarSpawnRate + ","+"ChanceHasGas = " + ChanceHasGas + ","+"InitialGas = " + InitialGas + ","+"FuelStationGas = " + FuelStationGas + ","+"CarGasConsumption = " + CarGasConsumption + ","+"LockedCar = " + LockedCar + ","+"CarGeneralCondition = " + CarGeneralCondition + ","+"CarDamageOnImpact = " + CarDamageOnImpact + ","+"DamageToPlayerFromHitByACar = " + DamageToPlayerFromHitByACar + ","+"TrafficJam = " + TrafficJam + ","+"CarAlarm = " + CarAlarm + ","+"PlayerDamageFromCrash = " + PlayerDamageFromCrash + ","+"SirenShutoffHours = " + SirenShutoffHours + ","+"RecentlySurvivorVehicles = " + RecentlySurvivorVehicles + ","+"EnableVehicles = " + EnableVehicles + ","+"EnablePoisoning = " + EnablePoisoning + ","+"MaggotSpawn = " + MaggotSpawn + ","+"LightBulbLifespan = " + LightBulbLifespan + ","
var map = 'Map = {'+"AllowMiniMap = " + AllowMiniMap + ","+"AllowWorldMap = " + AllowWorldMap + ","+"MapAllKnown = " + MapAllKnown + ","+'},'
var ZombieLore = 'ZombieLore = {'+"Speed = " + Speed + ","+"Strength = " + Strength + ","+"Toughness = " + Toughness + ","+"Transmission = " + Transmission + ","+"Mortality = " + Mortality + ","+"Reanimate = " + Reanimate + ","+"Cognition = " + Cognition + ","+"CrawlUnderVehicle = " + CrawlUnderVehicle + ","+"Memory = " + Memory + ","+"Sight = " + Sight + ","+"Hearing = " + Hearing + ","+"ThumpNoChasing = " + ThumpNoChasing + ","+"ThumpOnConstruction = " + ThumpOnConstruction + ","+"ActiveOnly = " + ActiveOnly + ","+"TriggerHouseAlarm = " + TriggerHouseAlarm + ","+"ZombiesDragDown = " + ZombiesDragDown + ","+"ZombiesFenceLunge = " + ZombiesFenceLunge + ","+"DisableFakeDead = " + DisableFakeDead + ","+'},'
var ZombieConfig = 'ZombieConfig = {'+"PopulationMultiplier = " + PopulationMultiplier + ","+"PopulationStartMultiplier = " + PopulationStartMultiplier + ","+"PopulationPeakMultiplier = " + PopulationPeakMultiplier + ","+"PopulationPeakDay = " + PopulationPeakDay + ","+"RespawnHours = " + RespawnHours + ","+"RespawnUnseenHours = " + RespawnUnseenHours + ","+"RespawnMultiplier = " + RespawnMultiplier + ","+"RedistributeHours = " + RedistributeHours + ","+"FollowSoundDistance = " + FollowSoundDistance + ","+"RallyGroupSize = " + RallyGroupSize + ","+"RallyTravelDistance = " + RallyTravelDistance + ","+"RallyGroupSeparation = " + RallyGroupSeparation + ","+"RallyGroupRadius = " + RallyGroupRadius + ","+'},'
var sandboxVars = 'SandboxVars = {'+vars+map+ZombieLore+ZombieConfig+'}';
var luaCode = sandboxVars
var luaPath = serverloc + luaname

//Write SandboxVars.lua
fs.writeFile(luaPath, luaCode, (err) => {
    if (err) {
        console.error('Error writing Lua file:', err);
    } else {
        console.log('Lua file created successfully!');
    }
});

//Compile server.ini
var iniCode = 'ServerWelcomeMessage = ' + ServerWelcomeMessage + linebreak +"ResetID = " + ResetID + linebreak +"ServerPlayerID = " + ServerPlayerID + linebreak +"PVP = " + PVP + linebreak +"PauseEmpty = " + PauseEmpty + linebreak +"GlobalChat = " + GlobalChat + linebreak +"ChatStreams = " + ChatStreams + linebreak +"Open = " + Open + linebreak +"AutoCreateUserInWhiteList = " + AutoCreateUserInWhiteList + linebreak +"DisplayUserName = " + DisplayUserName + linebreak +"ShowFirstAndLastName = " + ShowFirstAndLastName + linebreak +"SpawnPoint = " + SpawnPoint + linebreak +"SafetySystem = " + SafetySystem + linebreak +"ShowSafety = " + ShowSafety + linebreak +"SafetyToggleTimer = " + SafetyToggleTimer + linebreak +"SafetyCooldownTimer = " + SafetyCooldownTimer + linebreak +"SpawnItems = " + SpawnItems + linebreak +"DefaultPort = " + DefaultPort + linebreak +"UDPPort = " + UDPPort + linebreak +"Mods = " + Mods + linebreak +"Map = " + Map + linebreak +"DoLuaChecksum = " + DoLuaChecksum + linebreak +"DenyLoginOnOverloadedServer = " + DenyLoginOnOverloadedServer + linebreak +"Public = " + Public + linebreak +"PublicName = " + PublicName + linebreak +"PublicDescription = " + PublicDescription + linebreak +"MaxPlayers = " + MaxPlayers + linebreak +"PingLimit = " + PingLimit + linebreak +"HoursForLootRespawn = " + HoursForLootRespawn + linebreak +"MaxItemsForLootRespawn = " + MaxItemsForLootRespawn + linebreak +"ConstructionPreventsLootRespawn = " + ConstructionPreventsLootRespawn + linebreak +"DropOffWhiteListAfterDeath = " + DropOffWhiteListAfterDeath + linebreak +"NoFire = " + NoFire + linebreak +"AnnounceDeath = " + AnnounceDeath + linebreak +"MinutesPerPage = " + MinutesPerPage + linebreak +"SaveWorldEveryMinutes = " + SaveWorldEveryMinutes + linebreak +"PlayerSafehouse = " + PlayerSafehouse + linebreak +"AdminSafehouse = " + AdminSafehouse + linebreak +"SafehouseAllowTrepass = " + SafehouseAllowTrepass + linebreak +"SafehouseAllowFire = " + SafehouseAllowFire + linebreak +"SafehouseAllowLoot = " + SafehouseAllowLoot + linebreak +"SafehouseAllowRespawn = " + SafehouseAllowRespawn + linebreak +"SafehouseDaySurvivedToClaim = " + SafehouseDaySurvivedToClaim + linebreak +"SafeHouseRemovalTime = " + SafeHouseRemovalTime + linebreak +"SafehouseAllowNonResidential = " + SafehouseAllowNonResidential + linebreak +"AllowDestructionBySledgehammer = " + AllowDestructionBySledgehammer + linebreak +"SledgehammerOnlyInSafehouse = " + SledgehammerOnlyInSafehouse + linebreak +"KickFastPlayers = " + KickFastPlayers + linebreak +"RCONPort = " + RCONPort + linebreak +"RCONPassword = " + RCONPassword + linebreak +"DiscordEnable = " + DiscordEnable + linebreak +"DiscordToken = " + DiscordToken + linebreak +"DiscordChannel = " + DiscordChannel + linebreak +"DiscordChannelID = " + DiscordChannelID + linebreak +"Password = " + Password + linebreak +"MaxAccountsPerUser = " + MaxAccountsPerUser + linebreak +"AllowCoop = " + AllowCoop + linebreak +"SleepAllowed = " + SleepAllowed + linebreak +"SleepNeeded = " + SleepNeeded + linebreak +"KnockedDownAllowed = " + KnockedDownAllowed + linebreak +"SneakModeHideFromOtherPlayers = " + SneakModeHideFromOtherPlayers + linebreak +"WorkshopItems = " + WorkshopItems + linebreak +"SteamScoreboard = " + SteamScoreboard + linebreak +"SteamVAC = " + SteamVAC + linebreak +"UPnP = " + UPnP + linebreak +"VoiceEnable = " + VoiceEnable + linebreak +"VoiceMinDistance = " + VoiceMinDistance + linebreak +"VoiceMaxDistance = " + VoiceMaxDistance + linebreak +"Voice3D = " + Voice3D + linebreak +"SpeedLimit = " + SpeedLimit + linebreak +"LoginQueueEnabled = " + LoginQueueEnabled + linebreak +"LoginQueueConnectTimeout = " + LoginQueueConnectTimeout + linebreak +"server_browser_announced_ip = " + server_browser_announced_ip + linebreak +"PlayerRespawnWithSelf = " + PlayerRespawnWithSelf + linebreak +"PlayerRespawnWithOther = " + PlayerRespawnWithOther + linebreak +"FastForwardMultiplier = " + FastForwardMultiplier + linebreak +"DisableSafehouseWhenPlayerConnected = " + DisableSafehouseWhenPlayerConnected + linebreak +"Faction = " + Faction + linebreak +"FactionDaySurvivedToCreate = " + FactionDaySurvivedToCreate + linebreak +"FactionPlayersRequiredForTag = " + FactionPlayersRequiredForTag + linebreak +"DisableRadioStaff = " + DisableRadioStaff + linebreak +"DisableRadioAdmin = " + DisableRadioAdmin + linebreak +"DisableRadioGM = " + DisableRadioGM + linebreak +"DisableRadioOverseer = " + DisableRadioOverseer + linebreak +"DisableRadioModerator = " + DisableRadioModerator + linebreak +"DisableRadioInvisible = " + DisableRadioInvisible + linebreak +"ClientCommandFilter = " + ClientCommandFilter + linebreak +"ClientActionLogs = " + ClientActionLogs + linebreak +"PerkLogs = " + PerkLogs + linebreak +"ItemNumbersLimitPerContainer = " + ItemNumbersLimitPerContainer + linebreak +"BloodSplatLifespanDays = " + BloodSplatLifespanDays + linebreak +"AllowNonAsciiUsername = " + AllowNonAsciiUsername + linebreak +"BanKickGlobalSound = " + BanKickGlobalSound + linebreak +"RemovePlayerCorpsesOnCorpseRemoval = " + RemovePlayerCorpsesOnCorpseRemoval + linebreak +"TrashDeleteAll = " + TrashDeleteAll + linebreak +"PVPMeleeWhileHitReaction = " + PVPMeleeWhileHitReaction + linebreak +"MouseOverToSeeDisplayName = " + MouseOverToSeeDisplayName + linebreak +"HidePlayersBehindYou = " + HidePlayersBehindYou + linebreak +"PVPMeleeDamageModifier = " + PVPMeleeDamageModifier + linebreak +"PVPFirearmDamageModifier = " + PVPFirearmDamageModifier + linebreak +"CarEngineAttractionModifier = " + CarEngineAttractionModifier + linebreak +"PlayerBumpPlayer = " + PlayerBumpPlayer + linebreak +"MapRemotePlayerVisibility = " + MapRemotePlayerVisibility + linebreak +"BackupsCount = " + BackupsCount + linebreak +"BackupsOnStart = " + BackupsOnStart + linebreak +"BackupsOnVersionChange = " + BackupsOnVersionChange + linebreak +"BackupsPeriod = " + BackupsPeriod + linebreak +"AntiCheatProtectionType1 = " + AntiCheatProtectionType1 + linebreak +"AntiCheatProtectionType2 = " + AntiCheatProtectionType2 + linebreak +"AntiCheatProtectionType3 = " + AntiCheatProtectionType3 + linebreak +"AntiCheatProtectionType4 = " + AntiCheatProtectionType4 + linebreak +"AntiCheatProtectionType5 = " + AntiCheatProtectionType5 + linebreak +"AntiCheatProtectionType6 = " + AntiCheatProtectionType6 + linebreak +"AntiCheatProtectionType7 = " + AntiCheatProtectionType7 + linebreak +"AntiCheatProtectionType8 = " + AntiCheatProtectionType8 + linebreak +"AntiCheatProtectionType9 = " + AntiCheatProtectionType9 + linebreak +"AntiCheatProtectionType10 = " + AntiCheatProtectionType10 + linebreak +"AntiCheatProtectionType11 = " + AntiCheatProtectionType11 + linebreak +"AntiCheatProtectionType12 = " + AntiCheatProtectionType12 + linebreak +"AntiCheatProtectionType13 = " + AntiCheatProtectionType13 + linebreak +"AntiCheatProtectionType14 = " + AntiCheatProtectionType14 + linebreak +"AntiCheatProtectionType15 = " + AntiCheatProtectionType15 + linebreak +"AntiCheatProtectionType16 = " + AntiCheatProtectionType16 + linebreak +"AntiCheatProtectionType17 = " + AntiCheatProtectionType17 + linebreak +"AntiCheatProtectionType18 = " + AntiCheatProtectionType18 + linebreak +"AntiCheatProtectionType19 = " + AntiCheatProtectionType19 + linebreak +"AntiCheatProtectionType20 = " + AntiCheatProtectionType20 + linebreak +"AntiCheatProtectionType21 = " + AntiCheatProtectionType21 + linebreak +"AntiCheatProtectionType22 = " + AntiCheatProtectionType22 + linebreak +"AntiCheatProtectionType23 = " + AntiCheatProtectionType23 + linebreak +"AntiCheatProtectionType24 = " + AntiCheatProtectionType24 + linebreak +"AntiCheatProtectionType2ThresholdMultiplier = " + AntiCheatProtectionType2ThresholdMultiplier + linebreak +"AntiCheatProtectionType3ThresholdMultiplier = " + AntiCheatProtectionType3ThresholdMultiplier + linebreak +"AntiCheatProtectionType4ThresholdMultiplier = " + AntiCheatProtectionType4ThresholdMultiplier + linebreak +"AntiCheatProtectionType9ThresholdMultiplier = " + AntiCheatProtectionType9ThresholdMultiplier + linebreak +"AntiCheatProtectionType15ThresholdMultiplier = " + AntiCheatProtectionType15ThresholdMultiplier + linebreak +"AntiCheatProtectionType20ThresholdMultiplier = " + AntiCheatProtectionType20ThresholdMultiplier + linebreak +"AntiCheatProtectionType22ThresholdMultiplier = " + AntiCheatProtectionType22ThresholdMultiplier + linebreak +"AntiCheatProtectionType24ThresholdMultiplier = " + AntiCheatProtectionType24ThresholdMultiplier
var iniPath = serverloc + ininame

//Write servertest.ini
fs.writeFile(iniPath, iniCode, (err) => {
    if (err) {
        console.error('Error writing ini file:', err);
    } else {
        console.log('ini file created successfully!');
    }
});

//Update mem
var updateWipeNumber = WipeNumber + 1
var updateResetID = ResetID + 1
var updatePlayerID = PlayerID + 1
var jsonCode = '{"memory":{"wipenumber":' + updateWipeNumber + ',"resetid":' + updateResetID + ',"playerid":' + updatePlayerID + '}}'
var jsonPath = serverloc + 'mem.json'

//Write mem.json
fs.writeFile(jsonPath, jsonCode, (err) => {
    if (err) {
        console.error('Error writing json file:', err);
    } else {
        console.log('json file created successfully!');
    }
});