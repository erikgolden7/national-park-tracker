const parks = [
  "Abraham Lincoln Birthplace NHS",
  "Acadia National Park",
  "Adams NHP",
  "Agate Fossil Beds NM",
  "Alagnak Wild River",
  "Alaska National Parks",
  "Alibates Flint Quarries NM",
  "Allegheny Portage Railroad NHS",
  "American Memorial Park ",
  "Amistad National Rec Area",
  "Andersonville NHS",
  "Andrew Johnson NHS",
  "Aniakchak NM and Preserve",
  "Antietam National Battlefield",
  "Apostle Islands National Lakeshore",
  "Appalachian National Scenic Trail",
  "Appomattox Court House NHP",
  "Arches National Park",
  "Arkansas Post National Memorial",
  "Arlington House, The Robert E Lee Memorial",
  "Assateague Island National Seashore",
  "Aztec Ruins NM",
  "Badlands National Park",
  "Baltimore-Washington Parkway ",
  "Bandelier NM",
  "Benjamin Franklin National Memorial",
  "Bent's Old Fort NHS",
  "Bering Land Bridge National Preserve",
  "Big Bend National Park",
  "Big Cypress National Preserve",
  "Big Hole National Battlefield",
  "Big South Fork National River and Rec Area",
  "Big Thicket National Preserve",
  "Bighorn Canyon National Rec Area",
  "Biscayne National Park",
  "Black Canyon of the Gunnison National Park",
  "Blackstone River Valley Natl Heritage Corridor",
  "Blue Ridge Parkway",
  "Bluestone National Scenic River",
  "Booker T Washington NM",
  "Boston African American NHS",
  "Boston Harbor Islands National Rec Area",
  "Boston NHP",
  "Brices Cross Roads National Battlefield Site",
  "Brown v Board of Education NHS",
  "Bryce Canyon National Park",
  "Buck Island Reef NM",
  "Buffalo National River",
  "Cabrillo NM",
  "California National Historic Trail",
  "Canaveral National Seashore",
  "Cane River Creole NHP ",
  "Canyon de Chelly NM",
  "Canyonlands National Park",
  "Cape Cod National Seashore",
  "Cape Hatteras National Seashore",
  "Cape Krusenstern NM",
  "Cape Lookout National Seashore",
  "Capitol Reef National Park",
  "Capulin Volcano NM",
  "Carl Sandburg Home NHS",
  "Carlsbad Caverns National Park",
  "Casa Grande Ruins NM ",
  "Castillo de San Marcos NM",
  "Castle Clinton NM ",
  "Catoctin Mountain Park",
  "Cedar Breaks NM",
  "Cedar Creek and Belle Grove NHP",
  "César E. Chávez National Monument",
  "Chaco Culture NHP",
  "Chamizal National Memorial",
  "Channel Islands National Park",
  "Charles Pinckney NHS",
  "Chattahoochee River National Rec Area",
  "Chesapeake and Ohio Canal NHP",
  "Chicago Portage NHS ",
  "Chickamauga and Chattanooga Natl Military Park",
  "Chickasaw National Rec Area",
  "Chimney Rock NHS",
  "Chiricahua NM",
  "Christiansted NHS",
  "City of Rocks National Reserve",
  "Clara Barton NHS",
  "Claude Moore Colonial Farm ",
  "Colonial NHP",
  "Colorado NM",
  "Congaree National Park",
  "Constitution Gardens",
  "Coronado National Memorial",
  "Cowpens National Battlefield",
  "Crater Lake National Park",
  "Craters of the Moon NM and Preserve",
  "Cumberland Gap NHP",
  "Cumberland Island National Seashore",
  "Curecanti National Rec Area",
  "Cuyahoga Valley National Park",
  "Little Rock Central High School",
  "David Berger National Memorial ",
  "Dayton Aviation Heritage NHP",
  "De Soto National Memorial",
  "Death Valley National Park",
  "Delaware and Lehigh National Heritage Corridor ",
  "Delaware Water Gap National Rec Area",
  "Denali National Park and Preserve",
  "Devils Postpile NM",
  "Devils Tower NM",
  "Dinosaur NM",
  "Dry Tortugas National Park",
  "Ebey’s Landing National Historical Reserve",
  "Edgar Allan Poe NHS ",
  "Edison NHS ",
  "Effigy Mounds NM",
  "Eisenhower NHS",
  "El Camino Real de los Tejas",
  "El Malpais NM",
  "El Morro NM",
  "Eleanor Roosevelt NHS ",
  "Ellis Island",
  "Erie Canal",
  "Eugene O'Neill NHS ",
  "Everglades National Park",
  "Farmington Wild and Scenic River ",
  "Father Marquette National Memorial ",
  "Federal Hall National Memorial ",
  "Fire Island National Seashore",
  "First Ladies NHS",
  "Flight 93 National Memorial",
  "Florissant Fossil Beds NM",
  "Ford's Theatre NHS",
  "Fort Bowie NHS",
  "Fort Caroline National Memorial",
  "Fort Davis NHS",
  "Fort Donelson National Battlefield",
  "Fort Frederica NM",
  "Fort Laramie NHS ",
  "Fort Larned NHS",
  "Fort Matanzas NM",
  "Fort McHenry NM and Historic Shrine",
  "Fort Monroe",
  "Fort Moultrie",
  "Fort Necessity National Battlefield",
  "Fort Point NHS",
  "Fort Pulaski NM",
  "Fort Raleigh NHS",
  "Fort Scott NHS ",
  "Fort Smith NHS",
  "Fort Stanwix NM",
  "Fort Sumter NM",
  "Fort Union NM",
  "Fort Union Trading Post NHS",
  "Fort Vancouver NHS",
  "Fort Washington Park",
  "Fossil Butte NM",
  "Franklin Delano Roosevelt Memorial",
  "Frederick Douglass NHS ",
  "Frederick Law Olmsted NHS ",
  "Fredericksburg and Spotsylvania Natl Military Park",
  "Friendship Hill NHS",
  "Gates of the Arctic National Park and Preserve",
  "Gateway National Rec Area",
  "Gauley River National Rec Area",
  "General Grant National Memorial",
  "George Rogers Clark NHP",
  "George Washington Birthplace NM ",
  "George Washington Carver NM",
  "George Washington Memorial Parkway",
  "Gettysburg National Military Park",
  "Gila Cliff Dwellings NM",
  "Glacier Bay National Park and Preserve",
  "Glacier National Park",
  "Glen Canyon National Rec Area",
  "Glen Echo Park",
  "Gloria Dei (Old Swedes) Church NHS ",
  "Glorieta Battlefield ",
  "Golden Gate National Rec Area",
  "Golden Spike NHS",
  "Governors Island NM",
  "Grand Canyon National Park",
  "Grand Canyon-Parashant National Monument"
]);
// Grand Portage NM
// Grand Teton National Park
// Grant-Kohrs Ranch NHS
// Great Basin National Park
// Great Egg Harbor Scenic and Rec River
// Great Falls Park
// Great Sand Dunes National Park and Preserve
// Great Smoky Mountains National Park
// Green Springs Historic District
// Greenbelt Park
// Guadalupe Mountains National Park
// Guilford Courthouse National Military Park
// Gulf Islands National Seashore
// Hagerman Fossil Beds NM
// Haleakala National Park
// Hamilton Grange National Memorial
// Hampton NHS
// Harpers Ferry NHP
// Harriet Tubman Underground Railroad
// Harry S Truman NHS
// Hawai'i Volcanoes National Park
// Herbert Hoover NHS
// Hohokam Pima NM
// Home of Franklin D Roosevelt NHS
// Homestead NM of America
// Hopewell Culture NHP
// Hopewell Furnace NHS
// Horace M Albright Training Center
// Horseshoe Bend National Military Park
// Hot Springs National Park
// Hovenweep NM
// Hubbell Trading Post NHS
// Ice Age National Scenic Trail
// Illinois and Michigan Canal Natl Heritage Corridor
// Independence NHP
// Indiana Dunes National Lakeshore
// Isle Royale National Park
// James A Garfield NHS
// Jamestown NHS
// Jean Lafitte NHP and Preserve
// Jefferson National Expansion Memorial
// Jewel Cave NM
// Jimmy Carter NHS
// John D Rockefeller Jr Memorial Parkway
// John Day Fossil Beds NM
// John Fitzgerald Kennedy NHS
// John Muir NHS
// Johnstown Flood National Memorial
// Joshua Tree National Park
// New Orleans Jazz NHP
// Kalaupapa NHP
// Kaloko-Honokohau NHP
// Katmai National Park and Preserve
// Kenai Fjords National Park
// Kennesaw Mountain National Battlefield Park
// Keweenaw NHP
// Kings Mountain National Military Park
// Klondike Gold Rush NHP
// Klondike Gold Rush NHP-Seattle Unit
// Knife River Indian Villages NHS
// Kobuk Valley National Park
// Korean War Veterans Memorial
// Lake Chelan National Rec Area
// Lake Clark National Park and Preserve
// Lake Mead National Rec Area
// Lake Meredith National Rec Area
// Lake Roosevelt National Rec Area
// Lassen Volcanic National Park
// Lava Beds NM
// LBJ Memorial Grove on the Potomac
// Lewis and Clark National Historic Trail
// Lewis and Clark NHP
// Lincoln Boyhood National Memorial
// Lincoln Home NHS
// Lincoln Memorial
// Little Bighorn Battlefield NM
// Little River Canyon National Preserve
// Little Rock Central High School NHS
// Longfellow NHS
// Lowell NHP
// Lyndon B Johnson NHP
// Maggie L Walker NHS
// Mammoth Cave National Park
// Manassas National Battlefield Park
// Manhattan Sites
// Manzanar NHS
// Marsh-Billings-Rockefeller NHP
// Martin Luther King Jr NHS
// Martin Van Buren NHS
// Mary McLeod Bethune Council House NHS
// McLoughlin House NHS
// Mesa Verde National Park
// Middle Delaware National Scenic River
// Minidoka NHS
// Minute Man NHP
// Minuteman Missle NHS
// Mississippi National River and Rec Area
// Missouri National Rec River
// Mojave National Preserve
// Monocacy National Battlefield
// Montezuma Castle NM
// Moores Creek National Battlefield
// Mormon Pioneer National Historic Trail
// Morristown NHP
// Mount Rainier National Park
// Mount Rushmore National Memorial
// Muir Woods NM
// Natchez NHP
// Natchez Trace National Scenic Trail
// Natchez Trace Parkway
// National Capital Parks-Central
// National Capital Parks-East
// National Mall
// National Park of American Samoa
// National Park Service
// National World War II Memorial
// Natural Bridges NM
// Navajo NM
// New Bedford Whaling NHP
// New Jersey Coastal Heritage Trail Route
// New River Gorge National River
// Nez Perce NHP
// Nicodemus NHS
// Ninety Six NHS
// Niobrara National Scenic River
// Noatak National Preserve
// North Cascades National Park
// North Country National Scenic Trail
// Northwest Alaska Areas
// Obed Wild and Scenic River
// Ocmulgee NM
// Oklahoma City National Memorial
// Old Post Office Tower
// Olympic National Park
// Oregon Caves NM
// Oregon National Historic Trail
// Organ Pipe Cactus NM
// Overmountain Victory National Historic Trail
// Ozark National Scenic Riverways
// New Jersey Pinelands
// Padre Island National Seashore
// Palo Alto Battlefield NHS
// Paterson-Great Falls
// Pea Ridge National Military Park
// Pecos NHP
// Pennsylvania Avenue NHS
// Perry's Victory and International Peace Memorial
// Petersburg National Battlefield
// Petrified Forest National Park
// Petroglyph NM
// Pictured Rocks National Lakeshore
// Pinnacles NP
// Pipe Spring NM
// Pipestone NM
// Piscataway Park
// Point Reyes National Seashore
// Pony Express National Historic Trail
// Port Chicago
// Potomac Heritage National Scenic Trail
// Poverty Point NM
// Presidio of San Francisco
// Prince William Forest Park
// Pu'uhonua o Honaunau NHP
// Pu'ukohola Heiau NHS
// Rainbow Bridge NM
// Redwood National and State Parks
// Richmond National Battlefield Park
// Rio Grande Wild and Scenic River
// River Raisin
// Rock Creek Park
// Rocky Mountain National Park
// Roger Williams National Memorial
// Roosevelt Campobello International Park
// Rosie the Riveter/World War II Home Front NHP
// Ross Lake National Rec Area
// Russell Cave NM
// Sagamore Hill NHS
// Saguaro National Park
// Saint Croix Island International Historic Site
// Saint Croix National Scenic Riverway
// Saint Paul's Church NHS
// Saint-Gaudens NHS
// Salem Maritime NHS
// Salinas Pueblo Missions NM
// Salt River Bay NHP and Ecological Preserve
// San Antonio Missions NHP
// San Francisco Maritime NHP
// San Juan Island NHP
// San Juan NHS
// Sand Creek Massacre
// Santa Fe National Historic Trail
// Santa Monica Mountains National Rec Area
// Saratoga NHP
// Saugus Iron Works NHS
// Scotts Bluff NM
// Selma to Montgomery NHT
// Sequoia and Kings Canyon National Parks
// Sewall-Belmont House NHS
// Shenandoah National Park
// Shiloh National Military Park
// Sitka NHP
// Sleeping Bear Dunes National Lakeshore
// Springfield Armory NHS
// Statue of Liberty NM
// Steamtown NHS
// Stephen T Mather Training Center
// Stones River National Battlefield
// Sunset Crater Volcano NM
// Tallgrass Prairie National Preserve
// Thaddeus Kosciuszko National Memorial
// Theodore Roosevelt Birthplace NHS
// Theodore Roosevelt Inaugural NHS
// Theodore Roosevelt Island
// Theodore Roosevelt National Park
// Thomas Jefferson Memorial
// Thomas Stone NHS
// Timpanogos Cave NM
// Timucuan Ecological and Historic Preserve
// Tonto NM
// Touro Synagogue NHS
// Trail of Tears National Historic Trail
// Tumacacori NHP
// Tupelo National Battlefield
// Tuskegee Airmen NHS
// Tuskegee Institute NHS
// Tuzigoot NM
// Ulysses S Grant NHS
// Underground Railroad
// Upper Delaware Scenic and Rec River
// USS Arizona Memorial
// Valley Forge NHP
// Vanderbilt Mansion NHS
// Vicksburg National Military Park
// Vietnam Veterans Memorial
// Virgin Islands Coral Reef NM
// Virgin Islands National Park
// Voyageurs National Park
// World War II Valor in the Pacific
// Walnut Canyon NM
// War in the Pacific NHP
// Washington Monument
// Washita Battlefield NHS
// Weir Farm NHS
// Whiskeytown-Shasta-Trinity National Rec Area
// White House
// White Sands NM
// Whitman Mission NHS
// William Howard Taft NHS
// Wilson's Creek National Battlefield
// Wind Cave National Park
// Wolf Trap National Park for the Performing Arts
// Women's Rights NHP
// Wrangell-St Elias National Park and Preserve
// Wright Brothers National Memorial
// Wupatki NM
// Yellowstone National Park
// Yorktown Battlefield
// Yosemite National Park
// Yucca House NM
// Yukon-Charley Rivers National Preserve
// Zion National Park


export default parks;
